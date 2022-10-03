import * as React from 'react'
import { Formik, Form } from 'formik'
import { DataContactCitizenForm, Datacontact } from './DataCodeudorContact'
import * as Yup from 'yup'
import SelectionInput from '../../SelectionInput'

import TextInput from '../../TextInput'
import DateInput from '../../DateInput'
import { fetchData } from '../../../../utils/fetchData'
import TelInput from '../../TelInput'
import { ListaComunasBarriosMedellin } from '../../../../utils/ListaComunasBarriosMedellin.js'
import { useRouter } from 'next/router'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const Contact = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario
  const [hide, setHide] = React.useState(false)

  const initialValuesForm = {
    vivienda: '',
    direccion: '',
    estrato: '',
    barrio_vereda: '',
    comuna: '',
    telefono: '',
    celular: '',
    correo: props.correo || '',
    nombre_arrendador: '',
    telefono_arrendador: '',
  }

  const comunasObj = {}
  ListaComunasBarriosMedellin.forEach(el => {
    comunasObj[el.COMUNA] = el.NOMBRE_COMUNA
  })

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
    router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_3&rol=${rol}`)
  }

  return loading ? (
    <div>Loading ....</div>
  ) : onErrGet ? (
    <ErrorPage message={onErrGet} />
  ) : (
    <div className={` mb-8`}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          vivienda: Yup.string().required('requerido'),
          direccion: Yup.string().required('requerido'),
          estrato: Yup.number().typeError('Debe ser numero').required('requerido').positive(),
          barrio_vereda: Yup.string().required('requerido'),
          comuna: Yup.string().required('requerido'),
          telefono: Yup.number().typeError('Debe ser numero').notRequired().positive(),
          celular: Yup.number().typeError('Debe ser numero').required('requerido').positive(),
          correo: Yup.string().email().notRequired(),
          nombre_arrendador: Yup.string().notRequired().nullable(true),
          telefono_arrendador: Yup.number().notRequired().nullable(true),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_codeudor: {
              ...prevState.formulario_individual,
              contacto: { ...value },
            },
          }))

          const dataToSend = {
            seccion: 'FCO_4',
            solicitud_id: props.solicitud_id || solicitud,
          }

          if (value.vivienda !== 'Arrendada') {
            const { estrato, ...dataContant } = value
            dataToSend.data = {
              ...dataContant,
              nombre_arrendador: null,
              telefono_arrendador: null,
              estrato: Number(estrato),
            }
          } else {
            const { telefono, celular, telefono_arrendador, estrato, ...dataContant } = value
            dataToSend.data = {
              telefono: Number(telefono),
              celular: Number(celular),
              estrato: Number(estrato),
              telefono_arrendador: Number(telefono_arrendador),
              ...dataContant,
            }
          }

          try {
            const { responseComplete } = await fetchData(
              `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`,
              dataToSend,
            )

            if (responseComplete) {
              props.setIsCompletedContactCitizen(true)
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_5&rol=${rol}`,
              )
              //   props.setCurrent(props.current + 1)
              //   setHide(true)
            } else {
              props.setIsCompletedContactCitizen(false)
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
        {({ values }) => (
          <Form>
            {DataContactCitizenForm.map(field => {
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

            {values.vivienda === 'Arrendada' ? (
              <div>
                <TextInput
                  key="nombre_arrendador"
                  label={'Nombre del arrendador'}
                  name={'nombre_arrendador'}
                  type="text"
                  className="h-10 border border-gray-400 px-4 w-full"
                />

                <TextInput
                  key={'telefono_arrendador'}
                  label={'Telefono'}
                  name={'telefono_arrendador'}
                  type={'number'}
                  className="h-10 border border-gray-400 px-4 w-full"
                />
              </div>
            ) : null}

            {
              <SelectionInput
                key={'comuna'}
                id={'comuna'}
                label={'Comuna'}
                name={'comuna'}
                className={'h-10 border border-gray-400 px-4'}
                options={Object.values(comunasObj)}
                render={(option, index) => (
                  <option key={index} value={`${option}`}>
                    {`${option}`}
                  </option>
                )}
              />
            }

            {
              <SelectionInput
                key={'barrio_vereda'}
                id={'barrio_vereda'}
                label={'Barrio o Vereda'}
                name={'barrio_vereda'}
                className={'h-10 border border-gray-400 px-4'}
                options={ListaComunasBarriosMedellin.filter(
                  barrio => barrio.NOMBRE_COMUNA === values.comuna,
                )}
                render={(option, index) => (
                  <option key={index} value={`${option.BARRIO}-${option.NOMBRE_BARRIO}`}>
                    {`${option.NOMBRE_BARRIO}`}
                  </option>
                )}
              />
            }

            {Datacontact.map(field => {
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
                Siguiente
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact
