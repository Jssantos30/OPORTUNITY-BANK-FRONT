import * as React from 'react'
import { ProtectedRouteSuperAdmin } from '../../components/protected-route-superadmin'
import BoxIntereses from '../../components/SuperAdmin/BoxIntereses'
import EditCredit from '../../components/SuperAdmin/EditCredit'
import Title from '../../components/Title'
import TitleBackoffice from '../../components/TitleBackoffice'
import LayoutSuperAdmin from '../../Layout/LayoutSuperadmin'
import { RequestTypes, customFetchPublic } from '../../utils/custom-fetch'
import ErrorPage from '../_error'
import ConfigurarInteres from './configuracion-tasa-interes'

function ConfiguracionInteres() {
  const [lineaCreditoSelected, setLineaCreditoSelected] = React.useState('')
  const [loadingBox, setLoadingBox] = React.useState(false)
  const [lineaCreditoInfo, setLineaCreditoInfo] = React.useState({})
  const [salarioMinimo, setSalarioMinimo] = React.useState('')
  const [dataLineaCredito, setDataLineaCredito] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [onErrGet, setOnErrGet] = React.useState(null)

  React.useEffect(() => {
    setLoadingBox(true)
    const filterCredit = dataLineaCredito.filter(
      linea_credito => linea_credito.nombre === lineaCreditoSelected,
    )
    setLineaCreditoInfo({ ...filterCredit[0] })
    setLoadingBox(false)
  }, [lineaCreditoSelected])

  async function fetcher(url) {
    let response = await fetch(url)
    return await response.json()
  }
  async function getTokenInterno() {
    try {
      const URL_TOKEN = `${process.env.NEXT_PUBLIC_AUTHSERVICE_V1}auth/obtener-token-interno`
      const { access_token } = await fetcher(URL_TOKEN)
      localStorage.setItem('token_interno', access_token)
      return access_token
    } catch (err) { }
  }


  React.useEffect(() => {
    async function run() {
      const response = await customFetchPublic('config/credito/portafolio', {
        type: RequestTypes.config,
      })
      if (response.status > 400) {
        setOnErrGet(`Error - ${response.statusText}`)
        setLoading(false)
      } else {
        const dataLineaCred = await response.json()
        setDataLineaCredito(dataLineaCred)
        setOnErrGet(null)
        setLoading(false)
      }
    }
    getTokenInterno().then(()=> run())
  }, [])

  return (
    <LayoutSuperAdmin>
      <ProtectedRouteSuperAdmin>
        {loading ? (
          <div className='flex flex-nowrap flex-row items-center'>
            <div className='h-16 flex items-center'>Cargando ...</div>
            <div className="spinner_cont items-center">
              <span className="material spinner" />
            </div>
          </div>
        ) : onErrGet ? (
          <ErrorPage message={onErrGet} />
        ) : dataLineaCredito.length > 0 ? (
          <div className="relative flex flex-col justify-center ">
            <TitleBackoffice> Configuración créditos</TitleBackoffice>

            <div className="flex flex-col card-custom w-full">
              <div className='header-card-custom'>
                Configurar interés
              </div>

              <BoxIntereses setSalarioMinimo={setSalarioMinimo} />
            </div>



            <div className="flex flex-col card-custom w-full mt-4">
              <div className="header-card-custom">
                Editar créditos
              </div>
              <div className='body-card-custom flex'>
              <LineaDeCreditos
                lineaDeCreditos={dataLineaCredito}
                lineaCreditoSelected={lineaCreditoSelected}
                setLineaCreditoSelected={setLineaCreditoSelected}
              />
              </div>
              {lineaCreditoSelected !== '' ? (
                loadingBox ? (
                  <div><div className='flex flex-nowrap flex-row items-center'>
                    <div className='h-16 flex items-center'>Cargando ...</div>
                    <div className="spinner_cont items-center">
                      <span className="material spinner" />
                    </div>
                  </div> </div>
                ) : (
                  <div>
                    <EditCredit
                      lineaCreditoSelected={lineaCreditoSelected}
                      lineaDeCredito={lineaCreditoInfo}
                      setLineaCreditoSelected={setLineaCreditoSelected}
                    />
                  </div>
                )
              ) : null}
            </div>
            <div className="flex flex-col card-custom w-full mt-4">
              <div className="header-card-custom">
                Agregar línea de créditos
              </div>
              <ConfigurarInteres salarioMinimo={salarioMinimo} />
            </div>
          </div>
        ) : (
          <div>mmmm</div>
        )}
      </ProtectedRouteSuperAdmin>
    </LayoutSuperAdmin>
  )
}

export default ConfiguracionInteres

function LineaDeCreditos({ lineaDeCreditos, lineaCreditoSelected, setLineaCreditoSelected }) {
  const classInput =
    'mx-auto h-12 px-4 py-2 text-base border border-color_gray_5 placeholder-color_gray_5 rounded-2xl my-4 w-full md:w-1/2'
  const handleSelected = e => setLineaCreditoSelected(e.target.value)
  return (
    <React.Fragment>
      <select
        id="linea_creditos"
        name="linea_credito"
        onChange={handleSelected}
        value={lineaCreditoSelected}
        className={classInput}
      >
        <option value=""> ---- Elige una linea de credito para configurar ---- </option>
        {lineaDeCreditos.map(linea_credito => (
          <option key={linea_credito.portafolio_id} value={linea_credito.nombre}>
            {linea_credito.nombre}
          </option>
        ))}
      </select>
    </React.Fragment>
  )
}
