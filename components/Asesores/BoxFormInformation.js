import React from 'react'
import { ProcessForm } from '../../utils/processForm'
import Link from 'next/link'

const BoxFormInformation = props => {
  return (
    <div className="my-4 card-custom">
      <h2 className="header-card-custom"> {props.title} </h2>
      <div className='body-card-custom'>
      <div className="mt-4 font-section">
        <label className="font-semibold">Tipo:</label>
        {props.tipo}
      </div>
      <div className="mt-4 font-section">
        <label className="font-semibold">Seccion del formulario: </label>
        {ProcessForm(props.usuario.seccion)?.paso}
      </div>

      <div className="text-center my-4 sm:text-left">
        {['FDE_9', 'FCO_9'].includes(props.usuario?.seccion) ? (
          <div>
            Formulario Completo
            <small className="ml-4 hover:text-color_primary_2_ligth">
              <Link
                href={`/${props.form}/${props.usuario?.persona.num_identificacion}/${props.id}?paso=${props.usuario?.seccion}&rol=${props.rol}`}
              >
                <a>Editar</a>
              </Link>
            </small>
          </div>
        ) : (
          <div className="font-section">
            Completar formulario
            <Link
              href={`/${props.form}/${props.usuario?.persona?.num_identificacion}/${props.id}?paso=${props.usuario?.seccion}&rol=${props.rol}`}
            >
              <a className="hover:text-color_primary_2_ligth hover:font-bold">
                <small>
                  <img src={`${process.env.NEXT_BASE_PATH}/edit_icon.svg`} alt="edit_icon" className="h-6 w-6 m-auto sm:m-0" />
                </small>
                Editar
              </a>
            </Link>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default BoxFormInformation
