import React from 'react'
import SeccionFormulario from '../components/Print/SeccionFormulario'

function Print() {
  return (
    <>
      <SeccionFormulario seccion="Destino crédito"></SeccionFormulario>
      <style jsx>{`
        @media print {
          @page {
            margin: 2rem;
            background: red;
          }
        }
      `}</style>
    </>
  )
}

export default Print
