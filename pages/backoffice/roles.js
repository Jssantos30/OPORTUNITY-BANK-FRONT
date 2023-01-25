import React from 'react'
import LayoutSuperAdmin from '../../Layout/LayoutSuperadmin'
import Title from '../../components/Title'
import Search from '../../components/SuperAdmin/Search'
import TableSuperAdmin from '../../components/SuperAdmin/TableSuperAdmin'
import Modal from '../../components/SuperAdmin/Modal'
import TableRowSuperAdmin from '../../components/SuperAdmin/TableRowSuperAdmin'
import { fetchData } from '../../utils/fetchData'
import { ProtectedRouteSuperAdmin } from '../../components/protected-route-superadmin'
import { FilterRoles } from '../../components/Filtro/FilterRoles'
import { useRouter } from 'next/router'
import { protectRouteAndRedirect } from '../../utils/protect-route.server'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'
import TitleBackoffice from '../../components/TitleBackoffice'

const classModal = `fixed inset-0 bg-modal-info  flex justify-center z-50`
const SUCCESS_CLASS =
  'mb-4 mensaje-exito px-4 py-3 relative'
const ERROR_CLASS =
  'mb-4 mensaje-error px-4 py-3 relative'

const initialMeta = {
  currentPage: 1,
  itemsPerPage: 10,
  totalItems: 10,
  itemCount: 0,
  totalPages: 5,
}

const Roles = ({ roles }) => {
  const [message, setMessage] = React.useState('')
  const [rolValueSelected, setRolValueSelected] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const [dataAdminAsesores, setDataAdminAsesores] = React.useState([])

  const [boxConfirmChange, setBoxConfirmChange] = React.useState(false)
  const reducer = (current, upt) => ({ ...current, ...upt })

  const [{ IdSearched, statusRol, dataUser, messageRol }, dispatch] = React.useReducer(
    reducer,
    {
      IdSearched: '',
      statusRol: '',
      dataUser: [],
      messageRol: '',
    },
  )

  const [meta, setMeta] = React.useState(initialMeta)
  const { currentPage, itemsPerPage } = meta

  React.useEffect(() => {
    async function run() {
      setLoading(true)
      try {
        const response = await customFetch(
          `roles/administrador?page=${meta.currentPage}&limit=${meta.itemsPerPage}`,
          { type: RequestTypes.auth },
        )
        const dataAdminYAsesores = await response.json()

        if (response.status === 200) {
          setMeta(dataAdminYAsesores?.meta)
          dispatch({ dataUser: dataAdminYAsesores?.items || [] })
          setDataAdminAsesores(dataAdminYAsesores?.items || [])
          setLoading(false)
        } else {
          setMeta(initialMeta)
        }
      } catch (error) {
        setMeta(initialMeta)
      }
    }
    run()
  }, [currentPage, itemsPerPage, meta.currentPage, meta.itemsPerPage])

  const handleModifyRol = async () => {
    dispatch({ statusRol: rolValueSelected?.valor })
    const ChangeField = dataUser.filter(
      field => Number(field?.cedula) === Number(rolValueSelected?.cedula),
    )
    const { telefono, celular, cedula, ...infoUser } = ChangeField[0]
    const dataToSend = {
      ...infoUser,
      cedula: Number(cedula),
      telefono: Number(telefono),
      celular: Number(celular),
      rolID: Number(rolValueSelected?.valor),
    }

    //TODO: CAMBIAR EL STATUS DEL DROPDOWN
    try {
      // const URL = 'https://oportunitybank-auth.azurewebsites.net/api/v1/roles/actualizar-usuario-rol'
      const URL = `${process.env.NEXT_PUBLIC_AUTHSERVICE_V1}roles/actualizar-usuario-rol`
      const { responseComplete } = await fetchData(URL, dataToSend)

      if (responseComplete) {
        setBoxConfirmChange(false)
        setMessage('Proceso exitoso, el Usuario ha sido actualizado.')
        setTimeout(() => {
          setMessage('')
          router.replace(router.asPath)
        }, 5000)

        setLoading(true)
        setLoading(false)
      } else {
        setBoxConfirmChange(false)
        setMessage('Hubo un error, intentalo más tarde o comunicate con server.')
        setTimeout(() => {
          setMessage('')
        }, 5000)
      }
    } catch (error) {
      setBoxConfirmChange(false)
      setMessage('Hubo un error, intentalo más tarde o comunicate con server.')
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }

  const handleCancelProcess = () => {
    setBoxConfirmChange(false)
  }

  return (
    <LayoutSuperAdmin>
      <ProtectedRouteSuperAdmin>
        <TitleBackoffice>Configuración de usuarios</TitleBackoffice>
        <div className="flex w-full justify-between flex-col-reverse md:flex-row">
          <div className="flex flex-row items-center justify-center"></div>
          <Search
            {...{ IdSearched, statusRol, dispatch, dataUser, setLoading, dataAdminAsesores }}
          />
        </div>

        {messageRol !== '' ? (
          <div className={messageRol.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
            {messageRol}
          </div>
        ) : null}

        {/* Carga de asesores y admin */}

        {!IdSearched ? (
          loading ? (
            <div><div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> </div>
          ) : dataAdminAsesores.length > 0 ? (
            <>
              <div className='card-custom'>
              <div className='header-card-custom'>
              <span>Lista de Usuarios</span>
              </div>
              <div className='body-card-custom'>
              <TableSuperAdmin>
                {dataAdminAsesores.map((user, index) => {
                  return (
                    <TableRowSuperAdmin
                      key={index}
                      cedula={user.cedula}
                      nombres={user.nombres}
                      apellidos={user.apellidos}
                      correo={user.correo}
                      rol={{
                        rolUser: user.rol,
                        dataRoles: roles,
                        dispatch,
                        statusRol: user.rolID,
                        setBoxConfirmChange,
                        setRolValueSelected,
                      }}
                      acciones={'ACCIONES'}
                    />
                  )
                })}
              </TableSuperAdmin>
              <FilterRoles meta={meta} setMeta={setMeta} />
              </div>
              </div>
            </>
          ) : (
            'No se han encontrado resultados'
          )
        ) : loading ? (
          <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> 
        ) : dataUser.length > 0 ? (
          <TableSuperAdmin>
            {dataUser.map((user, index) => {
              return (
                <TableRowSuperAdmin
                  key={index}
                  cedula={user.cedula}
                  nombres={user.nombres}
                  apellidos={user.apellidos}
                  correo={user.correo}
                  rol={{
                    rolUser: user.rol,
                    dataRoles: roles,
                    dispatch,
                    statusRol,
                    setBoxConfirmChange,
                    setRolValueSelected,
                  }}
                  acciones={'ACCIONES'}
                />
              )
            })}
          </TableSuperAdmin>
        ) : (
          'No se encontraron resultados'
        )}

        <div id="confirm-changes" className={boxConfirmChange && classModal}></div>
        {boxConfirmChange ? (
          <Modal nodo="confirm-changes">
            <div className="border card-modal-sm flex flex-col">
              <div className='body-card-modal-sm'>
              <h1 className='titulo-modal-info'>Confirmar acción</h1>
              <p>¿Estás seguro deseas cambiar el rol de este usuario?</p>
              </div>
              <div className="flex justify-center footer-card-modal-sm">
                <button
                  type="submit"
                  className="btn-primario order-2 ml-4"
                  onClick={handleModifyRol}
                >
                  Si
                </button>
                <button
                  type="submit"
                  className=" order-1 btn-texto-gris"
                  onClick={handleCancelProcess}
                >
                  Cancelar
                </button>
              
              </div>
            </div>
          </Modal>
        ) : null}
        {message !== '' ? (
          <div className={message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
            {message}
          </div>
        ) : null}
      </ProtectedRouteSuperAdmin>
    </LayoutSuperAdmin>
  )
}

export default Roles

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo

  const fetchRoles = await customFetch('roles/listar-roles', {
    type: RequestTypes.auth,
    headers: { Authorization: `Bearer ${sessionInfo.token}` },
  })
  const roles = await fetchRoles.json()

  return { props: { roles } }
}
