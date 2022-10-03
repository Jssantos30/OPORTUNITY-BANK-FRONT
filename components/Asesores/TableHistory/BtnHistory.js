import React from 'react'

function BtnHistory(props) {
  const btn = (name, color) => {
    return (
      <div className={`text-xs font-semibold px-4 rounded-full py-2 ${color}`}>
        {name}
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="mr-4"> {props.estado.actual ? <span>🟢</span> : <span>❌</span>}</div>

        {props.estado.estado.toLowerCase() === 'completado' &&
          btn('Completado', 'estado-verde-full')}
        {props.estado.estado.toLowerCase() === 'incompleto' &&
          btn('incompleto', 'estado-amarillo')}
        {props.estado.estado.toLowerCase() === 'falta_documentos' &&
          btn('Faltan documentos', 'estado-rojo')}
        {props.estado.estado.toLowerCase() === 'por_validar' &&
          btn('Por validar', 'estado-amarillo')}
        {props.estado.estado.toLowerCase() === 'preparado_envio' &&
          btn('Listo para enviar al operador', 'color_primary_1')}
        {props.estado.estado.toLowerCase() === 'rechazado' &&
          btn('Rechazado', 'estado-rojo-full')}
        {props.estado.estado.toLowerCase() === 'aprobado' && btn('aprobado', 'color_primary_1')}
        {props.estado.estado.toLowerCase() === 'colocado' && btn('colocado', 'color_primary_1')}
      </div>
    </React.Fragment>
  )
}

export default BtnHistory
