import { customFetch, RequestTypes } from './custom-fetch'

export const updateSendDocument = (file, setMesg) => {
  setMesg('Archivo cargado exitosamente')

  customFetch(`files/${file}`, { type: RequestTypes.files })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
}
