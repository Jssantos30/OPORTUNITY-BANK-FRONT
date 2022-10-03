import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import Modal from './Modal'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'
import { preventOnWheelChange } from '../../utils/helpers'

const classInput = 'h-10 border ronded-lg border-gray-400 px-4 w-full'
const classYup = 'texto-error'
const SUCCESS_CLASS =
  'mb-4 mensaje-exito px-4 py-3 relative'
const ERROR_CLASS =
  'mb-4 mensaje-error px-4 py-3 relative'
const classModal = `fixed inset-0 bg-modal-info  flex justify-center z-50`

const EditCredit = props => {
  const [showModal, setShowModal] = React.useState(false)
  const [showModalDelete, setShowModalDelete] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [messageError, setMessageError] = React.useState('')

  const [editCredit, setEditCredit] = React.useState(undefined)
  const [valuesToDelete, setValuesToDelete] = React.useState(undefined)

  React.useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [props.lineaCreditoSelected])

  const handleEditLineaCredito = async event => {
    event.preventDefault()
    const { portafolio_id, ...dataToSend } = editCredit
    setShowModal(false)
    setMessageError('Procesando...')
    try {
      const responseFetch = await customFetch(`config/credito/portafolio/${portafolio_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...dataToSend, num_salarios: null }),
        type: RequestTypes.config,
      })

      const response = await responseFetch.json()

      if (responseFetch.statusCode === 404) {
        setMessageError('Hubo un error. Intente de nuevo')
        setTimeout(() => {
          setMessageError('')
        }, 5000)
      }

      if (responseFetch.status === 200) {
        setMessageError(response.message)
        setTimeout(() => {
          setMessageError('')
          props.setLineaCreditoSelected('')
        }, 5000)
      }
    } catch (err) {
      setShowModal(false)
      setMessageError('Hubo un error. Intentelo más tarde')
      setTimeout(() => {
        setMessageError('')
      }, 5000)
    }
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  const closeBox = event => {
    event.preventDefault()
    props.setLineaCreditoSelected('')
  }

  const eliminarRegistro = valores => {
    setShowModalDelete(true)
    setValuesToDelete(valores)
  }

  const handleDeleteCredito = async () => {
    const { portafolio_id, ...dataToSend } = valuesToDelete
    setShowModalDelete(false)

    try {
      const responseFetch = await customFetch(`config/credito/portafolio/${portafolio_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
        type: RequestTypes.config,
      })

      const response = await responseFetch.json()

      if (responseFetch.statusCode === 404) {
        setMessageError('Hubo un error. Intente de nuevo')
        setTimeout(() => {
          setMessageError('')
        }, 5000)
      }

      if (responseFetch.status === 200) {
        setMessageError(response.message)
        setTimeout(() => {
          setMessageError('')
          props.setLineaCreditoSelected('')
        }, 5000)
      }
    } catch (error) {
      setShowModalDelete(false)
      setMessageError('Hubo un error. Intentelo más tarde')
      setTimeout(() => {
        setMessageError('')
      }, 5000)
    }
  }

  const handleCancelProcessDelete = () => {
    setShowModalDelete(false)
  }

  return loading ? (
    <div> <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> </div>
  ) : (
    <div>
      <h2 className="text-lg text-color-black font-semibold text-center mt-1 mb-2">
        {props.lineaDeCredito.nombre}
      </h2>
      <Formik
        initialValues={props.lineaDeCredito}
        validationSchema={Yup.object().shape({
          nombre: Yup.string().required('Requerido').typeError('Debe ser texto'),
          num_cuotas: Yup.number()
            .required('Requerido')
            .typeError('Debe ser un número')
            .min(1, 'No puede ser cero ni un numero menor a uno'),
          num_salarios: Yup.number()
            .notRequired('Requerido')
            .typeError('Debe ser un número')
            .min(0, 'No puede ser cero ni un numero menor a cero')
            .nullable(true),
          monto_total: Yup.number()
            .required('Requerido')
            .typeError('Debe ser un número')
            .min(0, 'No puede ser cero ni un numero menor a cero'),
          num_salarios_minimo: Yup.number()
            .notRequired()
            .typeError('Debe ser un numero')
            .min(0, 'No puede ser cero ni un numero menor a cero')
            .nullable(true),
          monto_minimo: Yup.number()
            .notRequired()
            .typeError('Debe ser un numero')
            .min(0, 'No puede ser cero ni un numero menor a cero'),
        })}
        onSubmit={value => {
          setEditCredit(value)
          setShowModal(true)
        }}
      >
        {({ values }) => {
          return (
            <Form>
              <div className='body-card-custom'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-2 mb-4'>
                <div className="grid">
                  <label>Nombre línea de crédito:</label>
                  <div className="flex flex-col">
                    <Field
                      className={`${classInput} border-radius`}
                      type="text"
                      name="nombre"
                      value={values.nombre}
                    />
                    <div className='texto-error'>
                    <ErrorMessage name="nombre" />
                    </div>
                  </div>
                </div>

                <div className="grid">
                  <label>Plazo máximo en meses:</label>
                  <div className="flex flex-col">
                    <Field
                      className={classInput}
                      type="number"
                      name="num_cuotas"
                      placeholder="36"
                      onWheel={preventOnWheelChange}
                    />
                    <div className='texto-error'>
                    <ErrorMessage name="num_cuotas"/>
                    </div>
                  </div>
                </div>

                  {/* <div className="flex justify-between my-4">
                    <label className="font-section text-lg">Monto mínimo en (SMLV):</label>
                    <div className="flex flex-col">
                      <Field
                        className={classInput}
                        type="number"
                        name="num_salarios_minimo"
                        placeholder="1"
                        onWheel={preventOnWheelChange}
                      />
                      <ErrorMessage name="num_salarios_minimo" />
                    </div>
                  </div> */}

              
                <div className="grid">
                  <label>Monto mínimo:</label>
                  <div className="flex flex-col">
                    <Field
                      className={classInput}
                      type="number"
                      name="monto_minimo"
                      onWheel={preventOnWheelChange}
                      placeholder="1'000.000"
                    />
                    <div className='texto-error'>
                    <ErrorMessage name="monto_minimo"/>
                    </div>
                  </div>
                </div>

                <div className="grid">
                  <label>Monto máximo:</label>
                  <div className="flex flex-col">
                    <Field
                      className={classInput}
                      type="number"
                      name="monto_total"
                      placeholder="100'.000.000"
                      onWheel={preventOnWheelChange}
                    />
                    <div className='texto-error'>
                    <ErrorMessage name="monto_total"/>
                    </div>
                  </div>
                </div>

              </div>
              </div>


              <div className="footer-card-custom">
                <div className='flex justify-center md:justify-end flex-col md:flex-row'>
                
                <button
                  type="submit"
                  className="btn-texto-gris"
                  onClick={closeBox}
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="btn-texto-rojo"
                  onClick={() => eliminarRegistro(values)}
                >
                  Eliminar
                </button>

                <button
                  type="submit"
                  className="btn-primario"
                >
                  Guardar
                </button>
                </div>
              </div>

              {messageError !== '' ? (
                <div className={messageError.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
                  {messageError}
                </div>
              ) : null}
            </Form>
          )
        }}
      </Formik>

      {showModal ? (
        <Modal nodo="edit-credit">
          <div className="card-modal-sm">
            <div className='body-card-modal-sm'>
              <h1 className='titulo-modal-info'>Confirmar acción</h1>
              <p>¿Esta seguro(a) que desea editar este crédito?</p>
              </div>
            <div className="flex justify-center footer-card-modal-sm">
              <button
                type="submit"
                className="btn-primario order-2 ml-4"
                onClick={handleEditLineaCredito}
              >
                Si
              </button>

              <button
                type="submit"
                className="btn-texto-gris order-1 ml-4"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
      <div id="edit-credit" className={showModal && classModal}></div>
      <div id="delete-credit" className={showModalDelete && classModal}></div>

      {showModalDelete ? (
        <Modal nodo="delete-credit" className="flex items-center">
          <div className="border rounded-lg p-4 flex flex-col bg-white ">
            <h1>¿Esta seguro de eliminar esta línea de crédito?</h1>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mr-4 mt-6 p-2 w-2/5 font-bold text-white rounded-full bg-color_primary_2_ligth"
                onClick={handleDeleteCredito}
              >
                Si
              </button>

              <button
                type="submit"
                className="mt-6 p-2 w-2/5 font-bold text-white rounded-full bg-red-500"
                onClick={handleCancelProcessDelete}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default EditCredit
