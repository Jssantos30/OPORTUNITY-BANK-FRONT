import { Form, Formik, useField } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'
import { updateSendDocument } from '../../utils/updateSendDocument'

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const CustomField = React.forwardRef(({ label, ...props }, ref) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label className="w-full md:w-8/12 px-0">
        {label}
        <input {...field} {...props} ref={ref} />
      </label>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  )
})
CustomField.displayName = ''

const UploadRecaudoCofinep = () => {
  const ref = React.useRef()
  const [msg, setMsg] = React.useState('')

  return (
    <div>
      <Formik
        initialValues={{
          uploadCartera: '',
        }}
        validationSchema={Yup.object({
          uploadCartera: Yup.string().matches(
            /recaudo_coofinep_\d{6}.(xlsx|xlsb)$/,
            'El archivo debe llamarse recaudo_coofinep_añomes y formato .xlsx o xlsb ejemplo: recaudo_coofinep_202110.xlsx',
          ),
        })}
        onSubmit={async (_, actions) => {
          try {
            const file = new FormData()
            file.append('file', ref.current.files[0])
            const fetchDoc = await customFetch(`files/upload?mantenerNombre=true`, {
              method: 'POST',
              body: file,
              type: RequestTypes.files,
              preventContentType: true,
            })

            if (fetchDoc.status === 201) {
              setMsg('Archivo cargado exitosamente')
              const docName = ref.current.files[0].name
              updateSendDocument(docName, setMsg)

              setTimeout(() => {
                setMsg('')
              }, 5000)
              actions.resetForm()
            }

            if (fetchDoc.status === 400 || fetchDoc.status === 404) {
              setMsg('Hubo un error, intente más tarde')
              setTimeout(() => {
                setMsg('')
              }, 5000)
            }
          } catch (err) {
            setMsg('Hubo un error, intente más tarde')
            setTimeout(() => {
              setMsg('')
            }, 5000)
          }
        }}
      >
        {() => {
          return (
            <Form className="flex flex-col md:flex-row items-center justify-between w-full pt-4">
              <CustomField
                ref={ref}
                name="uploadCartera"
                type="file"
                accept=".xlsx, .xlsb"
                className="h-10 w-full border-gray-400 md:px-0 mt-4"
              />
              <div className="sm:w-1/4 w-1/2">
                <button
                  type="submit"
                  className="btn-secundario m-2  w-3/5"
                >
                  Subir
                </button>
              </div>
            </Form>
          )
        }}
      </Formik>
      {msg !== '' ? (
        <div className={msg.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}> {msg} </div>
      ) : null}
    </div>
  )
}

export default UploadRecaudoCofinep
