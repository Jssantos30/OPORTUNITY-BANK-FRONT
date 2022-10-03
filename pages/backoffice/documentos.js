import React from 'react'
import { useAuthContext } from '../../auth-context'
import { Cartera } from '../../components/DocumentUpload/Cartera'
import { Cofinet } from '../../components/DocumentUpload/Cofinet'
import { Recaudo } from '../../components/DocumentUpload/Recaudo'
import { Extractos } from '../../components/DocumentUpload/Extractos'
import Upload209Consolidado from '../../components/DocumentUpload/Upload209Consolidado'
import UploadCartera from '../../components/DocumentUpload/UploadCartera'
import UploadCofinet from '../../components/DocumentUpload/UploadCofinet'
import UploadConsolidados from '../../components/DocumentUpload/UploadConsolidado'
import UploadExtract from '../../components/DocumentUpload/UploadExtract'
import UploadPlanPago from '../../components/DocumentUpload/UploadPlanPago'
import UploadRecaudoCofinep from '../../components/DocumentUpload/UploadRecaudoCofinep'
import UploadSolicitudCreditoConsolidado from '../../components/DocumentUpload/UploadSolicitudCreditoConsolidado'
import Title from '../../components/Title'
import TitleBackoffice from '../../components/TitleBackoffice'
import LayoutRol from '../../Layout/LayoutRol'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'
import { protectRouteAndRedirect } from '../../utils/protect-route.server'

const classSection = `flex flex-col border my-2 rounded-lg bg-white w-full card-custom`
const ERROR_CLASS =
  'mensaje-error grid'

const Documentos = ({ extractData, cofinetData, recaudoData, carteraCastigadaData }) => {
  const [error, setError] = React.useState('')
  const [errorSolCreditoConsolidada, setErrorSolCreditoConsolidada] = React.useState('')
  const { rol } = useAuthContext()

  async function assignURL(data, fileName) {
    const doc = await data.blob()

    const create_url = window.URL.createObjectURL(doc)

    const a = document.createElement('a')
    a.href = create_url
    a.download = fileName
    a.click()
    window.URL.revokeObjectURL(create_url)
  }

  const handleDownloadConsolidado = async e => {
    e.preventDefault()
    try {
      const consolidado = '209_consolidado.xlsm'
      const fetchData = await customFetch(`files/${consolidado}`, { type: RequestTypes.files })

      if (fetchData.status === 200) {
        await assignURL(fetchData, consolidado, 'consolidado')
        setError('')
      } else {
        setError('Hubo un error, intenta más tarde')
        setTimeout(() => {
          setError('')
        }, 5000)
      }
    } catch (error) {
      setError('Hubo un error, intenta más tarde')
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  const handleDownloadPlanPago = async e => {
    e.preventDefault()

    const planPago = 'PLAN DE PAGOS.xlsx'
    try {
      const data = await customFetch(`files/${planPago}`, { type: RequestTypes.files })

      if (data.status === 200) {
        await assignURL(data, planPago, 'planPago')
        setError('')
      } else {
        setError('Hubo un error, intenta más tarde')
        setTimeout(() => {
          setError('')
        }, 5000)
      }
    } catch (error) {
      setError('Hubo un error, intenta más tarde')
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  const handleDownloadSolicitudesDeCreditoConsolidado = async e => {
    e.preventDefault()

    const SolicitudesDeCreditoConsolidado = 'SOLICITUDES DE CREDITO CONSOLIDADO Coofinep.xlsx'
    try {
      const data = await customFetch(`files/${SolicitudesDeCreditoConsolidado}`, {
        type: RequestTypes.files,
      })

      if (data.status === 200) {
        await assignURL(data, SolicitudesDeCreditoConsolidado, 'solCreditos')
        setErrorSolCreditoConsolidada('')
      } else {
        setErrorSolCreditoConsolidada('Hubo un error, intenta más tarde')
        setTimeout(() => {
          setErrorSolCreditoConsolidada('')
        }, 5000)
      }
    } catch (error) {
      setErrorSolCreditoConsolidada('Hubo un error, intenta más tarde')
      setTimeout(() => {
        setErrorSolCreditoConsolidada('')
      }, 5000)
    }
  }

  const RenderDoc = () => (
    <div className="">
      <TitleBackoffice>Documentos</TitleBackoffice>
      <div className="flex flex-col items-center">
        <section className={`${classSection}`}>
          
            <div className="header-card-custom">
            Extractos
            </div>
            <div className='body-card-custom'>
              <Extractos extractData={extractData} />
              <UploadExtract />
            </div>
          
        </section>
        <hr />
        <section className={`${classSection}`}>
          <div className="header-card-custom">
            Coofinep
            </div>
            <div className='body-card-custom'>
            <Cofinet cofinetData={cofinetData} />
            <UploadCofinet />
            </div>
          
        </section>
        <hr />
        <section className={`${classSection}`}>
          
        <div className="header-card-custom">
        Recaudo Coofinep
            </div>
            <div className='body-card-custom'>
            <UploadRecaudoCofinep />
            </div>

         
          
        </section>
        <hr />
        <section className={`${classSection}`}>

        <div className="header-card-custom">
        209 Consolidado
            </div>
            <div className='body-card-custom'>
            <Upload209Consolidado />
            </div>
            <div className='footer-card-custom flex justify-start'>
            <button
              id="consolidado"
              type="button"
              onClick={e => handleDownloadConsolidado(e)}
              className="btn-primario"
            >
              Descargar consolidado
            </button>
            {error !== '' ? (
              <div className={error.includes('error') ? ERROR_CLASS : null}>{error}</div>
            ) : null}
            </div>
            
         
        </section>
        <hr />

        <section className={`${classSection}`}>
        <div className="header-card-custom">
        Cartera
            </div>
            <div className='body-card-custom'>
            <Cartera carteraCastigadaData={carteraCastigadaData} />
          <UploadCartera />
            </div>
    
          
        </section>
        <hr />
        <section className={`${classSection}`}>
        <div className="header-card-custom">
        Solicitudes crédito consolidado
            </div>
            <div className='body-card-custom'>
            <Cartera carteraCastigadaData={carteraCastigadaData} />
            <UploadSolicitudCreditoConsolidado />

            
            </div>
            <div className='footer-card-custom flex justify-start'>
            
            <div>
              <button
                id="solCreditos"
                type="button"
                onClick={e => handleDownloadSolicitudesDeCreditoConsolidado(e)}
                className="btn-primario"
              >
                Descargar Solicitudes credito consolidado
              </button>
              
          </div>
          {errorSolCreditoConsolidada !== '' ? (
                <div
                  className={errorSolCreditoConsolidada.includes('error') ? ERROR_CLASS : null}
                >
                  {errorSolCreditoConsolidada}
                </div>
              ) : null}
            </div>

          
        </section>
        <hr />

        <section className={`${classSection}`}>
        <div className="header-card-custom">
        Plan de pago
            </div>
            <div className='body-card-custom'>
            <UploadPlanPago />
            </div>
            <div className='footer-card-custom flex justify-start'>
            <button
              id="planPago"
              type="button"
              onClick={e => handleDownloadPlanPago(e)}
              className="btn-primario"
            >
              Descargar Plan de pago
            </button>
            {error !== '' ? (
              <div className={error.includes('error') ? ERROR_CLASS : null}>{error}</div>
            ) : null}
            </div>
        </section>
      </div>
    </div>
  )

  function renderLayout(rol) {
    return <LayoutRol rolUser={rol}>{<RenderDoc />}</LayoutRol>
  }

  return renderLayout(rol)
}

export default Documentos

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo

  const [fetchExtract, fetchCofinet, fetchCarteraCastigada] = await Promise.all([
    await customFetch('files/list/extracto', {
      type: RequestTypes.files,
      headers: { Authorization: `Bearer ${sessionInfo.token}` },
    }),
    await customFetch('files/list/coofinep', {
      type: RequestTypes.files,
      headers: { Authorization: `Bearer ${sessionInfo.token}` },
    }),
    await customFetch('files/list/cartera-castigada', {
      type: RequestTypes.files,
      method: 'GET',
      headers: { Authorization: `Bearer ${sessionInfo.token}` },
    }),
  ])
  let extractData = await fetchExtract.json()
  let carteraCastigadaData = await fetchCarteraCastigada.json()
  let cofinetData = await fetchCofinet.json()
  let recaudoData = cofinetData.filter(line=>line.name.includes('recaudo'))
  cofinetData = cofinetData.filter(line=>!line.name.includes('recaudo'))

  if (!extractData) {
    extractData = []
  }
  if (!cofinetData) {
    cofinetData = []
  }
  if (!recaudoData) {
    recaudoData = []
  }
  if (!carteraCastigadaData) {
    carteraCastigadaData = []
  }

  return {
    props: {
      extractData,
      cofinetData,
      recaudoData,
      carteraCastigadaData,
    },
  }
}
