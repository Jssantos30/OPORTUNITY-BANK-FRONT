import * as React from 'react'
import { useRouter } from 'next/router'
import { customFetch, RequestTypes } from '../utils/custom-fetch'
import { UploadDocuments } from './UploadDocuments'

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

export const CardUploadDocument = props => {
  const { route } = useRouter()
  const [documents, setDocuments] = React.useState({})
  const [messageLoadDocument, setMessageLoadDocument] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  async function fetchFile(data) {
    const responseFetch = await customFetch('files/upload', {
      method: 'POST',
      body: data,
      type: RequestTypes.files,
      preventContentType: true,
    })
    return responseFetch
  }

  async function fetchDataBase(url, data) {
    const response = await customFetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      type: RequestTypes.credit,
    })
    const res = await response.json()
    return { responseComplete: response.ok, res }
  }

  const uploadDocument = async e => {
    e.preventDefault()
    let keyDocument
    const arrayObj = Object.keys(documents)
    let rolUser
    if (route.includes('individual')) rolUser = 'deudor'
    else rolUser = 'codeudor'

    if (!arrayObj.length) {
      setMessageLoadDocument('Hubo un error, debes de elegir un documento')
      setTimeout(() => {
        setMessageLoadDocument('')
      }, 5000)
    } else {
      for (let iterador in documents) {
        if (documents[iterador] !== '') {
          keyDocument = iterador

          try {
            const res = await fetchFile(documents[iterador])

            if (res.status === 201) {
              const responseData = await res.json()
              const { filename } = responseData
              const documentToSend = {
                seccion: 'DOC',
                solicitud_id: props.solicitud_credito,
                data: {
                  [rolUser]: [
                    {
                      tipo: keyDocument,
                      referencia: filename,
                    },
                  ],
                },
              }

              try {
                const { res, responseComplete } = await fetchDataBase(
                  'credito/solicitud',
                  documentToSend,
                )

                if (responseComplete) {
                  setMessageLoadDocument(res.message)
                  setTimeout(() => {
                    setMessageLoadDocument('')
                    setLoading(true)
                    setTimeout(() => {
                      setLoading(false)
                    }, 2000)
                  }, 5000)
                } else {
                  setMessageLoadDocument('Hubo un error, Intenta más tarde')
                  setTimeout(() => {
                    setMessageLoadDocument('')
                  }, 5000)
                }
              } catch (err) {
                setMessageLoadDocument('Hubo un error, Intenta más tarde')
              }
            }
          } catch (err) {
            setMessageLoadDocument(`Hubo un error, Intenta más tarde ${err.message}`)
            setTimeout(() => {
              setMessageLoadDocument('')
            }, 5000)
          }
        }
      }
    }
  }

  return (
    <div className="flex flex-col px-4 border rounded-lg bg-white">
      <div className="">
        <div className="">
          <UploadDocuments
            documents={documents}
            setDocuments={setDocuments}
            setMessageLoadDocument={setMessageLoadDocument}
            loading={loading}
          />
        </div>

        <div className="mx-auto flex flex-col"></div>
      </div>
      {messageLoadDocument !== '' ? (
        <div className={messageLoadDocument.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
          {messageLoadDocument}
        </div>
      ) : null}
      <button
        onClick={uploadDocument}
        className=" px-4 py-2  my-4 rounded-full mx-auto bg-color_primary_1 text-white font-semibold"
      >
        {' '}
        Subir{' '}
      </button>
    </div>
  )
}
