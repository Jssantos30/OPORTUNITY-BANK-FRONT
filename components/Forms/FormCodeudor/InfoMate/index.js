import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import * as Yup from 'yup'
import ErrorPage from '../../../../pages/_error'
import { fetchData } from '../../../../utils/fetchData'
import { getData } from '../../../../utils/getData'
import DateInput from '../../DateInput'
import SelectionInput from '../../SelectionInput'
import TelInput from '../../TelInput'
import TextInput from '../../TextInput'
import { DataInfoMate } from './DataInfoMate'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const InfoMate = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const initialValuesForm = {
    nombre: '',
    num_identificacion: '',
    sexo: '',
    telefono: '',
    lugar_trabajo: '',
    telefono_trabajo: '',
  }

  const [initialValues, setInitialValues] = React.useState(initialValuesForm)
  const [loading, setLoading] = React.useState(true)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [onErrPost, setOnErrPost] = React.useState(null)

  React.useEffect(async () => {
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
          setLoading(false)
          setOnErrGet(null)
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
    router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_1&rol=${rol}`)
  }

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
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          nombre: Yup.string(),
          // .required('requerido'),
          num_identificacion: Yup.string(),
          // .required('requerido'),
          sexo: Yup.string()
            // .required('requerido')
            // .typeError('Ingresa un sexo válido')
            .oneOf(['Masculino', 'Femenino', 'Intersexual', 'Indefinido']),

          telefono: Yup.string(),
            // .typeError('Debe ser un número'),
          // .required('requerido')
          // .positive(' Debe ser mayor a 0'),

          lugar_trabajo: Yup.string(),
          // .required('requerido'),
          telefono_trabajo:
          Yup.string(),
              // .typeError('Debe ser un número'),
          // .required('requerido')
          // .positive(' Debe ser mayor a 0'),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_codeudor: {
              ...prevState.formulario_codeudor,
              conyugue: { ...value },
            },
          }))

          const dataToSend = {
            seccion: 'FCO_2',
            solicitud_id: props.solicitud_id || solicitud,
            data: { ...value },
          }

          try {
            const { res, responseComplete, error } = await fetchData(
              `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`,
              dataToSend,
            )

            if (responseComplete) {
              props.dispatch({
                type: 'update',
                payload: true,
                fieldName: 'isCompletedInfoMate',
              })
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_3&rol=${rol}`,
              )
            } else {
              props.dispatch({
                type: 'update',
                payload: true,
                fieldName: 'isCompletedInfoMate',
              })
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_3&rol=${rol}`,
              )
            }
          } catch (err) {
            console.log(err)
          }
        }}
      >
        {() => (
          <Form>
            {DataInfoMate.map(field => {
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

export default InfoMate
