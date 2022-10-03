import { useRouter } from 'next/router'
import React from 'react'
import { useDocuments } from '../Hooks/useDocuments'

const documentosDeudor = [
  {
    name: 'Cédula',
    value: 'CEDULA',
    id: 1,
  },
  {
    name: 'Servicios públicos',
    value: 'SERVICIOS_PUBLICOS',
    id: 2,
  },
  {
    name: 'Cifin',
    value: 'CIFIN',
    id: 3,
  },
  {
    name: 'Modelo de negocio',
    value: 'MODELO_NEGOCIO',
    id: 4,
  },
  {
    name: 'Certificado de tradicion',
    value: 'CERTIFICADO_TRADICION',
    id: 5,
  },
  {
    name: 'Visita agropecuaria',
    value: 'VISITA_AGROECUARIA',
    id: 6,
  },
  {
    name: 'otros',
    value: 'OTROS',
    id: 7,
  },
]

const documentosCodeudor = [
  {
    name: 'Cédula',
    value: 'CEDULA',
    id: 1,
  },
  {
    name: 'Servicios publicos',
    value: 'SERVICIOS_PUBLICOS',
    id: 2,
  },
  {
    name: 'Cifin',
    value: 'CIFIN',
    id: 3,
  },
  {
    name: 'Visita agropecuaria',
    value: 'VISITA_AGROECUARIA',
    id: 4,
  },
  {
    name: 'Modelo de negocio',
    value: 'MODELO_NEGOCIO',
    id: 5,
  },
  {
    name: 'Carta laboral',
    value: 'CARTA_LABORAL',
    id: 6,
  },
  {
    name: 'Colillas pago de salario',
    value: 'COLLILLAS_PAGO_SALARIO',
    id: 7,
  },
  {
    name: 'Propiedad raiz',
    value: 'PROPIEDAD_RAIZ',
    id: 8,
  },
  {
    name: 'Impuesto predial',
    value: 'IMPUESTO_PREDIAL',
    id: 9,
  },
  {
    name: 'Certificado tradición',
    value: 'CERTIFICADO_TRADICION',
    id: 10,
  },
  {
    name: 'Hipotecas',
    value: 'HIPOTECAS',
    id: 11,
  },
  {
    name: 'Patrimonio familia',
    value: 'PATRIMONIO_FAMILIA',
    id: 12,
  },
  {
    name: 'Hipotecas',
    value: 'HIPOTECAS',
    id: 13,
  },
  {
    name: 'Embargos',
    value: 'EMBARGOS',
    id: 14,
  },
  {
    name: 'Certificado de afiliacion transporte',
    value: 'CERTIFICADO_AFILIACION_TRANSPORTE',
    id: 15,
  },
  {
    name: 'Tarjeta propiedad vehiculo',
    value: 'TARJETA_PROPIEDAD_VEHICULO',
    id: 16,
  },
  {
    name: 'Resolución de pensión',
    value: 'RESOLUCION_PENSION',
    id: 17,
  },
]
export const UploadDocuments = props => {
  const { route } = useRouter()
  const { currentDocument, handleSelect, valueDocument } = useDocuments(props)
  const [documentos, setDocumentos] = React.useState([])

  React.useEffect(() => {
    if (route.includes('individual')) {
      setDocumentos(documentosDeudor)
    }

    if (route.includes('codeudor')) {
      setDocumentos(documentosCodeudor)
    }
  }, [])

  const LoadDocument = e => {
    //si el documento es mayor a 5Mb sacar error
    if(e.target.files[0].size>5242880){
      props.setMessageLoadDocument('error, El archivo supera el tamaño máximo permitido')
      setTimeout(() => {
        props.setMessageLoadDocument('')
      }, 5000)
      return;
    }else{
      const data = new FormData()
      data.append('file', e.target.files[0])
      props.setDocuments({
        ...props.documents,
        [e.target.name]: data,
      })
    }
  }

  const fileRef = React.useRef()

  React.useEffect(() => {
    props.setDocuments({})
    if (fileRef.current) {
      fileRef.current.value = ''
    }
  }, [currentDocument])

  return props.loading ? (
    <div>Loading ....</div>
  ) : documentos.length > 0 ? (
    <div>
      <div className="text-center rounded-lg mt-4 ">
        <select
          name={currentDocument || ''}
          value={valueDocument[currentDocument]}
          onChange={handleSelect}
          className="border border-gray-300 rounded-lg mx-auto py-2"
        >
          <option value="">{` <--- Selecciona un tipo de documento ---> `}</option>
          {documentos.map(opt => {
            return (
              <option key={opt.id} name={opt.name} value={opt.value}>
                {' '}
                {opt.name}{' '}
              </option>
            )
          })}
        </select>
        {currentDocument ? (
          <input
            ref={fileRef}
            type="file"
            name={currentDocument}
            onChange={e => LoadDocument(e)}
            accept=".jpg, .jpeg, .png, .pdf"
          />
        ) : null}
        <p> Solo se permiten archivos de tipo [.jpg, .jpeg, .png, .pdf] y de tamaño máximo de 5 Mb</p>
      </div>
    </div>
  ) : null
}
