import * as React from 'react'
import { pmt } from '../utils/PMT'
import Banner from '../components/Banner'
import { separadorMillares } from '../utils/separadorMillares'
import CantidadYCuotasDePrestamos from '../components/SimularCredito.js/CantidadYCuotasDePrestamos'
import { createRows } from '../components/SimularCredito.js/Row'
import InputCredito from '../components/SimularCredito.js/InputCredito'
import BannerCredits from '../components/SimularCredito.js/bannerCredits'
import getTableValues from '../components/SimularCredito.js/getTableValues'
import Title from '../components/Title'
import { customFetch, RequestTypes, customFetchPublic } from '../utils/custom-fetch'

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const initialValuesSimulation = {
  monto: '',
  cuotas: '',
  linea_credito: '',
}

function SimularCredito(/*{ data, corriente }*/) {
  // const { valor_tasa } = corriente

  const [data, setData] = React.useState([])
  const [valor_tasa, setValorTasa] = React.useState()
  const [token_interno, setToken_interno] = React.useState(null)

  const [lineaCreditoSelected, setLineaCreditoSelected] = React.useState('')
  const [lineaCreditoInfo, setLineaCreditoInfo] = React.useState([])
  const [message, setMessage] = React.useState('')
  const [loadingTable, setLoadingTable] = React.useState(false)
  const [valoresSimulacion, setValoresSimulacion] = React.useState(initialValuesSimulation)
  const [simulationTable, setSimulationTable] = React.useState(null)
  const [valorCuota, setValorCuota] = React.useState('')
  const [selected, setSelected] = React.useState('')

  async function fetcher(url) {
    let response = await fetch(url)
    return await response.json()
  }
  async function getTokenInterno() {
    try {
      const URL_TOKEN = `${process.env.NEXT_PUBLIC_AUTHSERVICE_V1}auth/obtener-token-interno`
      //const URL_TOKEN = `http://localhost:3001/api/v1/auth/obtener-token-interno`
      const { access_token } = await fetcher(URL_TOKEN)
      localStorage.setItem('token_interno', access_token)
      return access_token
    } catch (err) { }
  }
  async function run() {
    try {
      const res_linea_creditos = await customFetchPublic('config/credito/portafolio', {
        type: RequestTypes.config,
      })
      const data_lineas_creditos = await res_linea_creditos.json()

      const response_mora = await customFetchPublic('config/credito/tasas', {
        type: RequestTypes.config,
      })
      const { corriente } = await response_mora.json()

      if (res_linea_creditos.ok && response_mora.ok) {

        const data_response = data_lineas_creditos || [];
        const { valor_tasa } = corriente || {};

        setData(data_response)
        setValorTasa(valor_tasa)

      }
    } catch (err) { }
  }
  React.useEffect(() => {

    getTokenInterno().then(() => run())

  }, [])


  React.useEffect(() => {
    setValoresSimulacion(initialValuesSimulation)
    setSelected('')
    const filterCredit = data?.filter(
      linea_credito => linea_credito.nombre === lineaCreditoSelected,
    )
    setLineaCreditoInfo({ ...filterCredit[0] })
  }, [data, lineaCreditoSelected])

  React.useEffect(() => {
    if ([valoresSimulacion.monto, valoresSimulacion.cuotas].includes('')) {
      setSimulationTable(null)
    }
  }, [valoresSimulacion])

  const refMonto = React.useRef('')

  const handleSimulator = event => {
    event.preventDefault()

    if (
      refMonto?.current?.value &&
      (refMonto?.current?.value > lineaCreditoInfo.monto_total || refMonto?.current?.value < 0)
    ) {
      setMessage(
        `Hubo un error, Valor del prestamos sobrepasa el valor máximo de prestamo ${separadorMillares(
          lineaCreditoInfo.monto_total,
        )}`,
      )
      setSimulationTable(null)
      setTimeout(() => {
        setMessage('')
      }, 5000)
      return
    }

    if (valoresSimulacion.monto === '' || valoresSimulacion.cuotas === '') {
      setMessage('Hubo un error, Ingrese los campos de cuota y monto para simular el prestamo')
      setTimeout(() => {
        setMessage('')
      }, 5000)
      return
    }

    setLoadingTable(true)
    if (valoresSimulacion.monto !== '' && valoresSimulacion.cuotas !== '') {
      const arrayWithValues = []
      let cuotaMensual = calculateCuota(valoresSimulacion, valor_tasa)
      cuotaMensual = separadorMillares(cuotaMensual)
      setValorCuota(cuotaMensual)
      const getDynamicTable = getTableValues(valoresSimulacion, arrayWithValues, valor_tasa)
      setSimulationTable(getDynamicTable)
    }
    setLoadingTable(false)
  }

  return (
    <>
      <Banner title="Simula tu crédito" image_url={`${process.env.NEXT_BASE_PATH}/simulador-banner.png`} />
      <section className="bg-color_gray_2 h-full py-24">
        <div className="main-wrapper">
          <div className="w-11/12 md:w-3/5 mx-auto">
            <Title>Elige una línea de crédito </Title>
            <Creditos
              lineaCreditos={data}
              lineaCreditoSelected={lineaCreditoSelected}
              setLineaCreditoSelected={setLineaCreditoSelected}
            />

            {lineaCreditoSelected !== '' ? (
              <div>
                <CantidadYCuotasDePrestamos lineaCreditoInfo={lineaCreditoInfo} />
                <InputCredito
                  lineaCreditoInfo={lineaCreditoInfo}
                  valoresSimulacion={valoresSimulacion}
                  setValoresSimulacion={setValoresSimulacion}
                  selected={selected}
                  refMonto={refMonto}
                />

                {message !== '' ? (
                  <div className={message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
                    {message}
                  </div>
                ) : null}
                <button
                  type="submit"
                  onClick={handleSimulator}
                  className="flex mx-auto py-2 mt-6 px-6 text-white text-sm font-semibold rounded-full bg-color_primary_2_ligth"
                >
                  SIMULAR MI CRÉDITO
                </button>
              </div>
            ) : null}

            {loadingTable ? (
              <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> 
            ) : simulationTable ? (
              <div>
                <div className="text-center mt-4">
                  <p className="text-lg font-semibold">
                    Cuotas de: <span className="text-color_primary_1">${valorCuota}</span>
                  </p>
                </div>
                <Table>{createRows(simulationTable)}</Table>
              </div>
            ) : null}

            <BannerCredits />

            <hr />
          </div>
        </div>
      </section>
    </>
  )
}

export default SimularCredito

function Table({ children }) {
  return (
    <React.Fragment>
      <h1 className="text-center my-8 text-xl font-semibold text-color_primary_2_ligth">
        Así sería el pago mensual de tu crédito
      </h1>
      <div className="table-responsive">
        <table className="mx-auto">
          <thead>
            <tr className="bg-color_primary_2_ligth">
              <th className="p-4 text-center text-white">periodo</th>
              <th className="p-4 text-center text-white">cuota</th>
              <th className="p-4 text-center text-white">interés</th>
              <th className="p-4 text-center text-white">capital</th>
              <th className="p-4 text-center text-white">saldo</th>
            </tr>
          </thead>

          {children}
        </table>
      </div>
    </React.Fragment>
  )
}

export async function getServerSideProps() {
  try {
    // const res_linea_creditos = await customFetch('config/credito/portafolio', {
    //   type: RequestTypes.config,
    // })
    // const data_lineas_creditos = await res_linea_creditos.json()
    // console.log(data_lineas_creditos);

    const res_linea_creditos = await customFetchPublic('config/credito/portafolio', {
      type: RequestTypes.config,
    })
    const data_lineas_creditos = await res_linea_creditos.json()

    const response_mora = await customFetchPublic('config/credito/tasas', {
      type: RequestTypes.config,
    })
    const { corriente, mora } = await response_mora.json()

    if (res_linea_creditos.ok && response_mora.ok) {
      return {
        props: {
          data: data_lineas_creditos || [],
          mora: mora || {},
          corriente: corriente || {},
        },
      }
    }

    return { props: { data: [], mora: {}, corriente: {} } }
  } catch (error) {
    console.error(error)
    return { props: { data: [], mora: {}, corriente: {} } }
  }
}

const classInput =
  'w-full h-12 px-4 py-2 my-1 text-base border border-color_gray_5 placeholder-color_gray_5 rounded-2xl mt-8'

function Creditos({ lineaCreditos, setLineaCreditoSelected }) {
  const handleSelected = e => setLineaCreditoSelected(e.target.value)

  return (
    <React.Fragment>
      <select
        id="linea_creditos"
        name="linea_credito"
        onChange={handleSelected}
        className={classInput}
      >
        <option value=""> ---- Elige una linea de credito ---- </option>
        {lineaCreditos.map(linea_credito => (
          <option key={linea_credito.portafolio_id} value={linea_credito.nombre}>
            {linea_credito.nombre}
          </option>
        ))}
      </select>
    </React.Fragment>
  )
}

function calculateCuota(valoresSimulacion, interesCorriente) {
  const cuota = Math.ceil(
    pmt(interesCorriente, Number(valoresSimulacion.cuotas), -Number(valoresSimulacion.monto)),
  )

  return cuota
}
