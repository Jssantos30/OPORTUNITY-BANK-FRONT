import * as React from 'react'
import { Formik, Form } from 'formik'
import { DataPersonalReferences } from './DataPersonalReferences'
import * as Yup from 'yup'

import TextInput from '../../TextInput'
import { fetchData } from '../../../../utils/fetchData'
import { useRouter } from 'next/router'
import { CardUploadDocument } from '../../../CardUploadDocument'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'
const INFO_CLASS =
  'mensaje-info mb-4 px-4 py-3 rounded relative'


const ReferencesForm = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const [hide] = React.useState(false)
  const reducerRef = (curr, updates) => ({ ...curr, ...updates })
  const [{ ref_personal, ref_personal_alt }, dispatch] = React.useReducer(reducerRef, {
    ref_personal: undefined,
    ref_personal_alt: undefined,
  })

  const initialValuesForm = {
    nombre_referencia_familiar: '',
    parentesco: '',
    numero_telefonico: '',

    nombre_referencia_familiar_alt: '',
    parentesco_alt: '',
    numero_telefonico_alt: '',
  }

  const [editForm, setEditForm] = React.useState(false)
  const [message, setMessage] = React.useState(null)
  const [valuesForm, setValuesForm] = React.useState(initialValuesForm)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [onErrPost, setOnErrPost] = React.useState(null)
  const [onWarnPost, setWarnPost] = React.useState(null)

  React.useEffect(async () => {
    setEditForm(false)
    try {
      const URL_GET_STEP_FORM = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1
        }credito/solicitud/${props.solicitud_id || solicitud}?seccion=${paso}`
      const { response, error } = await getData(URL_GET_STEP_FORM)

      if (!error) {
        const info = await response.json()

        if (response.status === 404) {
          setEditForm(true)
          setOnErrGet(null)
        }

        if (response.status === 401) {
          setEditForm(true)
          setOnErrGet('Hubo un error al consultar los datos del crédito, por favor intenta nuevamente')
        }

        if (response.status === 200) {
          const [ref_personal, ref_personal_alt] = info
          dispatch({ ref_personal, ref_personal_alt })
          const obj = {
            nombre_referencia_familiar: ref_personal.nombre,
            parentesco: ref_personal.parentesco,
            numero_telefonico: ref_personal.telefono,

            nombre_referencia_familiar_alt: ref_personal_alt.nombre,
            parentesco_alt: ref_personal_alt.parentesco,
            numero_telefonico_alt: ref_personal_alt.telefono,
          }

          setValuesForm(obj)
          setOnErrGet(null)
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
    router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_6&rol=${rol}`)
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
              .min(7, 'Ingresa un número de teléfono válido.')
              .max(20, 'Ingresa un número de teléfono válido.'),

            nombre_referencia_familiar_alt: Yup.string()
              .required('requerido')
              .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
            parentesco_alt: Yup.string()
              .required('requerido')
              .matches(/^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$/, 'No se permiten números ni caracteres especiales.'),
            numero_telefonico_alt: Yup.string()
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
              seccion: 'FCO_7',
              solicitud_id: props.solicitud_id || solicitud,
            }

            dataToSend.data = {
              referencias: [
                {
                  tipo: 'personal',
                  nombre: value.nombre_referencia_familiar,
                  telefono: String(value.numero_telefonico),
                  parentesco: value.parentesco,
                },
                {
                  tipo: 'personal',
                  nombre: value.nombre_referencia_familiar_alt,
                  telefono: String(value.numero_telefonico_alt),
                  parentesco: value.parentesco_alt,
                },
              ],
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
                  fieldName: 'isCompletedPersonalReference',
                })
                props.setCurrent(props.current + 1)

                // props.setCurrent(props.current + 1)
                router.push(
                  `/codeudor/${cedula}/${props.solicitud_id || solicitud
                  }?paso=FCO_8&rol=${rol}`,
                )
                //setHide(true)
              } else {
                if (res.statusCode !== 422){
                  props.dispatch({
                    type: 'update',
                    payload: false,
                    fieldName: 'isCompletedPersonalReference',
                  })
                  setOnErrPost(`No fue posible almacenar estos datos, revisa la información e Intenta más tarde`)
                  setTimeout(() => {
                    setOnErrPost(null)
                  }, 5000)
                }else{
                  setWarnPost(res.message || 'Ya tienes referencias registradas, continua en el siguiente paso.')
                  setTimeout(() => {
                    setWarnPost(null)
                    props.dispatch({
                      type: 'update',
                      payload: true,
                      fieldName: 'isCompletedPersonalReference',
                    })
                    props.setCurrent(props.current + 1)

                    // props.setCurrent(props.current + 1)
                    router.push(
                      `/codeudor/${cedula}/${props.solicitud_id || solicitud
                      }?paso=FCO_8&rol=${rol}`,
                    )
                  }, 5000)
                }
              }
            } catch (err) {
              console.log(err)
            }
          }}
        >
          {values => (
            <Form>
              {DataPersonalReferences.map(field => {
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

              {/* <FileUploader /> */}
              <CardUploadDocument
                solicitud_credito={props.solicitud_id || solicitud}
                cedula={cedula}
              />
              {onErrPost ? <div className={ERROR_CLASS}>{onErrPost}</div> : null}
              {onWarnPost ? <div className={INFO_CLASS}>{onWarnPost}</div> : null}
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
