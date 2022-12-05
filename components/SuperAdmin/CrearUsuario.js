import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import SelectionInput from '../Forms/SelectionInput'
import * as Yup from 'yup'
import { fetchData } from '../../utils/fetchData'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'
import { ERROR_CLASS, SUCCESS_CLASS } from '../../utils/constants'
import { preventOnWheelChange } from '../../utils/helpers'

const className =
  'w-full h-12 px-4 py-2 my-1 text-base border border-color_gray_4 placeholder-color_gray_5 rounded-2xl'

const CrearUsuario = ({ roles }) => {
  const [loading] = React.useState(false)
  const [message] = React.useState('')

  const GetDep = () => {
    const [muninicipios, setMunicipios] = React.useState([])

    React.useEffect(() => {
      async function fetchData() {
        try {
          const municipios = await fetcher('maestras/departamento/05-ANTIOQUIA/ciudades')
          setMunicipios(municipios)
        } catch (err) {}
      }
      fetchData()
    }, [])

    return muninicipios.length > 0 ? (
      <SelectionInput
        key={'municipio'}
        id={'municipio'}
        label={'Ciudad o Municipio'}
        name={'municipio'}
        className={
          "'w-full h-12 px-4 py-2  text-base border border-color_gray_4 placeholder-color_gray_5 rounded-2xl'"
        }
        options={muninicipios}
        render={municipio => (
          <option key={municipio.id} value={municipio.id}>
            {municipio.nombre}
          </option>
        )}
      />
    ) : null
  }

  const initialValuesForm = {
    nombres: '',
    apellidos: '',
    cedula: '',
    telefono: '',
    celular: '',
    correo: '',
    direccion: '',
    rolID: '',
    municipio: '',
  }

  async function fetcher(url) {
    let response = await customFetch(url, { type: RequestTypes.auth })
    return await response.json()
  }

  return loading ? (
    <div>Loading....</div>
  ) : (
    <Formik
      initialValues={initialValuesForm}
      validationSchema={Yup.object({
        nombres: Yup.string().required('Requerido'),
        apellidos: Yup.string().required('Requerido'),
        cedula: Yup.number()
          .required('Requerido')
          .typeError('Debe ser un número')
          .test(
            'Is positive?',
            'ERROR: El numero tiene que ser mayor a cero',
            value => value > 0,
          ),
        telefono: Yup.string()
          .required('Requerido')
          .typeError('Debe ser un número')
          .test(
            'Is positive?',
            'ERROR: El numero tiene que ser mayor a cero',
            value => value >= 0,
          ),
        celular: Yup.string()
          .notRequired()
          .typeError('Debe ser un número')
          .test(
            'Is positive?',
            'ERROR: El numero tiene que ser mayor a cero',
            value => value >= 0,
          )
          .nullable(true),
        correo: Yup.string().required('Requerido').email(),
        direccion: Yup.string().required('Requerido'),
        rolID: Yup.string().required('Requerido'),
        municipio: Yup.string().required('Requerido'),
      })}
      onSubmit={async value => {
        const { rolID, ...dataForm } = value
        const dataToSend = {
          ...dataForm,
          rolID: Number(rolID),
        }

        try {
          await fetchData('roles/crear-usuario-rol', dataToSend)
        } catch (err) {}
      }}
    >
      {() => {
        return (
          <Form className="flex flex-col">
            <label>
              {' '}
              Nombres
              <Field type="text" name="nombres" className={className} />
              <ErrorMessage name="nombres" />
            </label>

            <label>
              {' '}
              Apellidos
              <Field type="text" name="apellidos" className={className} />
              <ErrorMessage name="apellidos" />
            </label>

            <label>
              Cedula
              <Field
                type="number"
                min={0}
                name="cedula"
                className={className}
                onWheel={preventOnWheelChange}
              />
              <ErrorMessage name="cedula" />
            </label>

            <label>
              Teléfono
              <Field
                type="string"
                name="telefono"
                className={className}
                onWheel={preventOnWheelChange}
              />
              <ErrorMessage name="telefono" />
            </label>

            <label>
              Celular
              <Field
                type="number"
                name="celular"
                className={className}
                onWheel={preventOnWheelChange}
              />
              <ErrorMessage name="celular" />
            </label>

            <label>
              Correo
              <Field type="email" name="correo" className={className} />
              <ErrorMessage name="correo" />
            </label>

            <label>
              Dirección
              <Field type="text" name="direccion" className={className} />
              <ErrorMessage name="direccion" />
            </label>

            <SelectionInput
              key={'roles'}
              id={'roles'}
              label={'Rol'}
              name={'rolID'}
              className={
                'w-full h-12 px-4 py-2 my-1 text-base border border-color_gray_4 placeholder-color_gray_5 rounded-2xl'
              }
              options={roles}
              render={rol => (
                <option key={rol.id} value={rol.id}>
                  {rol.nombre}
                </option>
              )}
            />

            <GetDep />

            {message !== '' && (
              <div className={message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
                {' '}
                {message}{' '}
              </div>
            )}

            <button
              type="submit"
              className="mt-2 p-2  font-bold text-white rounded-full bg-color_primary_2_ligth"
            >
              Crear
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default CrearUsuario
