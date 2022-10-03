import * as React from 'react'
import { Formik, Form } from 'formik'
import { DataReferencesTradeAndFamiliar } from './DataReferencesTradeAndFamiliar'
import * as Yup from 'yup'

import TextInput from '../../TextInput'
import { fetchData } from '../../../../utils/fetchData'
import { useRouter } from 'next/router'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const ReferencesForm = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const [hide, setHide] = React.useState(false)
  const reducerRef = (curr, updates) => ({ ...curr, ...updates })
  const [{ ref_personal_1, ref_personal_2, ref_comercial }, dispatch] = React.useReducer(
    reducerRef,
    {
      ref_personal_1: undefined,
      ref_personal_2: undefined,
      ref_comercial: undefined,
    },
  )

  const initialValuesForm = {
    nombre_referencia_familiar: '',
    parentesco: '',
    numero_telefonico: '',

    nombre_referencia_familiar_alt: '',
    parentesco_alt: '',
    numero_telefonico_alt: '',
  }

  const [editForm, setEditForm] = React.useState(false)
  const [loading, setLoading] = React.useState(true)
  const [message, setMessage] = React.useState(null)
  const [valuesForm, setValuesForm] = React.useState(initialValuesForm)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [onErrPost, setOnErrPost] = React.useState(null)

  React.useEffect(async () => {
    setEditForm(false)
    try {
      const URL_GET_STEP_FORM = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1
        }credito/solicitud/${props.solicitud_id || solicitud}?seccion=${paso}`
      const { response, error } = await getData(URL_GET_STEP_FORM)

      if (!error) {
        const info = await response.json()

        if (response.status === 404) {
          setOnErrGet(null)
          setLoading(false)
          setEditForm(true)
          setValuesForm(initialValuesForm)
        }

        if (response.status === 401) {
          setLoading(false)
          setOnErrGet('Hubo un error al consultar la información del crédito, por favor intenta nuevamente')
          setEditForm(true)
        }

        if (response.status === 200) {
          const [ref_personal_1, ref_personal_2] = info
          dispatch({ ref_personal_1, ref_personal_2 })
          setOnErrGet(null)
          setLoading(false)
          const obj = {
            nombre_referencia_familiar: ref_personal_1.nombre,
            parentesco: ref_personal_1.parentesco,
            numero_telefonico: ref_personal_1.telefono,

            nombre_referencia_familiar_alt: ref_personal_2.nombre,
            parentesco_alt: ref_personal_2.parentesco,
            numero_telefonico_alt: ref_personal_2.telefono,
          }

          setValuesForm(obj)
          setEditForm(true)
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
      `/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_7&rol=${rol}`,
    )
  }

  return editForm ? (
    onErrGet ? (
      <ErrorPage message={onErrGet} />
    ) : (
      <div className={`${hide && 'hidden'} mb-8`}>
        <Formik
          initialValues={valuesForm}
          validationSchema={Yup.object({
            nombre_referencia_familiar: Yup.string()
              .required('requerido')
              .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
            parentesco: Yup.string()
              .required('requerido')
              .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
            numero_telefonico: Yup.string()
              .required('requerido')
              .min(7, 'Ingresa un número de teléfono válido.')
              .max(20, 'Ingresa un número de teléfono válido.'),

            nombre_referencia_familiar_alt: Yup.string()
              .required('requerido')
              .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
            parentesco_alt: Yup.string()
              .required('requerido')
              .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
            numero_telefonico_alt: Yup.string()
              .required('requerido')
              .min(7, 'Ingresa un número de teléfono válido.')
              .max(20, 'Ingresa un número de teléfono válido.'),
          })}
          onSubmit={async value => {
            props.setForm(prevState => ({
              ...prevState,
              formulario_individual: {
                ...prevState.formulario_individual,
                informacion_referencias_comerciales_familiares: { ...value },
              },
            }))

            const dataToSend = {
              seccion: 'FDE_8',
              solicitud_id: props.solicitud_id || solicitud,
            }

            if (!ref_personal_1?.id) {
              dataToSend.data = {
                referencias: [
                  {
                    tipo: 'personal',
                    nombre: value.nombre_referencia_familiar,
                    telefono: value.numero_telefonico,
                    parentesco: value.parentesco,
                  },
                  {
                    tipo: 'personal',
                    nombre: value.nombre_referencia_familiar_alt,
                    telefono: value.numero_telefonico_alt,
                    parentesco: value.parentesco_alt,
                  },
                ],
              }
            } else {
              dataToSend.data = {
                referencias: [
                  {
                    id: ref_personal_1?.id || null,
                    tipo: 'personal',
                    nombre: value.nombre_referencia_familiar,
                    telefono: value.numero_telefonico,
                    parentesco: value.parentesco,
                  },
                  {
                    id: ref_personal_2?.id || null,
                    tipo: 'personal',
                    nombre: value.nombre_referencia_familiar_alt,
                    telefono: value.numero_telefonico_alt,
                    parentesco: value.parentesco_alt,
                  },
                ],
              }
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

              if (res.status === 422) {
                setMessage(res.message || 'Ya tienes referencias')
              }

              if (responseComplete) {
                props.setIsCompletedReferenceForm(true)
                props.setCurrent(props.current + 1)
                router.push(
                  `/individual/${cedula}/${props.solicitud_id || solicitud
                  }?paso=FDE_9&rol=${rol}`,
                )
                //setHide(true)
              } else {
                props.setIsCompletedReferenceForm(false)
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
          {values => (
            <Form>
              {DataReferencesTradeAndFamiliar.map(field => {
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

              {message}
              {onErrPost ? <div className={ERROR_CLASS}>{onErrPost}</div> : null}
              <div className="flex justify-around">
                <button
                  type="button"
                  onClick={() => handleBack(values)}
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
            </Form>
          )}
        </Formik>
      </div>
    )
  ) : (
    <div className='flex flex-nowrap flex-row items-center'>
      <div className='h-16 flex items-center'>Cargando ...</div>
      <div className="spinner_cont items-center">
        <span className="material spinner" />
      </div>
    </div>
  )
}

export default ReferencesForm
