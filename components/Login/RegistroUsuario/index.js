import { Form, Formik, useFormikContext } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import SelectionInput from '../../Forms/SelectionInput'
import TextInput from '../../Forms/TextInput'
import { dataRegistroUsuario } from './dataRegistroUsuario'
import { fetchData } from '../../../utils/fetchData'
import { useRouter } from 'next/router'
import { customFetchPublic ,RequestTypes } from '../../../utils/custom-fetch'

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

function RegistroUsuario() {
  const router = useRouter()
  const [countries, setCountries] = React.useState([])
  const [departamentos, setDepartamentos] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [isHabeasDataOpen, setIsHabeasDataOpen] = React.useState(false)

  const formRef = React.useRef(null)



  const GetDep = () => {
    const { values } = useFormikContext()
    const [muninicipios, setMunicipios] = React.useState([])
    
    React.useEffect(() => {
      async function run() {
        try {
          const URL_CIUDADES = `maestras/departamento/${values.departamento}/ciudades`
          const response = await customFetchPublic(URL_CIUDADES, { type: RequestTypes.auth})
          const municipios = await response.json()
          setMunicipios(municipios)
        } catch (err) { }
      }
      if (values.departamento)
        run()
    }, [values.departamento])

    return values.pais === 'CO-Colombia' && muninicipios.length > 0 ? (
      <SelectionInput
        key={'municipio'}
        id={'municipio'}
        label={'Municipio'}
        name={'municipio'}
        className={
          "'w-full h-10 px-4 py-2 my-1 text-base border border-color_gray_4 placeholder-color_gray_5 rounded-2xl'"
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
    tipo_sociedad: '',
    tipo_entidad: '',
    tipo_identificacion: '',
    documento: '',
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    celular: '',
    direccion: '',
    barrio: '',
    pais: '',
    departamento: '',
    municipio: '',
    genero: '',
    politica: true,
    notificacion: false,
  }

  async function fetcher(url) {
    let response = await fetch(url)
    return await response.json()
  }
  async function getTokenInterno() {
      try {
        const URL_TOKEN = `${process.env.NEXT_PUBLIC_AUTHSERVICE_V1}auth/obtener-token-interno`
        const {access_token} = await fetcher(URL_TOKEN)
        localStorage.setItem('token_interno', access_token)
        // setTokenInterno(access_token)
      } catch (err) {}
   }
    
  React.useEffect(() => {
    async function run() {
      const URL_DEPARTAMENTOS = `maestras/departamentos`
      const response = await customFetchPublic(URL_DEPARTAMENTOS, { type: RequestTypes.auth})
      const departamentos = await response.json()
      setCountries([{ id: 'CO-Colombia', nombre: 'Colombia' }])
      setDepartamentos(departamentos)
    }
    getTokenInterno().then(()=>run())
  }, [])

  function submitForm() {
    setIsHabeasDataOpen(false)
    setMessage('')
    formRef.current.handleSubmit()
  }

  return loading ? (
    <div>Loading ....</div>
  ) : (
    <div className="max-w-2xl mx-auto">
      {isHabeasDataOpen ? (
        <HabbeasData submitForm={submitForm} setIsHabeasDataOpen={setIsHabeasDataOpen} />
      ) : null}
      <>
        <h1 className="text-3xl text-center font-medium mt-10">Regístrate</h1>
        <Formik
          innerRef={formRef}
          initialValues={initialValuesForm}
          validationSchema={Yup.object({
            tipo_sociedad: Yup.string()
              .required('* Campo obligatorio')
              .oneOf(['N-Persona Natural', 'J-Persona Juridica']),
            tipo_entidad: Yup.string()
              .required('* Campo obligatorio')
              .oneOf([
                'O-ORGANIZACIÓN SIN ÁNIMO DE LUCRO',
                'R-PRIVADA',
                'P-PÚBLICA',
                'T-OTRO',
                'NINGUNO',
              ]),
            tipo_identificacion: Yup.string()
              .required('* Campo obligatorio')
              .oneOf([
                '1-Cédula de Ciudadanía',
                '2-Tarjeta de identidad',
                '3-Cédula de Extranjería',
                '4-NIT',
              ]),
            documento: Yup.number().required('* Campo obligatorio'),
            nombres: Yup.string()
              .matches('^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$', 'No puede contener números ni caracteres especiales.')
              .required('* Campo obligatorio'),
            apellidos: Yup.string()
              .matches('^[a-zA-ZÑñàèìòùÀÈÌÙÒáéíóúÁÉÍÚÓ ]+$', 'No puede contener números ni caracteres especiales.')
              .required('* Campo obligatorio'),
            correo: Yup.string().email().required('* Campo obligatorio'),
            telefono: Yup.string()
              .min(7, 'Ingresa un número de teléfono válido.')
              .required('* Campo obligatorio'),
            celular: Yup.string()
              .min(10, 'Ingresa un número de celular válido.')
              .required('* Campo obligatorio'),
            direccion: Yup.string().required('* Campo obligatorio'),
            barrio: Yup.string().notRequired(),
            pais: Yup.string().required('* Campo obligatorio'),
            departamento: Yup.string().notRequired().nullable(true),
            municipio: Yup.string().notRequired().nullable(true),
            genero: Yup.string().required('* Campo obligatorio').oneOf(['f', 'm', 'o']),
          })}
          onSubmit={async value => {
            for (const key in value) {
              const val = value[key]
              if (typeof val === 'string') {
                value[key] = val.trim()
              }
            }

            const dataToSend = {
              ...value,
            }

            try {
              const { responseComplete, res } = await fetchData(
                `${process.env.NEXT_PUBLIC_AUTHSERVICE_V1}auth/registro`,
                dataToSend,
                false,
              )

              if (res.statusCode === 400) {
                setMessage(`Hubo un error, ${res.message}`)
                setTimeout(() => {
                  setMessage('')
                }, 10000)
                return
              }

              if (responseComplete) {
                setMessage('Registro Exitoso')
                setTimeout(() => {
                  router.push('/login')
                }, 2000)
              }
            } catch (err) {
              setMessage(`Hubo un error`)
            }
          }}
        >
          {({ values, validateForm }) => (
            <Form className="px-4 md:px-0">
              {dataRegistroUsuario.map(field => {
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
                  <React.Fragment key={field.id}>
                    <TextInput
                      key={field.id}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      className={field.className}
                      placeholder={field.fieldName}
                    />
                  </React.Fragment>
                )
              })}

              {countries.length > 0 ? (
                <SelectionInput
                  key={'Pais'}
                  id={'Pais'}
                  label={'Pais'}
                  name={'pais'}
                  className={
                    "'w-full h-10 px-4 py-2 my-1 text-base border border-color_gray_4 placeholder-color_gray_5 rounded-2xl'"
                  }
                  options={countries}
                  render={country => (
                    <option key={country.id} value={country.id}>
                      {country.nombre}
                    </option>
                  )}
                />
              ) : null}

              {values.pais === 'CO-Colombia' && departamentos.length > 0 ? (
                <SelectionInput
                  key={'departamento'}
                  id={'departamento'}
                  label={'Departamento'}
                  name={'departamento'}
                  className={
                    "'w-full px-4 py-2 my-1 text-base border border-color_gray_4 placeholder-color_gray_5 rounded-2xl'"
                  }
                  options={departamentos}
                  render={departamento => (
                    <option key={departamento.id} value={departamento.id}>
                      {departamento.nombre}
                    </option>
                  )}
                />
              ) : null}

              <GetDep />

              {message !== '' && (
                <div className={message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
                  {' '}
                  {message}{' '}
                </div>
              )}

              <button
                type="submit"
                className="mt-4 p-2 max-w-full w-full text-2xl font-medium my-4 py-3 bg-color_primary_2_ligth rounded-full text-white"
                onClick={async e => {
                  e.preventDefault()
                  const errors = await validateForm()

                  if (Object.keys(errors).length === 0) {
                    setIsHabeasDataOpen(true)
                  } else {
                    setMessage('Hubo un error, todos los campos son requeridos')
                  }
                }}
              >
                Registrarme
              </button>
            </Form>
          )}
        </Formik>
      </>
    </div>
  )
}

export default RegistroUsuario

const HabbeasData = ({ submitForm }) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <div className="fixed z-100 bg-black/30 flex items-center justify-center h-full w-full top-0 left-0 py-4">
      <div className="bg-gray-100 max-w-4xl mx-auto rounded-lg p-8 max-h-full overflow-y-auto">
        <section className="flex flex-col ">
          <h2 className="text-2xl text-center my-8">
            Autorización para el tratamiento de datos personales del Banco
          </h2>
          <p className="text-justify">
            Autorizo al Municipio de Medellín, identificado con NIT Nº 890.905.211-1, como
            Responsable para tratar mis datos personales conforme a su Política de Tratamiento
            de Datos Personales, disponible en www.medellin.gov.co, para que sean incluidos en
            sus bases de datos, para los siguientes fines: efectuar las gestiones pertinentes
            para el desarrollo de las funciones legales y cumplimiento del objeto misional del
            programa Banco de los Pobres adscrito a la Secretaría de Desarrollo Económico, cuyo
            propósito es crear de mecanismos financieros flexibles que permitan promover las
            actividades productivas, comerciales y de servicios de la ciudad, apoyándose en
            entidades nacionales e internacionales que ejecutan actividades tendientes a
            desarrollar y operar líneas de créditos encaminadas a financiar proyectos
            individuales y colectivos. En esa medida, declaro que la información suministrada es
            correcta, veraz, verificable y actualizada. Igualmente autorizo al Municipio de
            Medellín, para contactarme vía WhatsApp, correo electrónico, mensajes de texto,
            llamadas telefónicas a mis números fijo y celular, comunicaciones escritas u otros
            medios de comunicación; para compartir mis datos personales con terceros aliados o
            contratistas del Municipio de Medellín, así como con otras entidades del orden
            municipal, departamental y nacional, para garantizar la prestación de sus servicios
            o para la ejecución de planes, programas, proyectos o estrategias conjuntas.
            Asimismo, declaro que conozco que no es obligatorio responder preguntas relacionadas
            con datos sensibles o de menores de edad (en calidad de representante legal) y que,
            en caso de proporcionarlos, estoy autorizando expresamente su Tratamiento y que
            tengo derecho a conocer, consultar, actualizar, rectificar y suprimir mi
            información, solicitar prueba de esta autorización y revocarla (cuando ello sea
            posible y no se requieran los datos en virtud de las funciones legales del Municipio
            de Medellín), derechos que se me ha informado puedo ejercer a través de los canales:
            portal web www.medellin.gov.co y presencial en el Centro de Servicio a la
            Ciudadanía, MasCercas y Casas de Gobierno.
          </p>
        </section>
        <br />

        <div className="flex flex-col items-center">
          <label>
            <input
              type="checkbox"
              name="terminos_condiciones"
              className="mr-4"
              checked={checked}
              onChange={e => setChecked(e.target.checked)}
            />
            ¿Estoy de acuerdo con los términos y condiciones?
          </label>

          <br />
          <button
            onClick={() => {
              if (checked) submitForm()
            }}
            type="submit"
            className="  mt-4 p-2 w-1/2 text-white rounded-full bg-color_primary_2_ligth"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}
