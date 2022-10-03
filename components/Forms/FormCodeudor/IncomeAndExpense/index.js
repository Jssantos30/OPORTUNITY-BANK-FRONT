import React from 'react'
import TextInput from '../../TextInput'
import { DataExpenses } from './DataExpenses'
import { DataIncome } from './DataIncome'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { fetchData } from '../../../../utils/fetchData'
import { useRouter } from 'next/router'
import { getData } from '../../../../utils/getData'
import ErrorPage from '../../../../pages/_error'
import { preventOnWheelChange } from '../../../../utils/helpers'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const IncomeAndExpense = props => {
  const router = useRouter()
  const { push } = useRouter()
  const { paso, rol } = router.query
  const [cedula, solicitud] = router.query.usuario

  const initialValuesForm = {
    salario: '',
    otros_ingresos: '',
    ingresos_mensuales: '',

    cuota_arrendamiento: '',
    gastos_familiares: '',
    otros_gastos: '',
    gastos_mensuales: '',
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
          setOnErrGet('Hubo un error, por favor intenta nuevamente')
        }

        if (response.status === 200) {
          const valuesIncomes = {
            salario: info.ingresos.salario,
            otros_ingresos: info.ingresos.otros_ingresos,
            ingresos_mensuales: info.ingresos.ingresos_mensuales,

            cuota_arrendamiento: info.egresos.cuota_arrendamiento,
            gastos_familiares: info.egresos.gastos_familiares,
            otros_gastos: info.egresos.otros_gastos,
            gastos_mensuales: info.egresos.gastos_mensuales,
          }
          setInitialValues({ ...valuesIncomes })
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
    router.push(`/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_4&rol=${rol}`)
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
      <h2 className="text-xl font-bold mb-4"> Ingresos y Egresos</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          salario: Yup.number().typeError('Debe ser numero').required('requerido').moreThan(-1),
          otros_ingresos: Yup.number().typeError('Debe ser numero').notRequired().moreThan(-1),
          cuota_arrendamiento: Yup.number()
            .typeError('Debe ser numero')
            .required('requerido')
            .positive(),
          gastos_familiares: Yup.number()
            .typeError('Debe ser numero')
            .required('requerido')
            .positive(),
          otros_gastos: Yup.number().typeError('Debe ser numero').required('requerido').moreThan(-1),
          gastos_mensuales: Yup.number()
          .typeError('Debe ser numero')
          .required('requerido').positive(),
          ingresos_mensuales: Yup.number()
          .typeError('Debe ser numero')
          .required('requerido').positive(),
        })}
        onSubmit={async value => {
          props.setForm(prevState => ({
            ...prevState,
            formulario_codeudor: {
              ...prevState.formulario_codeudor,
              ingresos_egresos: { ...value },
            },
          }))

          const {
            salario,
            otros_ingresos,
            ingresos_mensuales,

            cuota_arrendamiento,
            gastos_familiares,
            otros_gastos,
            gastos_mensuales,
          } = value

          const dataToSend = {
            seccion: 'FCO_5',
            solicitud_id: props.solicitud_id || solicitud,
            data: {
              ingresos: {
                salario,
                otros_ingresos,
                ingresos_mensuales: salario + otros_ingresos,
              },
              egresos: {
                cuota_arrendamiento,
                gastos_familiares,
                otros_gastos,
                gastos_mensuales: cuota_arrendamiento + gastos_familiares + otros_gastos,
              },
            },
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
                fieldName: 'isCompletedIncomeAndExpense',
              })
              props.setCurrent(props.current + 1)
              router.push(
                `/codeudor/${cedula}/${props.solicitud_id || solicitud}?paso=FCO_6&rol=${rol}`,
              )
            } else {
              props.dispatch({
                type: 'update',
                payload: false,
                fieldName: 'isCompletedIncomeAndExpense',
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
        {({ values }) => (
          <Form>
            {DataIncome.map(field => {
              return (
                <React.Fragment key={field.id}>
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

            {
              <div>
                <label>Ingresos mensuales</label>
                <br />
                <Field
                  type="number"
                  onWheel={preventOnWheelChange}
                  disabled
                  placeholder="Ingresos Mensuales"
                  name="ingresos_mensuales"
                  value={values.salario + values.otros_ingresos}
                />
                <ErrorMessage name="ingresos_mensuales" />
              </div>
            }
            <br />

            {DataExpenses.map(field => {
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

            {
              <div className="flex items-baseline">
                <label className="text-lg font-bold">Gastos Mensuales: </label>
                <Field
                  type="number"
                  onWheel={preventOnWheelChange}
                  disabled
                  placeholder="Gastos Mensuales"
                  name="gastos_mensuales"
                  className="rounded-lg border-color_gray_2"
                  value={
                    values.cuota_arrendamiento + values.gastos_familiares + values.otros_gastos
                  }
                />
                <ErrorMessage name="gastos_mensuales" />
              </div>
            }

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

export default IncomeAndExpense
