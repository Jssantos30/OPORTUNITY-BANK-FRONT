import React from 'react'
import Link from 'next/link'

const BoxPeerToPeer = props => {
  return props.usuario?.persona?.num_identificacion ? (
    <div className="my-4 bg-white border border-gray-200 rounded-lg p-4 card-custom">
      <h2 className="header-card-custom"> {props.title} </h2>
      <div className='body-card-custom'>
      <div className="mt-4 font-section">
        <label className="font-semibold">{props.nombre} :</label>{' '}
        {`${props.usuario?.persona?.primer_nombre || ''} ${
          props.usuario?.persona?.primer_apellido || 'No tiene codeudor actualmente'
        } `}
      </div>

      <div className="mt-4 font-section">
        <label className="font-semibold">Número de identificación: </label>
        {` ${props.usuario?.persona?.num_identificacion || 'no aplica'}`}
      </div>

      <div className="text-center sm:text-left my-4">
        <div className="font-section">
          <Link
            href={`/backoffice/${props.usuario?.persona?.num_identificacion}?sid=${props.id}`}
          >
            <a className="hover:text-color_primary_2_ligth hover:font-bold">
              <small>
                <img src={`${process.env.NEXT_BASE_PATH}/edit_icon.svg`} alt="edit_icon" className="h-6 w-6 m-auto sm:m-0" />
              </small>
              Ir al dashboard del {props.nombre}
            </a>
          </Link>
        </div>
      </div>
      </div>
    </div>
  ) : (
    <div className=" card-custom border border-gray-200  rounded-lg p-4   max-w-1/2 w-content">
      <div className="header-card-custom"> {props.title} </div>
      {' '}
      <div className='body-card-custom'>
      <div className='mensaje-info'>No tiene codeudor actualmente</div>
      </div>{' '}
    </div>
  )
}

export default BoxPeerToPeer
