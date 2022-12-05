import { Form, Formik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import * as Yup from 'yup'
import ErrorPage from '../../../../pages/_error'
import { fetchData } from '../../../../utils/fetchData'
import { getData } from '../../../../utils/getData'
import { preventOnWheelChange } from '../../../../utils/helpers'

import DateInput from '../../DateInput'
import SelectionInput from '../../SelectionInput'
import TelInput from '../../TelInput'
import TextInput from '../../TextInput'
import { DataPopulationVariables } from './DataPopulationVariables'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const PopulationVariables = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const initialValuesForm = {
    sexo: '',
    // orientacion_sexual: '',
    identidad_genero: '',
    estado_civil: '',
    nivel_escolaridad: '',
    personas_a_cargo: '',
    estado_laboral: '',
    poblacion_campesina: 'NO',  
    nombre_empresa: '',
    direccion_empresa: '',
    telefono_empresa: '',
    
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
          setOnErrGet('Hubo un error al consultar los datos del crédito, por favor intenta nuevamente')
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
    router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_2&rol=${rol}`)
  }

  const classInput = 'h-10 border border-gray-400 px-4'

  return loading ? (
    <div>Loading ... </div>
  ) : onErrGet ? (
    <ErrorPage message={onErrGet} />
  ) : (
    <div>
      <h2 className="text-xl font-semibold mb-4">Variables poblacionales</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          sexo: Yup.string()
            .required('requerido')
            .oneOf(['Masculino', 'Femenino', 'Intersexual', 'Indefinido']),
          // orientacion_sexual: Yup.string()
          //   .required('requerido')
          //   .oneOf([
          //     'Heterosexual',
          //     'Lesbiana',
          //     'Bisexual',
          //     'Gay',
          //     'Asexual',
          //     'Pansexual',
          //     'Homosexual',
          //     'Sin Dato',
          //     'No sabe No responde',
          //   ]),
          identidad_genero: Yup.string()
            .required('requerido')
            .oneOf([
              'Mujer Trans',
              'Hombre Trans',
              'Fluido-No Binario',
              'Mujer Cis',
              'Hombre Cis',
              'Travesti',
              'Transexual',
              'Transformista',
              'Otro',
              'Sin Dato',
              'No sabe No responde',
            ]),
          estado_civil: Yup.string()
            .required('requerido')
            .oneOf(['Soltero', 'Casado', 'Viudo', 'Union Libre', 'Divorciado']),
          nivel_escolaridad: Yup.string()
            .required('requerido')
            .oneOf([
              'Ninguno',
              'Primaria',
              'Bachiller',
              'Tecnico',
              'Tecnologo',
              'Profesional',
              'Especialista',
              'Magister',
              'Doctorado',
            ]),
          personas_a_cargo: Yup.number().required('requerido'),
          estado_laboral: Yup.string().required('requerido').oneOf(['Empleado', 'Desempleado']),
          nombre_empresa: Yup.string()
            .when('estado_laboral', {
              is: (estado_laboral) => estado_laboral == 'Empleado',
              then: Yup.string().required('requerido').typeError('Ingresa un nombre válido para la empresa'),
              otherwise: Yup.string().notRequired().nullable(true)
            }),
          telefono_empresa: Yup.string()
            .when('estado_laboral', {
              is: (estado_laboral) => estado_laboral == 'Empleado',
              then: Yup.string().required('requerido')
                .min(7, 'Ingresa un número de teléfono válido.')
                .max(20, 'Ingresa un número de teléfono válido.').typeError('Ingresa un número de teléfono válido.'),
              otherwise: Yup.string().notRequired().nullable(true)
            }),
          direccion_empresa: Yup.string()
            .when('estado_laboral', {
              is: (estado_laboral) => estado_laboral == 'Empleado',
              then: Yup.string().required('requerido').typeError('Ingresa una dirección válida para la empresa'),
              otherwise: Yup.string().notRequired().nullable(true)
            }),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_codeudor: {
              ...prevState.formulario_codeudor,
              variables_poblacionales: { ...value },
            },
          }))

          let dataToSend = {
            seccion: 'FCO_3',
            solicitud_id: props.solicitud_id || solicitud,
          }

          if (value.estado_laboral === 'Desempleado') {
            const { nombre_empresa, direccion_empresa, telefono_empresa, ...data } = value

            dataToSend.data = { ...data }
          } else {
            dataToSend.data = { ...value }
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
                fieldName: 'isCompletedPopulationVariables',
              })
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_4&rol=${rol}`,
              )
            } else {
              props.dispatch({
                type: 'update',
                payload: false,
                fieldName: 'isCompletedPopulationVariables',
              })
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
            {DataPopulationVariables.map(field => {
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

            {values.estado_laboral === 'Empleado' ? (
              <div>
                <TextInput
                  key={'nombre_empresa'}
                  label={'Nombre de la empresa'}
                  name="nombre_empresa"
                  type="text"
                  className={classInput}
                  placeholder="Nombre de la empresa en la que trabajas"
                />

                <TextInput
                  label={'Dirección de la empresa'}
                  key={'direccion_empresa'}
                  type="text"
                  name="direccion_empresa"
                  placeholder="Dirección"
                  className={classInput}
                />

                <TextInput
                label={'Teléfono de la empresa'}
                  key={'telefono_empresa'}
                  type="string"
                  onWheel={preventOnWheelChange}
                  name="telefono_empresa"
                  placeholder="Teléfono de la empresa"
                  className={classInput}
                />
              </div>
            ) : null}

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

export default PopulationVariables
