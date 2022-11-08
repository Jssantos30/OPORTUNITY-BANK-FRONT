import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
  DataDestinationCreditForm,
  DataDescriptionInversion,
} from './DataDestinationCreditForm'
import * as Yup from 'yup'
import SelectionInput from '../../SelectionInput'
import RadioButtom from '../../RadioButtom'
import TextInput from '../../TextInput'
import { fetchData } from '../../../../utils/fetchData'
import { MyTextArea } from '../../TextArea'
import { useRouter } from 'next/router'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'
import { preventOnWheelChange } from '../../../../utils/helpers'
import { customFetch, RequestTypes, customFetchPublic } from '../../../../utils/custom-fetch'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const CreditDestinationForm = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const initialValuesForm = {
    tipo_solicitud: '',
    linea_credito: '',
    tipo_credito: '',
    monto_solicitado: '',
    plazo: '',
    activos: '',
    capital_trabajo: '',
    descripcion: '',
  }

  const [initialValues, setInitialValues] = React.useState(initialValuesForm)
  const [loading, setLoading] = React.useState(true)

  const [messageError, setMessageError] = React.useState(false)
  const [hide, setHide] = React.useState(false)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [onErrPost, setOnErrPost] = React.useState(null)
  const [dataV, setDataV] = React.useState([])
  const [valor_tasaV, setValorTasaV] = React.useState()

  const [datosForm, setDatosForm] = React.useState(DataDestinationCreditForm)

  React.useEffect(async () => {
    setLoading(true)
    try {
      const URL_GET_STEP_FORM = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/${solicitud}?seccion=${paso}`
      const { response, error } = await getData(URL_GET_STEP_FORM)

      if (!error) {
        const info = await response.json()

        if (response.status === 404) {
          setInitialValues(initialValues)
          setOnErrGet(null)
          setLoading(false)
        }

        if (response.status === 401) {
          setLoading(false)
          setOnErrGet('Hubo un error al consultar la información del crédito, por favor intenta nuevamente')
        }

        if (response.status === 200) {
          setInitialValues({ ...info })
          setOnErrGet(null)
          setLoading(false)
        }
      } else {
        window.localStorage.clear()
        push('/login')
      }
    } catch (err) {
      console.log(err)
    }
  }, [])

  const handleBack = () => {
    router.push(
      `/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_2&rol=${rol}`,
    )
  }
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

      const nuewForm = datosForm.map(dat => {
        if(dat.name === 'linea_credito'){
          dat.options = data_lineas_creditos.map( (lineas, index) => {
              return {
                id: `2.${index}`,
                name: lineas.nombre,
                fieldName: lineas.nombre
              }
          })
        }
        return dat;
      });
      setDatosForm(nuewForm);
      setDataV(data_lineas_creditos)
    } catch (err) { }
  }
  React.useEffect(() => {

    getTokenInterno().then(() => run())
  }, [])

  return loading ? (
    <div className='flex flex-nowrap flex-row items-center'>
      <div className='h-16 flex items-center'>Cargando ...</div>
      <div className="spinner_cont items-center">
        <span className="material spinner" />
      </div>
    </div>
  ) : onErrGet ? (
    <ErrorPage message={onErrGet} />
  ) : (
    <div className={`${hide && 'hidden'} mb-8`}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          tipo_solicitud: Yup.string()
            .required('requerido')
            .oneOf(['Creacion', 'Fortalecimiento']),
          linea_credito: Yup.string()
            .required('requerido')
            .oneOf(dataV.map(da => da.nombre)),
          tipo_credito: Yup.string().required('requerido').oneOf(['Nuevo', 'Renovación']),
          monto_solicitado: Yup.number()
            .typeError('Debe ser un número')
            .required('requerido')
            .positive(' Debe ser mayor a 0')
            .test('monto_solicitado', '', function (monto_solicitado, context) {

              const validarMonto = dataV.filter((item) => item.nombre === context.parent.linea_credito)
              const priceSplitter = (number) => (number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
              if (
                monto_solicitado >= validarMonto[0]?.monto_minimo &&
                monto_solicitado <= validarMonto[0]?.monto_total
              ) {
                return true
              } else {
                return this.createError({
                  message: `Para este crédito se permite mínimo ${priceSplitter(validarMonto[0]?.monto_minimo)}  - hasta ${priceSplitter(validarMonto[0]?.monto_total)}`,
                })
              }
            })
            .test(
              'monto_sum',
              'El monto solicitado debe ser igual a la suma de los activos y el capital de trabajo',
              function (monto_solicitado, context) {
                return (
                  monto_solicitado == context.parent.activos + context.parent.capital_trabajo
                )
              },
            ),
          plazo: Yup.number()
            .typeError('Debe ser un número')
            .required('requerido')
            .positive(' Debe ser mayor a 0')
            .test('plazo', '', function (plazo, context) {
              const MIN_PLAZO = 1
              const validarCantidadPlazo = dataV.filter((item) => item.nombre === context.parent.linea_credito)
              if (
                plazo >= MIN_PLAZO &&
                plazo <= validarCantidadPlazo[0]?.num_cuotas
              ) {
                return true
              } else {
                return this.createError({ message: `Maximo ${validarCantidadPlazo[0]?.num_cuotas} Cuotas` })
              }
              //  const validarCantidadPlazo = plazoCredito(context.parent.linea_credito)
              //  if (plazo >= MIN_PLAZO && plazo <= validarCantidadPlazo?.max_prestamo) {
              //    return true
              //  } else {
              //    return this.createError({ message: `${validarCantidadPlazo?.label}` })
              //  }
            }),
          activos: Yup.number()
            .typeError('Debe ser un número')
            .required('requerido')
            .min(0, 'Debe ser mayor o igual a 0'),
          capital_trabajo: Yup.number()
            .typeError('Debe ser un número')
            .required('requerido')
            .min(0, 'Debe ser mayor o igual a 0'),
          descripcion: Yup.string()
            .required('requerido')
            .max(100, 'No puede exceder a 100 caractéres'),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_individual: {
              ...prevState.formulario_individual,
              destino_credito: { ...value },
            },
          }))

          const dataToSend = {
            seccion: 'FDE_3',
            solicitud_id: props.solicitud_id || solicitud,
            data: { ...value },
          }

          try {
            const { res, responseComplete, error } = await fetchData(
              `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`,
              dataToSend,
            )

            if (error) {
              window.localStorage.clear()
              push('/login')
              return
            }

            if (responseComplete) {
              props.setIsCompletedCreditDestination(true)
              props.setCurrent(props.current + 1)
              router.push(
                `/individual/${cedula}/${props.solicitud_id || solicitud
                }?paso=FDE_4&rol=${rol}`,
              )

            } else {
              props.setIsCompletedCreditDestination(false)
              setOnErrPost(`Intenta más tarde`)
              setTimeout(() => {
                setOnErrPost(null)
              }, 5000)
            }
          } catch (err) {
            console.log(err)
          }
        }}
      >
        {({ values }) => (
          <Form>
            {datosForm.map(field => {
              if (field.type === 'select') {
                return (
                  <SelectionInput
                    key={field.id}
                    id={field.id}
                    label={field.fieldName}
                    name={field.name}
                    className={field.className}
                    options={field.options}
                    render={option => (
                      <option key={option.id} value={option.name}>
                        {option.fieldName}
                      </option>
                    )}
                  />
                )
              }
            })}
            <div className="mb-6">
              <label className="mb-2">
                {' '}
                Monto solicitado
                <TextInput
                  type="number"
                  onWheel={preventOnWheelChange}
                  name="monto_solicitado"
                  className="w-full h-10 border border-gray-400"
                  min="0"
                />
              </label>
            </div>

            <label>
              {' '}
              Plazo (meses)
              <TextInput
                type="number"
                name="plazo"
                onWheel={preventOnWheelChange}
                className="w-full block h-10 border border-gray-400 px-4"

              />
            </label>

            {DataDescriptionInversion.map(field => {
              if (field.type === 'text-area') {
                return (
                  <MyTextArea
                    key={field.id}
                    label={field.fieldName}
                    name={field.name}
                    className={field.className}
                    type={field.type}
                  />
                )
              }

              return (
                <TextInput
                  key={field.id}
                  label={field.fieldName}
                  name={field.name}
                  className={field.className}
                  type={field.type}
                />
              )
            })}

            <div className="mb-6">
              <label className="mb-2">
                {' '}
                Activos - ¿Cuánto vas a invertir en equipos y máquinas?{' '}
                <TextInput
                  type="number"
                  onWheel={preventOnWheelChange}
                  name="activos"
                  className="w-full block h-10 border border-gray-400 px-4"

                />
              </label>
            </div>
            <React.Fragment>
              <div className="">
                <label className="mb-2">
                  Capital de trabajo - ¿Cuánto vas a invertir en insumos o materia prima?
                  <TextInput
                    type="number"
                    onWheel={preventOnWheelChange}
                    name="capital_trabajo"
                    className="w-full block h-10 border border-gray-400 px-4"

                  />
                </label>
              </div>
            </React.Fragment>
            {onErrPost ? <div className={ERROR_CLASS}>{onErrPost}</div> : null}
            <div className="flex justify-around">
              <button
                type="button"
                onClick={() => { handleBack(values); run() }}
                className="mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500"
              >
                Anterior
              </button>

              <button
                type="submit"
                className="mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth"
              >
                Siguiente
              </button>
            </div>

            {messageError ? <p>{`Algo salió mal :(`}</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreditDestinationForm

function plazoCredito(creditName) {
  switch (creditName) {
    case 'Microempresarial':
      return {
        max_prestamo: 36,
        label: 'hasta 36 cuotas',
      }

    case 'Capital Semilla':
      return {
        max_prestamo: 36,
        label: 'hasta 36 cuotas',
      }

    case 'Agroindustrial':
      return {
        max_prestamo: 48,
        label: 'hasta 48 cuotas',
      }

    case 'Venteros Informales':
      return {
        max_prestamo: 36,
        label: 'hasta  36cuotas',
      }

    case 'Egresados':
      return {
        max_prestamo: 48,
        label: 'hasta 48 cuotas',
      }
    case 'Base Tecnológica':
      return {
        max_prestamo: 48,
        label: 'hasta 48 cuotas',
      }
  }
}
