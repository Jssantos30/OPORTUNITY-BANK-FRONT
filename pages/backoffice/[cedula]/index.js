import * as React from 'react'
import { useAuthContext } from '../../../auth-context'
import { useRouter } from 'next/router'
import BoxFormInformation from '../../../components/Asesores/BoxFormInformation'
import BoxDeudorInformation from '../../../components/Asesores/BoxDeudorInformation'
import BoxPeerToPeer from '../../../components/Asesores/BoxPeerToPeer'
import LayoutRol from '../../../Layout/LayoutRol'
import Modal from '../../../components/SuperAdmin/Modal'
import { documentosDeudor } from '../../../components/CheckBoxBackOffice/dataDeudor'
import { CheckBoxDocument } from '../../../components/CheckBoxBackOffice/index.'
import { documentosCodeudor } from '../../../components/CheckBoxBackOffice/dataCodeudor'
import { getData } from '../../../utils/getData'
import ErrorPage from '../../_error'
import { customFetch, RequestTypes } from '../../../utils/custom-fetch'
import TitleBackoffice from '../../../components/TitleBackoffice'

const DashBoardBackOffice = ({ sid, cedula }) => {
  const { rol } = useAuthContext()
  const [loadinLayout, setLoadingLayout] = React.useState(true)
  const { push } = useRouter()
  const [loading, setLoading] = React.useState(true)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [getSolicitud, setGetSolicitud] = React.useState([])

  React.useEffect(() => {
    setLoadingLayout(true)
    if (rol) {
      setLoadingLayout(false)
      return
    }
    setLoadingLayout(false)
  }, [rol])

  React.useEffect(() => {
    async function run() {
      const url_get_solicitud = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/usuario/${cedula}`
      const { response, error } = await getData(url_get_solicitud)

      if (error) {
        window.localStorage.clear()
        push('/login')
      }

      if (response.status === 404) {
        setLoading(false)
        setOnErrGet(null)
      }

      if (response.status === 401) {
        setLoading(false)
        setOnErrGet('Hubo un error al consultar la información del crédito, por favor intenta nuevamente')
      }

      if (response.status === 200) {
        const dataSolicitud = await response.json()
        if (!dataSolicitud.length) {
          setGetSolicitud([])
        } else {
          const dataSol = dataSolicitud.filter(sol => sol.id === sid)
          setGetSolicitud(dataSol)
          setLoading(false)
          setOnErrGet(null)
        }
      }
    }
    run()
  }, [cedula, push, sid])

  function DashBoard() {
    return (
      <>
        <div>
          {getSolicitud.map(({ deudor, tipo, codeudor, id }, index) => {
            if (deudor?.persona?.num_identificacion === Number(cedula)) {
              return (
                <div key={index}>
                  <TitleBackoffice>Detalle solicitud</TitleBackoffice>
                  <BoxDeudorInformation
                    title={'Información Usuario - Deudor '}
                    usuario={deudor}
                  />

                  <BoxFormInformation
                    title={'Información del formulario - Deudor'}
                    usuario={deudor}
                    tipo={tipo}
                    id={id}
                    rol={rol}
                    form={'individual'}
                  />

                  <BoxPeerToPeer
                    title={'Información del Codeudor'}
                    nombre="Codeudor"
                    usuario={codeudor}
                    id={id}
                    rol={rol}
                  />

                  <VerifyDocuments data={getSolicitud} cedula={cedula} />

                  <RequestStatus data={getSolicitud} />
                </div>
              )
            }

            if (codeudor?.persona?.num_identificacion === Number(cedula)) {
              return (
                <div key={index}>
                  <BoxDeudorInformation
                    title={'Información Usuario - Codeudor'}
                    usuario={codeudor}
                  />

                  <BoxFormInformation
                    title={'Información del formulario - Codeudor'}
                    usuario={codeudor}
                    tipo={tipo}
                    id={id}
                    rol={rol}
                    form={'codeudor'}
                  />

                  <BoxPeerToPeer
                    title="Información del Deudor"
                    nombre="Deudor"
                    usuario={deudor}
                    id={id}
                    rol={rol}
                  />

                  <VerifyDocuments data={getSolicitud} cedula={cedula} />
                  <RequestStatus data={getSolicitud} />
                </div>
              )
            }
          })}
        </div>
      </>
    )
  }

  return loadinLayout ? (
    <div className='flex flex-nowrap flex-row items-center'>
      <div className='h-16 flex items-center'>Cargando ...</div>
      <div className="spinner_cont items-center">
        <span className="material spinner" />
      </div>
    </div>
  ) : (
    <LayoutRol rolUser={rol}>
      {loading ? (
        <div className='flex flex-nowrap flex-row items-center'>
          <div className='h-16 flex items-center'>Cargando ...</div>
          <div className="spinner_cont items-center">
            <span className="material spinner" />
          </div>
        </div>
      ) : onErrGet ? (
        <ErrorPage message={'No estás autorizado para hacer esta acción'} />
      ) : (
        DashBoard()
      )}
    </LayoutRol>
  )
}

export default DashBoardBackOffice

export async function getServerSideProps(context) {
  const { cedula } = context.params
  const { sid } = context.query

  return { props: { sid, cedula } }
}

const RequestStatus = ({ data }) => {
  const solicitudId = data[0].id
  const [requestStatus, setRequestStatus] = React.useState({
    estado: 'COLOCADO',
    observaciones: 'Falta informacion',
  })
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSendingData, setIsSendingData] = React.useState(false)
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    async function getRequestStatus() {
      const { response: res } = await getData(
        `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/${solicitudId}?seccion=EST`,
      )

      if (res.status === 200) {
        const requestStatus = await res.json()
        setRequestStatus({
          estado: requestStatus.estado,
          observaciones: requestStatus.observaciones,
        })
        setIsLoading(false)
      }
    }
    getRequestStatus()
  }, [])

  function handleChange(e) {
    setRequestStatus({
      ...requestStatus,
      [e.target.name]: e.target.value,
    })
  }

  async function sendDocuments(e) {
    e.preventDefault()
    if (isSendingData) return

    setIsSendingData(true)
    try {
      const token = localStorage.getItem('access_token')
      if (!token) throw new Error('Acción inválida, intenta más tarde .... ')
      const res = await customFetch('credito/solicitud', {
        method: 'POST',
        body: JSON.stringify({
          seccion: 'EST',
          solicitud_id: solicitudId,
          data: requestStatus,
        }),
        type: RequestTypes.credit,
      })

      if (res.status === 201) {
        setMessage('Estado actualizado correctamente')
      } else {
        setMessage('Error al actualizar el estado')
      }
    } catch {
      setMessage('Error al actualizar el estado, comuniquese con la administración')
    }

    setIsSendingData(false)
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  return (
    <div className="my-4 card-custom">
      <h2 className="header-card-custom">Estado de la solicitud</h2>

      {message ? (
        <div className={message.includes('Error') ? ERROR_CLASS : SUCCESS_CLASS} role="alert">
          {message}
        </div>
      ) : null}

      {isLoading ? (
        <div className='flex flex-nowrap flex-row items-center'>
          <div className='h-16 flex items-center'>Cargando ...</div>
          <div className="spinner_cont items-center">
            <span className="material spinner" />
          </div>
        </div>
      ) : (
        <div className="body-card-custom">
          <form onSubmit={sendDocuments}>
            <div className="mb-2">
              <label className="block font-medium">Observaciones:</label>
              <textarea
                name="observaciones"
                id="observaciones"
                defaultValue={requestStatus.observaciones ?? ''}
                className="block border border-gray-400 px-4 w-full form-textarea pt-2 rounded-lg"
                rows="5"
                onInput={handleChange}
                style={{ resize: 'none' }}
                placeholder="Ingrese las observaciones"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block font-medium">Estado: </label>
              <select
                value={requestStatus.estado}
                onChange={handleChange}
                name="estado"
                className="h-10 border border-gray-400 px-4 w-full rounded-lg"
              >
                <option value="COMPLETADO">Completado</option>
                <option value="INCOMPLETO">Incompleto</option>
                <option value="FALTA_DOCUMENTOS">Faltan documentos</option>
                <option value="POR_VALIDAR">Por validar</option>
                <option value="PREPARADO_ENVIO">Listo para enviar al operador</option>
                <option value="APROBADO">Aprobado</option>
                <option value="RECHAZADO">Rechazado</option>
                <option value="COLOCADO">Colocado</option>
              </select>
            </div>
            <div className='card-footer'>
              <div className="flex justify-end">
                <button className="btn-primario">
                  {isSendingData ? 'Enviando...' : 'Guardar cambios'}
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const VerifyDocuments = ({ data, cedula }) => {
  const solicitudId = data[0].id
  const [document, setDocument] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSendingData, setIsSendingData] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [openModalImage, setOpenModalImage] = React.useState(false)
  const [renderImage, setRenderImage] = React.useState('')

  const [documentURL, setDocumentURL] = React.useState([])
  const [, setImgDeudor] = React.useState([])
  const [, setImgCodeudor] = React.useState([])

  const classModal = `fixed inset-0 bg-modal-info  flex justify-center z-50`

  const handleOpenModal = urlImage => {
    setOpenModalImage(true)
    setRenderImage(urlImage)
  }

  React.useEffect(() => {
    async function getDocumentsData() {
      const { response: res } = await getData(
        `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/${solicitudId}?seccion=DOC`,
      )

      if (res.status === 200) {
        const dt = await res.json()
        setDocument(dt)
        setIsLoading(false)

        if (!Object.keys(dt).length) {
          setImgDeudor([])
          setImgCodeudor([])
        } else {
          const { deudor, codeudor } = dt
          if (deudor.length > 0) {
            deudor
              .filter(({ referencia }) => referencia !== null && referencia !== undefined)
              .map(async ({ referencia, tipo }) => await getImg(referencia, tipo))
          }
          if (codeudor.length > 0) {
            codeudor
              .filter(({ referencia }) => referencia !== null && referencia !== undefined)
              .map(async ({ referencia, tipo }) => await getImg(referencia, tipo))
          }
          setImgDeudor(deudor)
          setImgCodeudor(codeudor)
        }
      }

      if (res.status === 404) {
        setDocument([])
        setIsLoading(false)
      }
    }
    getDocumentsData()
  }, [])

  function handleChange(e, posicionRol) {
    let indexObj

    if (posicionRol === 'deudor') {
      const { deudor } = document
      indexObj = deudor.findIndex(({ tipo }) => tipo === e.target.name)
    }

    if (posicionRol === 'codeudor') {
      const { codeudor } = document
      indexObj = codeudor.findIndex(({ tipo }) => tipo === e.target.name)
    }

    if (indexObj != -1) {
      setDocument(prev => {
        prev[posicionRol][indexObj] = {
          ...prev[posicionRol][indexObj],
          tipo: e.target.name,
          validado: e.target.checked,
          referencia: null,
        }
        return prev
      })
    } else {
      setDocument(prev => {
        return {
          ...prev,
          [posicionRol]: [
            ...prev[posicionRol],
            { tipo: e.target.name, validado: e.target.checked },
          ],
        }
      })
    }
  }

  async function sendDocuments(e) {
    e.preventDefault()
    if (isSendingData) return
    setIsSendingData(true)

    try {
      const token = window.localStorage.getItem('access_token')
      if (!token || token === '' || token === 'null') throw new Error('Token is missing')

      const res = await customFetch('credito/solicitud', {
        method: 'POST',
        body: JSON.stringify({
          seccion: 'DOC',
          solicitud_id: solicitudId,
          data: { ...document },
        }),
        type: RequestTypes.credit,
        headers: { 'Content-Type': 'application/json' },
      })

      if (res.status === 201) {
        setMessage('Documentos enviados correctamente')
      } else {
        setMessage('Error al enviar documentos, intentalo mas tarde')
      }
    } catch {
      setMessage('Error al enviar documentos')
    }

    setIsSendingData(false)
    setTimeout(() => {
      setMessage('')
    }, 3000)
  }

  const getDefaultChecked = (name, posicionRol) => {
    let objFound

    if (posicionRol === 'deudor') {
      const { deudor } = document
      objFound = deudor.find(({ tipo }) => tipo === name)
    }

    if (posicionRol === 'codeudor') {
      const { codeudor } = document
      objFound = codeudor.find(({ tipo }) => tipo === name)
    }

    if (objFound) {
      const { validado } = objFound
      return validado
    } else {
      return false
    }
  }

  async function getImg(referencia, tipo) {
    try {
      const responseFetch = await customFetch(`files/${referencia}`, {
        type: RequestTypes.files,
      })
      const blob = await responseFetch.blob()
      const imgURL = URL.createObjectURL(blob)
      const extention = responseFetch.url.split(".").pop()

      setDocumentURL(prev => {
        return [...prev, { imgURL, tipo, extention }]
      })
    } catch (err) { }
  }

  return (
    <div className="card-custom my-4">
      <h2 className="header-card-custom">Verificar documentos</h2>
      <div className='body-card-custom'>
        <div className="contenedor-img-documentos my-4">
          {documentURL.length > 0 ? (
            <div className="body-card-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4">
              {documentURL.map((item, index) => {
                return (
                  <div className="grid img-miniatura" key={index} onClick={() => handleOpenModal(item)}>

                    <img src={item.imgURL}
                      onError={(e) => {
                        e.target.onerror = null;
                        if (item.extention == 'pdf') {
                          e.target.src = "/pdf-file.svg";
                        } else if (item.extention == 'png' || item.extention == 'jpeg' || item.extention == 'jpg') {
                          e.target.src = "/png-file.svg";
                        } else if (item.extention == 'xls' || item.extention == 'xlsx') {
                          e.target.src = "/xls-file.svg";
                        } else {
                          e.target.src = "/doc-file.svg";
                        }
                      }}
                      alt="documentos" />

                    <p className="text-xs p-4">{item.tipo}</p>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className='mensaje-error' >No se encontraron imágenes</div>
          )}
        </div>
        {message ? (
        <div className={message.includes('Error') ? ERROR_CLASS : SUCCESS_CLASS} role="alert">
          {message}
        </div>
      ) : null}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <form onSubmit={sendDocuments} className="font-section">
            {data.map(({ deudor, codeudor }, index) => {
              if (deudor?.persona?.num_identificacion === Number(cedula)) {
                return (
                  <React.Fragment key={index}>
                    {documentosDeudor.map(({ name, value, id }) => {
                      return (
                        <React.Fragment key={id}>
                          <CheckBoxDocument
                            name={name}
                            value={value}
                            id={id}
                            getDefaultChecked={getDefaultChecked}
                            handleChange={handleChange}
                            posicionRol="deudor"
                          />
                        </React.Fragment>
                      )
                    })}
                    <CheckBoxDocument
                      name={'Firma'}
                      value={'FIRMA'}
                      id={'firma-deudior'}
                      getDefaultChecked={getDefaultChecked}
                      handleChange={handleChange}
                      posicionRol="deudor"
                    />
                  </React.Fragment>
                )
              }

              if (codeudor?.persona?.num_identificacion === Number(cedula)) {
                return (
                  <React.Fragment key={index}>
                    {documentosCodeudor.map(({ name, value, id }) => {
                      return (
                        <React.Fragment key={id}>
                          <CheckBoxDocument
                            name={name}
                            value={value}
                            id={id}
                            getDefaultChecked={getDefaultChecked}
                            handleChange={handleChange}
                            posicionRol="codeudor"
                          />
                        </React.Fragment>
                      )
                    })}
                    <CheckBoxDocument
                      name={'Firma'}
                      value={'FIRMA'}
                      id={'firma-codeudior'}
                      getDefaultChecked={getDefaultChecked}
                      handleChange={handleChange}
                      posicionRol="codeudor"
                    />
                  </React.Fragment>
                )
              }
            })}

            <div className="flex justify-end">
              <button className="btn-primario">
                {isSendingData ? 'Enviando...' : 'Guardar cambios'}
              </button>
            </div>
          </form>
        )}
      </div>

      {openModalImage ? (
        <Modal nodo="render-image-full" className="h-full w-full md:w-3/5">
          <div className='modal-card-custom' onClick={() => setOpenModalImage(false)}>
            <div className='modal-header-card-custom flex justify-between'><span>Filtros de busqueda</span> <span><img
              src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
              className="h-4 flex justify-end hover:cursor-pointer"
            /></span>
            </div>
            <div className='modal-body-card-custom'>
              <div

                className="w-full object-contain grid grid-cols-1 iframe-modal"
              >
                {<iframe src={renderImage.imgURL} className="object-contain h-full w-full"></iframe>}

              </div>
            </div>
            <div className='modal-footer-card-custom'>
              <div className='flex justify-end'>
                <button className="btn-texto-gris">
                  Cerrar
                </button>
              </div>
            </div>
          </div>






        </Modal>
      ) : null}

      <div id="render-image-full" className={openModalImage && classModal}></div>
    </div>
  )
}
