import React from 'react'

const BoxDeudorInformation = props => {
  return (
    <div className="my-4 bg-white card-custom">
      <h2 className="header-card-custom"> {props.title} </h2>
      <div className='body-card-custom'>
      <div className="mt-4 font-section">
        <label className="font-semibold">{`Nombres:  `}</label>
        {`${props.usuario?.persona?.primer_nombre} ${
          props.usuario?.persona?.segundo_nombre || ''
        } ${props.usuario?.persona?.primer_apellido} ${
          props.usuario?.persona?.segundo_apellido || ''
        }`}
      </div>
      <div className="mt-4 font-section">
        <label className="font-semibold">Número de identificacion: </label>
        {props.usuario?.persona.num_identificacion}
      </div>
      </div>
    </div>
  )
}

export default BoxDeudorInformation
