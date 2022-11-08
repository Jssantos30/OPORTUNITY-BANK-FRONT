import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../../TextInput'
import { DataBienesRaices } from './DataBienesRaices'
import { fetchData } from '../../../../utils/fetchData'
import { useRouter } from 'next/router'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'
const INFO_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const BienesRaices = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const initialValuesForm = {
    activos_propios: null,
    avaluo_catastral: null,
    matricula: null,
    num_escritura: null,
  }

  const [initialValues, setInitialValues] = React.useState(initialValuesForm)
  const [housingType, setHousingType] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [onErrPost, setOnErrPost] = React.useState(null)

  React.useEffect(() => {
    async function run() {
      {
        try {
          const URL_GET_STEP_FORM = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/${solicitud}?seccion=${paso}`
          const URL_GET_INFO = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/${solicitud}?seccion=FCO_4`
          const { response, error } = await getData(URL_GET_STEP_FORM)
          const { response: _response } = await getData(URL_GET_INFO)

          if (_response) {
            const info = await _response.json()
            if (_response.status === 200) {
              setHousingType(info.vivienda)
            }
          }

          if (!error) {
            const info = await response.json()

            if (response.status === 404) {
              setInitialValues(initialValues)
              setOnErrGet(null)
              setLoading(false)
            }

            if (response.status === 401) {
              setLoading(false)
              setOnErrGet(null)
              setOnErrGet('Hubo un error al consultar la información del crédito, por favor intenta nuevamente')
            }

            if (response.status === 200) {
              setInitialValues({ ...info })
              setLoading(false)
            }
          } else {
            window.localStorage.clear()
            push('/login')
          }
        } catch (err) {}
      }
    }
    run()
  }, [])

  const handleBack = () => {
    router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_5&rol=${rol}`)
  }

  function getIsRequiredField(field) {
    if (housingType === 'Familiar' || housingType === 'Arrendada') {
      return true
    }

    if (field === undefined || field === null || field === '') {
      return this.createError({ message: 'Este campo es requerido' })
    }

    return true
  }

  return loading ? (
    <div>Loading ....</div>
  ) : onErrGet ? (
    <ErrorPage message={onErrGet} />
  ) : (
    <div>
      <h2 className="text-xl font-semibold mb-4">Info Bienes raices</h2>

      <Formik
        initialValues={initialValues}
        // validationSchema={Yup.object({
        //   activos_propios: Yup.number()
        //     .typeError('Debe ser el número de Activos propios')
        //     .test('activos_propios', '', getIsRequiredField)
        //     .positive(),
        //   num_escritura: Yup.number()
        //     .typeError('Debe ser el número de la escritural del bien raíz')
        //     .test('num_escritura', '', getIsRequiredField)
        //     .positive(),
        //   matricula: Yup.number()
        //     .typeError('Debe ser un numero, correspondiente a la matrícula del bien raíz')
        //     .test('matricula', '', getIsRequiredField)
        //     .positive(),
        //   avaluo_catastral: Yup.number()
        //     .typeError('Debe ser un numero, correpsondiente al valor del avaluo catastral')
        //     .test('avaluo_catastral', '', getIsRequiredField),
        // })}
        onSubmit={async value => {
          // console.log(value)
          props.setForm(prevState => ({
            ...prevState,
            formulario_codeudor: {
              ...prevState.formulario_codeudor,
              bienes_raices: { ...value },
            },
          }))

          const dataToSend = {
            seccion: 'FCO_6',
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
              props.dispatch({
                type: 'update',
                payload: true,
                fieldName: 'isCompletedBienesRaices',
              })
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_7&rol=${rol}`,
              )
            } else {
              props.dispatch({
                type: 'update',
                payload: true,
                fieldName: 'isCompletedBienesRaices',
              })
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_7&rol=${rol}`,
              )
            }
          } catch (err) {
            // console.log(err)
          }
        }}
      >
        {() => (
          <Form>
            {DataBienesRaices.map(field => {
              return (
                <React.Fragment>
                  <TextInput
                    key={field.id}
                    label={field.fieldName}
                    name={field.name}
                    type={field.type}
                    className={field.className}
                  />
                </React.Fragment>
              )
            })}

            {onErrPost ? <div className={ERROR_CLASS}>{onErrPost}</div> : null}
            <div className="flex justify-around">
              <button
                type="button"
                onClick={handleBack}
                className="mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-red-500"
              >
                Anterior
              </button>

              <button
                type="submit"
                className="mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth"
              >
                {' '}
                Siguiente{' '}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default BienesRaices
