import { Formik, Form } from 'formik'

import * as Yup from 'yup'
import * as React from 'react'
import { DataBasicInformation, datacodeudor } from './DataBasicInformation'
import TextInput from '../../TextInput'
import DateInput from '../../DateInput'
import SelectionInput from '../../SelectionInput'
import { fetchData } from '../../../../utils/fetchData'
import { useRouter } from 'next/router'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const BasicInformationForm = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const {
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    num_identificacion,
  } = props.userInfo
  const [disableInput, setDisableInput] = React.useState(false)

  const initialValuesForm = {
    tipo_identificacion: '',
    num_identificacion: num_identificacion || '',
    primer_nombre: primer_nombre || '',
    segundo_nombre: segundo_nombre || '',
    primer_apellido: primer_apellido || '',
    segundo_apellido: segundo_apellido || '',
    fecha_nacimiento: '',
    seguridad_social: '',
    num_identificacion_deudor: '',
  }

  // React.useEffect(() => {
  //   if (!num_identificacion) {
  //     setDisableInput(false)
  //   } else {
  //     setDisableInput(true)
  //   }
  // }, [])

  const [initialValues, setInitialValues] = React.useState(initialValuesForm)
  const [loading, setLoading] = React.useState(false)
  const [messageError, setMessageError] = React.useState('')
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [onErrPost, setOnErrPost] = React.useState(null)

  React.useEffect(async () => {
    setLoading(true)
    if (!solicitud) {
      setLoading(false)
      return
    }

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
      setMessageError('Hubo un error al consultar la información del crédito, por favor intenta nuevamente')
      setTimeout(() => setMessageError(''), 3000)
    }
  }, [])

  return loading ? (
    <div>Loading ....</div>
  ) : onErrGet ? (
    <ErrorPage message={onErrGet} />
  ) : (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          tipo_identificacion: Yup.string().required('requerido').oneOf(['C.C', 'C.E']),
          num_identificacion: Yup.number()
            .typeError('Debe ser un número')
            .required('requerido')
            .positive(' Debe ser mayor a 0'),

          primer_nombre: Yup.string()
            .required('requerido')
            .matches('^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$', 'No se permiten números ni caracteres especiales.'),
          segundo_nombre: Yup.string().matches('^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$',
            'No se permiten números ni caracteres especiales.',
          ),
          primer_apellido: Yup.string()
            .required('requerido')
            .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
          segundo_apellido: Yup.string()
            .notRequired()
            .nullable(true)
            .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
          fecha_nacimiento: Yup.date()
            .required('requerido')
            .test('fecha_nacimiento', '', function (fecha_nacimiento) {
              if (!fecha_nacimiento) return true

              function getAge(birthday) {
                const ageDifMs = Date.now() - birthday.getTime()
                const ageDate = new Date(ageDifMs) // miliseconds from epoch
                return Math.abs(ageDate.getUTCFullYear() - 1970)
              }
              const MAX_AGE = 75

              if (getAge(fecha_nacimiento) > MAX_AGE) {
                return this.createError({
                  message: `La máxima edad para el codeudor es de ${MAX_AGE} años`,
                })
              }

              return true
            }),
          seguridad_social: Yup.string().required('requerido').oneOf(['EPS', 'Sisbén', 'N/a']),
          num_identificacion_deudor: Yup.number()
            .required('requerido')
            .typeError('Deber ser un numero')
            .positive(),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_codeudor: {
              ...prevState.formulario_codeudor,
              informacion_basica: { ...value },
            },
          }))

          const { num_identificacion, num_identificacion_deudor, ...dataValues } = value

          const dataToSend = {
            seccion: 'FCO_1',
            data: {
              ...dataValues,
              num_identificacion: Number(num_identificacion),
              num_identificacion_deudor: Number(num_identificacion_deudor),
            },
          }

          try {
            const { res, responseComplete, error } = await fetchData(
              `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`,
              dataToSend,
            )

            if (res.statusCode === 404) {
              setMessageError(res.message)
              setTimeout(() => {
                setMessageError('')
              }, 3000)
            }

            if (responseComplete) {
              props.dispatch({
                type: 'update',
                payload: true,
                fieldName: 'isCompletedBasicInformation',
              })
              props.setSolicitud_id(res.solicitud_credito)
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${value.num_identificacion || cedula}/${
                  res.solicitud_credito || solicitud
                }?paso=FCO_2&rol=${rol}`,
              )
            } else {
              props.dispatch({
                type: 'update',
                payload: false,
                fieldName: 'isCompletedBasicInformation',
              })
              setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`)
              setTimeout(() => {
                setOnErrPost(null)
              }, 5000)
            }
          } catch (err) {
            console.log(err)
          }
        }}
      >
        {({ values }) => {
          return (
            <Form>
              {DataBasicInformation.map(field => {
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

                if (field.type === 'date') {
                  return (
                    <div key={field.id}>
                      <DateInput
                        key={field.id}
                        label={field.fieldName}
                        name={field.name}
                        type={field.type}
                        className={field.className}
                      />
                    </div>
                  )
                }

                if (field.name === 'num_identificacion') {
                  return (
                    <TextInput
                      key={field.id}
                      label={field.fieldName}
                      name={field.name}
                      type={field.type}
                      className={field.className}
                      disabled={disableInput}
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

              {messageError !== '' && <div className={ERROR_CLASS}>{messageError}</div>}
              {onErrPost ? <div className={ERROR_CLASS}>{onErrPost}</div> : null}
              <div className="flex justify-center md:justify-end">
                <button
                  type="submit"
                  className="mt-6 p-4 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth"
                >
                  Siguiente
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default BasicInformationForm
