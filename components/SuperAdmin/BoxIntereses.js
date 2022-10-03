import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as React from 'react'
import * as Yup from 'yup'
import { customFetch, customFetchPublic, RequestTypes } from '../../utils/custom-fetch'
import { preventOnWheelChange } from '../../utils/helpers'
import Modal from './Modal'

const SUCCESS_CLASS =
  'mb-4 mensaje-exito px-4 py-3 relative'
const ERROR_CLASS =
  'mb-4 mensaje-error px-4 py-3 relative'

const BoxIntereses = props => {
  const initialValues = {
    interes_mora: '',
    interes_corriente: '',
    salario_minimo: '',
    anno_vigencia: '',
  }

  const classInput = ''

  const [initialValuesForm, setInitialValuesForm] = React.useState(initialValues)
  const [copyInitialValuesForm, setCopyInitialValuesForm] = React.useState(initialValuesForm)
  const [dataForm, setDataForm] = React.useState(null)
  const [valBox, setValBox] = React.useState(null)

  const [isEditableOff, setIsEditableOff] = React.useState(true)
  const [renderModal, setRenderModal] = React.useState(false)
  const [loadingBoxInteres, setLoadingBoxInteres] = React.useState(false)
  const [messageError, setMessageError] = React.useState('')
  const [showButton, setShowButton] = React.useState(false)

  async function fetcher(url) {
    let response = await customFetch(url, { type: RequestTypes.config })
    return await response.json()
  }

  React.useEffect(() => {
    async function getTokenInterno() {
      try {
        const URL_TOKEN = `${process.env.NEXT_PUBLIC_AUTHSERVICE_V1}auth/obtener-token-interno`
        //const URL_TOKEN = `http://localhost:3001/api/v1/auth/obtener-token-interno`
        const { access_token } = await fetcher(URL_TOKEN)
        localStorage.setItem('token_interno', access_token)
        // setTokenInterno(access_token)
      } catch (err) { }
    }

    if (!localStorage.getItem('token_interno'))
      getTokenInterno()

    async function run() {
      setLoadingBoxInteres(true)
      try {
        const response_tasas = await customFetchPublic('config/credito/tasas', {
          type: RequestTypes.config,
        })
        const { corriente, mora } = await response_tasas.json()


        const response_salario_minimo = await customFetchPublic('config/salario-minimo', {
          type: RequestTypes.config,
        })
        const salario = await response_salario_minimo.json()

        // const [tasas, salario] = await Promise.all([
        //   fetcher('config/credito/tasas'),
        //   fetcher('config/salario-minimo'),
        // ])
        // const { corriente, mora } = tasas
        setValBox({
          mora,
          corriente,
          salario,
        })
        setInitialValuesForm({
          interes_mora: mora.valor_tasa,
          interes_corriente: corriente.valor_tasa,
          salario_minimo: salario.salario,
          anno_vigencia: salario.anno_vigencia,
        })
        props.setSalarioMinimo(salario.salario)
        setCopyInitialValuesForm({
          interes_mora: mora.valor_tasa,
          interes_corriente: corriente.valor_tasa,
          salario_minimo: salario.salario,
          anno_vigencia: salario.anno_vigencia,
        })
        setLoadingBoxInteres(false)
      } catch (error) {
        setLoadingBoxInteres(false)
        setMessageError(
          'Hubo un error, estos valores no se encuentran disponibles, intentalo más tarde',
        )
      }
    }
    run()
  }, [])

  const handleEditableBox = () => {
    setShowButton(true)
    setIsEditableOff(false)
  }

  const handleModifyInteres = async () => {
    //TODO: Aqui debo hacer la peticion para enviar al backend modificado los valores

    const { mora,corriente, salario } = valBox
    try {
      if (initialValuesForm.interes_corriente !== dataForm.interes_corriente) {
        const url_modicar_interes_corriente = `config/credito/tasa/${corriente.tasa_id}`
        const { interes_corriente } = dataForm
        const resUpdate = await fetcher(url_modicar_interes_corriente, {
          nombre_tasa: 'Interes Corriente',
          valor_tasa: Number(interes_corriente),
        })

        const { res } = resUpdate

        if (res.status === 400) {
          setMessageError('Hubo un error al actualizar interés corriente, intenta más tarde')
          setTimeout(() => {
            setMessageError('')
          }, 3000)
          setRenderModal(false)
        }

        if (res.status === 200) {
          setMessageError(' Proceso exitoso, se ha actualizado')
          setTimeout(() => {
            setMessageError('')
          }, 3000)
          setRenderModal(false)
        }
      }

      if (initialValuesForm.interes_mora !== dataForm.interes_mora) {
        const { interes_mora } = dataForm
        const resUpdate = await fetcher(`config/credito/tasa/${mora.tasa_id}`, {
          nombre_tasa: 'Interes Mora',
          valor_tasa: Number(interes_mora),
        })

        const { res } = resUpdate

        if (res.status === 400) {
          setMessageError('Hubo un error al actualizar interés corriente, intenta más tarde')
          setTimeout(() => {
            setMessageError('')
          }, 3000)
          setRenderModal(false)
        }

        if (res.status === 200) {
          setMessageError(' Proceso exitoso, se ha actualizado')
          setTimeout(() => {
            setMessageError('')
          }, 3000)
          setRenderModal(false)
        }
      }

      if (initialValuesForm.salario_minimo !== dataForm.salario_minimo) {
        const { salario_minimo, anno_vigencia } = dataForm
        const resUpdate = await fetcher(`config/salario-minimo/${salario.salario_id}`, {
          anno_vigencia: Number(anno_vigencia),
          salario: Number(salario_minimo),
        })

        const { res } = resUpdate

        if (res.status === 400) {
          setMessageError('Hubo un error al actualizar interés corriente, intenta más tarde')
          setTimeout(() => {
            setMessageError('')
          }, 3000)
          setRenderModal(false)
        }

        if (res.status === 200) {
          setMessageError(' Proceso exitoso, se ha actualizado')
          setTimeout(() => {
            setMessageError('')
          }, 3000)
          setRenderModal(false)
        }
      }
      setRenderModal(false)
      setShowButton(false)
      setIsEditableOff(true)

      async function fetcher(url, dataSend) {
        let response = await customFetch(url, {
          method: 'PUT',
          body: JSON.stringify(dataSend),
          type: RequestTypes.config,
        })

        return { dataResponse: await response.json(), res: response }
      }
    } catch (error) { }
  }

  const handleCancel = () => {
    setRenderModal(false)
    setLoadingBoxInteres(true)
    setShowButton(false)
    setIsEditableOff(true)
    setInitialValuesForm({ ...copyInitialValuesForm })
    setTimeout(() => {
      setLoadingBoxInteres(false)
    }, 500)
  }

  return loadingBoxInteres ? (
    <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> 
  ) : (
    <>
      <div className="flex flex-wrap">
        <Formik
          initialValues={initialValuesForm}
          validationSchema={Yup.object({
            interes_mora: Yup.number()
              .typeError('Deber ser un numero')
              .required('Requerido')
              .min(0),
            interes_corriente: Yup.number()
              .typeError('Deber ser un numero')
              .required('Requerido')
              .min(0),
            salario_minimo: Yup.number()
              .typeError('Deber ser un numero')
              .required('Requerido')
              .min(0),
            anno_vigencia: Yup.number()
              .typeError('Deber ser un numero')
              .required('Requerido')
              .min(0),
          })}
          onSubmit={value => {
            setDataForm(value)
            setRenderModal(true)
          }}
        >
          {() => {
            return (
              <div className="w-full">
                <Form>
                  <div>
                    <div className="body-card-custom grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="grid">
                        <label>Interés mora:</label>
                        <Field
                          type="number"
                          onWheel={preventOnWheelChange}
                          name="interes_mora"
                          disabled={isEditableOff}
                          className={classInput}
                        />
                        <ErrorMessage name="interes_mora" />
                      </div>
                      <div className="grid">
                        <label>Interés corriente:</label>
                        <Field
                          type="number"
                          onWheel={preventOnWheelChange}
                          name="interes_corriente"
                          disabled={isEditableOff}
                          className={classInput}
                        />
                        <ErrorMessage name="interes_mora" />
                      </div>



                      <div className="grid">
                        <label>Salario:</label>
                        <Field
                          type="number"
                          onWheel={preventOnWheelChange}
                          name="salario_minimo"
                          disabled={isEditableOff}
                          className={classInput}
                        />
                        <ErrorMessage name="interes_mora" />
                      </div>
                      <div className="grid">
                        <label>Año vigencia:</label>
                        <Field
                          name="anno_vigencia"
                          type="number"
                          onWheel={preventOnWheelChange}
                          disabled={isEditableOff}
                          className={classInput}
                        />
                        <ErrorMessage name="anno_vigencia" />
                      </div>
                    </div>
                    
                      
                
                  </div>

                  <div className="flex">
                    {showButton ? (
                      <div className='flex justify-end footer-card-custom w-full'>
                      <button
                        type="submit"
                        className="btn-primario"
                      >
                        Guardar
                      </button>
                      </div>
                    ) : null}
                  </div>
                </Form>
              </div>
            )
          }}
        </Formik>
        
        
          

        {messageError !== '' ? (
          <div className={messageError.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
            {' '}
            {messageError}{' '}
          </div>
        ) : null}
        <div
          id="editar-interes"
          className={
            renderModal &&
            `fixed inset-0 bg-modal-info  flex justify-center z-50`
          }
        ></div>

        {renderModal ? (
          <Modal nodo="editar-interes">
          <div className="card-modal-sm flex flex-col">
            
          <div className='body-card-modal-sm'>
            <h1 className='titulo-modal-info'>Confirmación de acción</h1>
            <p>¿Está seguro desea cambiar la configuración?</p>
            </div>
            <div className="flex justify-center footer-card-modal-sm">
              <button
                type="submit"
                className="btn-primario order-2 ml-4"
                onClick={handleModifyInteres}
              >
                Si
              </button>
              <button
                type="submit"
                className="order-1 btn-texto-gris"
                onClick={handleCancel}
              >
                No
              </button>
            </div>
          </div>
        </Modal>
        ) : null}
      </div>
      
      {!showButton && (
        <div className='footer-card-custom flex justify-end items-end'>
        <button
          type="button"
          onClick={handleEditableBox}
          className="btn-secundario"
        >
         Editar
         
        </button>
        </div>  
      )}
      
    </>
  )
}

export default BoxIntereses
