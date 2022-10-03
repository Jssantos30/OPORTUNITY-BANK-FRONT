import * as React from 'react'
import { Formik, Form } from 'formik'
import { dataPopulationVariables } from './DataPopulationVariables'
import * as Yup from 'yup'

import RadioButtom from '../../RadioButtom'
import TextInput from '../../TextInput'
import { fetchData } from '../../../../utils/fetchData'
import SelectionInput from '../../SelectionInput'
import { useRouter } from 'next/router'
import ErrorPage from '../../../../pages/_error'
import { getData } from '../../../../utils/getData'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const PopulationVariables = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const [hide, setHide] = React.useState(false)
  const initialValuesForm = {
    sexo: '',
    orientacion_sexual: '',
    identidad_genero: '',
    etnia: '',
    discapacidad: '',
    victima: '',
    poblacion_campesina: '',
    estado_civil: '',
    nivel_escolaridad: '',
    rol_hogar: '',
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
      `/individual/${cedula}/${props.solicitud_id || solicitud}?paso=FDE_4&rol=${rol}`,
    )
  }

  return loading ? (
    <div>Loading...</div>
  ) : onErrGet ? (
    <ErrorPage message={onErrGet} />
  ) : (
    <div className={`${hide && 'hidden'} mb-8`}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          sexo: Yup.string()
            .required('requerido')
            .oneOf(['Masculino', 'Femenino', 'Intersexual', 'Indefinido']),
          orientacion_sexual: Yup.string()
            .required('requerido')
            .oneOf([
              'Heterosexual',
              'Lesbiana',
              'Bisexual',
              'Gay',
              'Asexual',
              'Pansexual',
              'Homosexual',
              'Sin Dato',
              'No sabe No responde',
            ]),
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
          etnia: Yup.string().required('requerido'),
          discapacidad: Yup.string()
            .required('requerido')
            .oneOf([
              'Discapacidad Auditiva',
              'Discapacidad Cognitiva',
              'Discapacidad Fisica',
              'Discapacidad Mental',
              'Discapacidad Visual',
              'Discapacidad Multiple',
              'No tiene Discapacidad',
            ]),
          victima: Yup.string().required('requerido').oneOf(['SI', 'NO']),
          poblacion_campesina: Yup.string().required('requerido').oneOf(['SI', 'NO']),
          estado_civil: Yup.string()
            .required('requerido')
            .oneOf(['Soltero', 'Casado', 'Viudo', 'Union Libre', 'Divorciado']),
          nivel_escolaridad:
            Yup.string().required('requerido').oneOf(
              ['Ninguno',
              'Priimaria',
              'Bachiller',
              'Tecnico',
              'Tecnologo',
              'Profesional',
              'Especialista']
            ),
          rol_hogar: Yup.string()
            .required('requerido')
            .oneOf(['Cabeza Hogar', 'Aporta economicamente', 'No aporta']),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_individual: {
              ...prevState.formulario_individual,
              variables_poblacionales: { ...value },
            },
          }))

          const dataToSend = {
            seccion: 'FDE_5',
            solicitud_id: props.solicitud_id || solicitud,
            data: { ...value },
          }

          try {
            const { res, responseComplete, error } = await fetchData(
              `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`,
              dataToSend,
            )

            if (responseComplete) {
              props.setIsCompletedPopulationVariables(true)
              props.setCurrent(props.current + 1)
              router.push(
                `/individual/${cedula}/${
                  props.solicitud_id || solicitud
                }?paso=FDE_6&rol=${rol}`,
              )
              //setHide(true)
            } else {
              props.setIsCompletedPopulationVariables(false)
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
            <h2 className="text-xl text-center font-medium mb-4">
              Información personal Adicional
            </h2>
            {dataPopulationVariables.map(field => {
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
                <TextInput
                  key={field.id}
                  label={field.fieldName}
                  name={field.name}
                  className={field.className}
                />
              )
            })}
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
}

export default PopulationVariables
