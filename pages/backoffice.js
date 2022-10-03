import * as React from 'react'
import { useAuthContext } from '../auth-context'
import Search from '../components/Asesores/Search'
import TitleBackoffice from '../components/TitleBackoffice'
import TableUser from '../components/Asesores/TableUser'
import TableRow from '../components/Asesores/TableUser/TableRow'
import { useRouter } from 'next/router'
import LayoutRol from '../Layout/LayoutRol'
import Modal from '../components/SuperAdmin/Modal'
import { fetchData } from '../utils/fetchData'
import { dateUtc } from '../utils/dateUtc'
import { NumeroRegistro } from '../components/Filtro/NumeroRegistro'
import { ProtectedRoute } from '../components/protected-route'
import { Filtros } from '../components/Filtros'
import { Tabs } from '../components/Tabs'
import { ContainerTab } from '../components/Tabs/ContainerTab'
import ErrorPage from './_error'
import { getData } from '../utils/getData'
import { protectRouteAndRedirect } from '../utils/protect-route.server'
import { customFetch, RequestTypes } from '../utils/custom-fetch'


function getToken() {
  const isToken = Boolean(window.localStorage.getItem('access_token') ? true : false)
  return isToken
}

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'



const initialState = {
  userId: '',
  loading: false,
  data: [],
  error: '',
  token: true,
}
const initialConfigFilter = {
  numberRegister: 10,
  numberPage: 0,
}

const ROLES = ['ADMINISTRADOR', 'SUPERADMINISTRADOR']
const BackOffice = ({ usuarios }) => {
  const router = useRouter()
  const { rol, usuario } = useAuthContext()
  const [loadinLayout, setLoadingLayout] = React.useState(true)
  const [openBox, setOpenBox] = React.useState(false)
  const [solicitudPorAsesor, setsolicitudPorAsesor] = React.useState({})
  const [openMod, setOpenMod] = React.useState(false)
  const [applicationToSend, setApplicationToSend] = React.useState([])
  const [MensajeError, setErrorMensaje] = React.useState('')
  const [firstCallAPI, setFirsCallAPI] = React.useState(initialState)
  const [openFilter, setOpenFilter] = React.useState(false)
  const [configFilter, setConfigFilter] = React.useState(initialConfigFilter)
  const { numberRegister, numberPage } = configFilter
  const [NotFoundResult, setNotFoundResult] = React.useState('')
  const [NotFoundResultTabTwo, setNotFoundResultTabTwo] = React.useState('')

  React.useEffect(() => {
    setLoadingLayout(true)
    if (rol) {
      setLoadingLayout(false)
      return
    }
    setLoadingLayout(false)
  }, [rol])

  const [search, setSearch] = React.useState(initialState)
  const [infoHistoricaUser, setInfoHistoricaUser] = React.useState([])

  React.useEffect(() => {
    async function run() {
      setSearch(search => ({
        ...search,
        loading: true,
        data: [],
        error: '',
      }))

      if (rol && ROLES.includes(rol)) {
        try {
          const { response: fetchCreditos } = await getData(
            `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1
            }credito/solicitudes?indice=${Number(numberPage)}&limite=${Number(numberRegister)}`,
          ) //&usuario={3000}&fecha={2021-11-21}

          if (fetchCreditos.status === 200) {
            setNotFoundResult('')
            const solicitudes = await fetchCreditos.json()
            solicitudes.map(({ id, asesor }) => {
              setsolicitudPorAsesor(prev => {
                return {
                  ...prev,
                  [id]: {
                    asesor: asesor ? asesor?.num_identificacion : '',
                    isChecked: false,
                    solicitud_id: id,
                  },
                }
              })
            })

            const sortedData = solicitudes.sort(
              (a, b) => new Date(b.fecha_creacion) - new Date(a.fecha_creacion),
            )

            setFirsCallAPI(sortedData)
            setSearch(search => ({
              ...search,
              data: solicitudes,
              loading: false,
              error: '',
              token: true,
            }))
          }

          if (fetchCreditos.status === 404) {
            setSearch(search => ({
              ...search,
              loading: false,
              token: getToken(),
            }))
            setNotFoundResult('No se encontraron más resultados')
          }

          if (fetchCreditos.status === 401) {
            setSearch(search => ({
              ...search,
              loading: false,
              token: false,
            }))
            setNotFoundResult('')
          }

          if (fetchCreditos.status === 400) {
            setNotFoundResult('')
            setSearch({ ...initialState, token: getToken() })
            setConfigFilter(initialConfigFilter)
          }
        } catch (error) {
          setNotFoundResult('')
          setSearch({ ...initialState, token: getToken() })
          setConfigFilter(initialConfigFilter)
        }
      } else {
        setSearch(search => ({
          ...search,
          loading: false,
          token: getToken(),
        }))
      }
    }
    run()
  }, [rol, numberRegister, numberPage])

  const handleApplicationSelected = () => {
    let arrayFilteredByApplication = []
    for (const application in solicitudPorAsesor) {
      if (solicitudPorAsesor[application].isChecked === true) {
        arrayFilteredByApplication.push({
          ...solicitudPorAsesor[application],
          asesor: solicitudPorAsesor[application].asesor
            ? solicitudPorAsesor[application].asesor
            : null,
        })
      }
    }
    setApplicationToSend([...arrayFilteredByApplication])

    if (arrayFilteredByApplication.length > 0) setOpenMod(true)
    else {
      setOpenBox(false)
      setErrorMensaje('Hubo un error -  Debes seleccionar una solicitud de proceso')
      setTimeout(() => {
        setErrorMensaje('')
      }, 5000)
    }
    setOpenBox(false)
  }

  const sendSolicitud = async () => {
    try {
      const URL_ASIGNAR_ASESOR = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`

      const dataToSend = applicationToSend.map(({ asesor, solicitud_id }) => ({
        seccion: 'ASE',
        solicitud_id,
        data: {
          num_identificacion: Number(asesor),
          fecha_asignacion: dateUtc(),
          asignador: Number(usuario),
        },
      }))

      const dataPromise = dataToSend.map(application => {
        return fetchData(URL_ASIGNAR_ASESOR, application)
      })

      const responses = await Promise.all(dataPromise)
      const responseFail = responses.find(({ responseComplete }) => responseComplete === false)

      setOpenMod(false)

      if (responseFail) {
        setOpenBox(false)
        setErrorMensaje('Hubo un error - intenta más tarde')
        setTimeout(() => {
          setErrorMensaje('')
        }, 5000)
      } else {
        setOpenBox(false)
        setErrorMensaje('Proceso asignado exitosamente')
        setTimeout(() => {
          setErrorMensaje('')
          router.replace(router.asPath)
        }, 5000)
      }
    } catch (error) {
      setOpenMod(false)
      setOpenBox(false)
      setErrorMensaje('Hubo un error - intenta más tarde')
      setTimeout(() => {
        setErrorMensaje('')
      }, 5000)
    }
  }
  const handleCancel = () => {
    setOpenMod(false)
  }

  const [toggleState, setToggleState] = React.useState(1)

  function User() {
    return (
      <>
        <TitleBackoffice>Solicitudes de crédito</TitleBackoffice>
        <div className="w-full">

          <Search
            search={search}
            setSearch={setSearch}
            firstCallAPI={firstCallAPI}
            infoHistoricaUser={infoHistoricaUser}
            setInfoHistoricaUser={setInfoHistoricaUser}
            configFilter={configFilter}
            setConfigFilter={setConfigFilter}
            NotFoundResultTabTwo={NotFoundResultTabTwo}
            setNotFoundResultTabTwo={setNotFoundResultTabTwo}
          />
        </div>
        <div className="grid">
                  {openFilter ? (
                    <>
                      <Filtros
                        usuarios={usuarios}
                        search={search}
                        setSearch={setSearch}
                        firstCallAPI={firstCallAPI}
                        configFilter={configFilter}
                        openFilter={openFilter}
                        setOpenFilter={setOpenFilter}
                      />
                    </>
                  ) : null}
                </div>
        {/* {ROLES.includes(rol) ? (
          <>
            <div className='flex justify-center sm:justify-end relative ml-4 mb-4'>
              <div
                type="button"
                className="relative hover:cursor-pointer ml-4 flex items-center flex-end text-start sm:max-h-16 border w-max px-4 py-2 border-color_primary_2_ligth rounded-full bg-white text-color_primary_2_ligth font-bold select  order-2"
                onClick={() => setOpenBox(!openBox)}
              >
                Acciones para selección{' '}
                <img src="/arrow-down.svg" alt="arrow-down" className="ml-2 h-2" />
              </div>

              {openBox ? (
                <ul className="dropdown-custom border  flex flex-col  mb-2 bg-white rounded-lg absolute z-50 right-0 top-12">
                  <li>
                    <button
                      onClick={handleApplicationSelected}
                      className="text-left  w-full px-4 py-2 hover:bg-color_primary_2_ligth rounded-tr-lg  rounded-tl-lg"
                    >
                      Asignar solicitudes seleccionadas
                    </button>
                  </li>

                  <li>
                    <button
                      className="px-4 py-2 hover:bg-color_primary_2_ligth text-left w-full rounded-br-lg  rounded-bl-lg"
                      onClick={() => {
                        setOpenFilter(true)
                        setOpenBox(false)
                      }}
                    >
                      {' '}
                      Más fitros
                    </button>
                  </li>
                </ul>
              ) : null}
            </div>
          </>
        ) : null} */}

        <div
          id="handle-solicitud"
          className={
            openMod && `fixed inset-0 bg-modal-info  flex justify-center z-50`
          }
        ></div>

        {openMod ? (
          <Modal nodo="handle-solicitud" className="flex items-center">
            <div className="border card-modal-sm flex flex-col">
              <div className='body-card-modal-sm'>
                <h1 className='titulo-modal-info'>Confirmar acción</h1>
                <p>¿Estás seguro deseas cambiar el rol de este usuario?</p>
              </div>
              <div className="flex justify-center footer-card-modal-sm">
                <button
                  type="submit"
                  className="btn-primario order-2 ml-4"
                  onClick={sendSolicitud}
                >
                  Si
                </button>
                <button
                  type="submit"
                  className=" order-1 btn-texto-gris"
                  onClick={handleCancel}
                >
                  Cancelar
                </button>

              </div>
            </div>
          </Modal>
        ) : null}

        <div className='card-custom'>
          <Tabs toggleState={toggleState} setToggleState={setToggleState}>

            <ContainerTab toggleState={toggleState} tabNumber={1}>
              <div>
                <ul className="flex flex-row justify-end mb-4">
                <li>
                    <button
                      className="btn-texto"
                      onClick={() => {
                        setOpenFilter(true)
                        setOpenBox(false)
                      }}
                    >
                      {' '}
                      Filtrar de datos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={handleApplicationSelected}
                      className="btn-secundario"
                    >
                      Asignar solicitudes seleccionadas
                    </button>
                  </li>

                  
                </ul>
                
                {search.loading ? (
                  <div><div className='flex flex-nowrap flex-row items-center'>
                    <div className='h-16 flex items-center'>Cargando ...</div>
                    <div className="spinner_cont items-center">
                      <span className="material spinner" />
                    </div>
                  </div> </div>
                ) : (
                  <>
                    {MensajeError !== '' ? (
                      <div
                        className={MensajeError.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}
                      >
                        {MensajeError}
                      </div>
                    ) : null}

                    {search.error === '' ? (
                      search.data.length > 0 ? (
                        <>
                          <div className="border overflow-x-auto">
                            <TableUser>
                              {search.data.map(
                                ({ deudor, codeudor, estado_solicitud, tipo, id, asesor }) => {
                                  if (
                                    deudor?.persona?.num_identificacion === Number(search.userId)
                                  ) {
                                    return (
                                      <TableRow
                                        key={id}
                                        nombres={`${deudor.persona.primer_nombre} ${deudor.persona.seguno_nombre || ''
                                          }`}
                                        apellidos={`${deudor.persona.primer_apellido} ${deudor.persona.seguno_apellido || ''
                                          }`}
                                        cedula={deudor.persona.num_identificacion}
                                        rol={deudor.tipo}
                                        credito={tipo}
                                        estado_solicitud={estado_solicitud}
                                        sid={id}
                                        usuarios={usuarios}
                                        asesor={asesor}
                                        solicitudPorAsesor={solicitudPorAsesor}
                                        setsolicitudPorAsesor={setsolicitudPorAsesor}
                                      />
                                    )
                                  }

                                  if (
                                    codeudor?.persona?.num_identificacion ===
                                    Number(search.userId)
                                  ) {
                                    return (
                                      <TableRow
                                        key={`T-${id}`}
                                        nombres={`${codeudor.persona.primer_nombre} ${codeudor.persona.seguno_nombre || ''
                                          }`}
                                        apellidos={`${codeudor.persona.primer_apellido} ${codeudor.persona.seguno_apellido || ''
                                          }`}
                                        cedula={codeudor.persona.num_identificacion}
                                        rol={codeudor.tipo}
                                        credito={tipo}
                                        estado_solicitud={estado_solicitud}
                                        sid={id}
                                        usuarios={usuarios}
                                        asesor={asesor}
                                        solicitudPorAsesor={solicitudPorAsesor}
                                        setsolicitudPorAsesor={setsolicitudPorAsesor}
                                      />
                                    )
                                  }

                                  return (
                                    <React.Fragment key={id}>
                                      <TableRow
                                        nombres={`${deudor?.persona.primer_nombre} ${deudor?.persona.seguno_nombre || ''
                                          }`}
                                        apellidos={`${deudor?.persona.primer_apellido} ${deudor?.persona.seguno_apellido || ''
                                          }`}
                                        cedula={deudor?.persona.num_identificacion}
                                        rol={deudor?.tipo}
                                        credito={tipo}
                                        estado_solicitud={estado_solicitud}
                                        sid={id}
                                        usuarios={usuarios}
                                        asesor={asesor}
                                        solicitudPorAsesor={solicitudPorAsesor}
                                        setsolicitudPorAsesor={setsolicitudPorAsesor}
                                      />
                                    </React.Fragment>
                                  )
                                },
                              )}
                            </TableUser>
                          </div>
                          {NotFoundResult !== '' ? (
                            <div
                              className={
                                NotFoundResult.includes('No se encontraron más resultados')
                                  ? `${ERROR_CLASS}`
                                  : null
                              }
                            >
                              {NotFoundResult}
                            </div>
                          ) : null}
                          {search.userId === '' && (
                            <NumeroRegistro
                              configFilter={configFilter}
                              setConfigFilter={setConfigFilter}
                              NotFoundResult={NotFoundResult}
                            />
                          )}
                        </>
                      ) : (
                        <div>Ingresa la cédula de un usuario</div>
                      )
                    ) : (
                      <div className="mensaje-error mb-4 px-4 py-3 rounded relative">
                        {' '}
                        {search.error}{' '}
                      </div>
                    )}
                  </>
                )}
              </div>
            </ContainerTab>
            <ContainerTab toggleState={toggleState} tabNumber={2}>
              {infoHistoricaUser.length > 0 ? (
                <>

                  <div className="overflow-x-auto">

                    <TableUser>
                      {infoHistoricaUser.map(
                        ({ deudor, codeudor, estado_solicitud, tipo, id, asesor }, index) => {
                          if (
                            Number(deudor?.persona?.num_identificacion) === Number(search.userId)
                          ) {
                            return (
                              <TableRow
                                key={id + index}
                                nombres={`${deudor.persona.primer_nombre} ${deudor.persona.seguno_nombre || ''
                                  }`}
                                apellidos={`${deudor.persona.primer_apellido} ${deudor.persona.seguno_apellido || ''
                                  }`}
                                cedula={deudor.persona.num_identificacion}
                                rol={deudor.tipo}
                                credito={tipo}
                                estado_solicitud={estado_solicitud}
                                sid={id}
                                usuarios={usuarios}
                                asesor={asesor}
                                solicitudPorAsesor={solicitudPorAsesor}
                                setsolicitudPorAsesor={setsolicitudPorAsesor}
                              />
                            )
                          }

                          if (
                            Number(codeudor?.persona?.num_identificacion) ===
                            Number(search.userId)
                          ) {
                            return (
                              <TableRow
                                key={id + index}
                                nombres={`${codeudor.persona.primer_nombre} ${codeudor.persona.seguno_nombre || ''
                                  }`}
                                apellidos={`${codeudor.persona.primer_apellido} ${codeudor.persona.seguno_apellido || ''
                                  }`}
                                cedula={codeudor.persona.num_identificacion}
                                rol={codeudor.tipo}
                                credito={tipo}
                                estado_solicitud={estado_solicitud}
                                sid={id}
                                usuarios={usuarios}
                                asesor={asesor}
                                solicitudPorAsesor={solicitudPorAsesor}
                                setsolicitudPorAsesor={setsolicitudPorAsesor}
                              />
                            )
                          }
                        },
                      )}
                    </TableUser>
                  </div>
                </>
              ) : (
                'No hay info para mostrar'
              )}
            </ContainerTab>

          </Tabs>
        </div>
      </>
    )
  }

  function renderLayout(rol) {
    return (
      <UsuariosProvider usuarios={usuarios}>
        <ProtectedRoute>
          <LayoutRol rolUser={rol}>{User()}</LayoutRol>
        </ProtectedRoute>
      </UsuariosProvider>
    )
  }

  return loadinLayout ? <div className='flex flex-nowrap flex-row items-center'>
    <div className='h-16 flex items-center'>Cargando ...</div>
    <div className="spinner_cont items-center">
      <span className="material spinner" />
    </div>
  </div> : renderLayout(rol)
}

export default BackOffice

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo

  const response = await customFetch('roles/listar-usuario-rol', {
    type: RequestTypes.auth,
    headers: { Authorization: `Bearer ${sessionInfo.token}` },
  })

  if (response.ok) {
    return { props: { usuarios: await response.json() } }
  } else {
    return { props: {} }
  }
}

const usuarioContext = React.createContext({})

export function UsuariosProvider({ children, usuarios }) {
  return <usuarioContext.Provider value={usuarios}>{children}</usuarioContext.Provider>
}

export function useUsuarioContext() {
  const ctx = React.useContext(usuarioContext)

  return ctx
}
