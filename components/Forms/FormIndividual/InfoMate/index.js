import * as React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { DataMateForm } from './DataMateForm'
import * as Yup from 'yup'

import TelInput from '../../TelInput'
import { fetchData } from '../../../../utils/fetchData'
import TextInput from '../../TextInput'
import SelectionInput from '../../SelectionInput'
import { useRouter } from 'next/router'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const InfoMate = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const [hide, setHide] = React.useState(false)

  const initialValuesForm = {
    nombre: '',
    num_identificacion: '',
    telefono: '',
  }

  const [initialValues, setInitialValues] = React.useState(initialValuesForm)
  const [loading, setLoading] = React.useState(true)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [onErrPost, setOnErrPost] = React.useState(null)

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
      `/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_3&rol=${rol}`,
    )
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
    <div className={`${hide && 'hidden'} mb-8`}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          nombre: Yup.string()
            .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.')
            .nullable(true),
          num_identificacion: Yup.number()
            .typeError('Debe ser un numero')
            .nullable(true)
            .test(
              'required_if_name',
              'Requerido si se especifica nombre de cónyugue.',
              function (num, context) {
                return (
                  context.parent.nombre === undefined ||
                  (context.parent.nombre !== undefined && num !== undefined)
                )
              },
            ),
          telefono: Yup.number().typeError('Debe ser un numero').positive().notRequired(),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_individual: {
              ...prevState.formulario_individual,
              conyugue: { ...value },
            },
          }))

          const { telefono, num_identificacion, ...dataConyugue } = value

          const dataToSend = {
            seccion: 'FDE_4',
            solicitud_id: props.solicitud_id || solicitud,
            data: {
              telefono: Number(telefono),
              num_identificacion: Number(num_identificacion),
              ...dataConyugue,
            },
          }

          try {
            const { responseComplete, error } = await fetchData(
              `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`,
              dataToSend,
            )

            if (error) {
              window.localStorage.clear()
              push('/login')
              return
            }

            if (responseComplete) {
              props.setIsCompletedInfoMate(true)
              props.setCurrent(props.current + 1)
              router.push(
                `/individual/${cedula}/${
                  props.solicitud_id || solicitud
                }?paso=FDE_5&rol=${rol}`,
              )
              //setHide(true)
            } else {
              props.setIsCompletedInfoMate(false)
              setOnErrPost(`Intenta más tarde`)
              setTimeout(() => {
                setOnErrPost(null)
              }, 5000)
            }
          } catch (err) {
            console.error(err)
          }
        }}
      >
        {() => (
          <Form>
            {DataMateForm.map(field => {
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

              if (field.type === 'tel') {
                return (
                  <TelInput
                    key={field.id}
                    label={field.fieldName}
                    name={field.name}
                    type={field.type}
                    className={field.className}
                  />
                )
              }

              return (
                <TextInput
                  key={field.id}
                  label={field.fieldName}
                  name={field.name}
                  type={field.type}
                  className={field.className}
                />
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
