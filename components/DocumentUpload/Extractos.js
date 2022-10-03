import { Form, Formik } from 'formik'
import * as React from 'react'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'
import SelectionInput from '../Forms/SelectionInput'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'
export const Extractos = props => {
  const btn = React.useRef()
  const [error, setError] = React.useState('')

  return (
    <div className="">
      {props.extractData.length > 0 ? (
        <Formik
          initialValues={{
            extractos: '',
          }}
          onSubmit={async values => {
            const { extractos } = values

            try {
              const fetchDocument = await customFetch(`files/${extractos}`, {
                type: RequestTypes.files,
              })

              if (fetchDocument.status === 200) {
                const doc = await fetchDocument.blob()
                const create_url = window.URL.createObjectURL(doc)
                const a = document.createElement('a')
                a.href = create_url
                a.download = extractos
                const btn = document.getElementById('btn-download')
                btn.append(a)
                a.click()
                window.URL.revokeObjectURL(create_url)
              } else {
                setError('Hubo un error')
                setTimeout(() => {
                  setError('')
                }, 5000)
              }
            } catch (err) {
              setError('Hubo un error')
              setTimeout(() => {
                setError('')
              }, 5000)
            }
          }}
        >
          {() => {
            return (
              <div>
                <Form className="flex pb-4 md:pb-0 flex-col md:flex-row items-center justify-between w-full border-b border-color_gray_8">
                  <div className="w-full md:w-8/12">
                    <SelectionInput
                      key="extractos"
                      name="extractos"
                      className={'h-10 border border-gray-400 px-4  mt-6'}
                      options={props.extractData}
                      render={(option, index) => {
                        return (
                          <option key={index} value={option.filename}>
                            {option.name}{' '}
                          </option>
                        )
                      }}
                    />
                  </div>

                  {error !== '' ? (
                    <div className={error.includes('error') && ERROR_CLASS}>{error}</div>
                  ) : null}

                  <div className="sm:w-1/4 w-1/2">
                    <button
                      id={'btn-download'}
                      ref={btn}
                      type="submit"
                      className="btn-primario m-2  w-3/5"
                    >
                      Descargar
                    </button>
                  </div>
                </Form>
              </div>
            )
          }}
        </Formik>
      ) : (
        <div className="border-b border-color_gray_8 pb-4">
          No hay datos para mostrar actualmente.
        </div>
      )}
    </div>
  )
}
