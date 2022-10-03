import React from 'react'

export const useDocuments = props => {
  const initialValues = {
    cedula: '',
    servicios_publicos: '',
    cifin: '',
    modelo_de_negocio: '',
    certificado_tradicion: '',
    vista_agropecuaria: '',
    firma: '',
    otros: '',
  }

  const [valueDocument, setValueDocument] = React.useState(initialValues)
  const [currentDocument, setCurrentDocument] = React.useState('')

  const handleSelect = e => {
    setCurrentDocument(e.target.value)
    setValueDocument({
      ...valueDocument,
      [e.target.value]: e.target.value,
    })
  }

  React.useEffect(() => {
    if (props.loading) {
      setCurrentDocument('')
    }
  }, [props.loading])

  return {
    currentDocument,
    setCurrentDocument,
    handleSelect,
    valueDocument,
  }
}
