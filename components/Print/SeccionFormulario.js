import React from 'react'

const SeccionFormulario = props => {
  return (
    <div>
      <h1 className={`text-center text-white ${props?.bg || 'bg-color_primary_1'}`}>
        {props.seccion}
      </h1>
      <div>{props.children}</div>
    </div>
  )
}

export default SeccionFormulario
