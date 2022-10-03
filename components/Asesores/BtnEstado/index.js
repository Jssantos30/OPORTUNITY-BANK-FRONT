import React from 'react'

function BtnEstado(props) {
  const btn = (name, color) => {
    return (
      <div className={`${color}`}>
        {name}
      </div>
    )
  }

  const dataFiltered = props.estado.filter(({ actual }) => actual === true)
  const [currentState] = dataFiltered

  return (
    <React.Fragment>
      {currentState.estado.toLowerCase() === 'completado' &&
        btn('Completado', 'estado-verde')}
      {currentState.estado.toLowerCase() === 'incompleto' &&
        btn('Incompleto', 'estado-amarillo')}
      {currentState.estado.toLowerCase() === 'falta_documentos' &&
        btn('Faltan documentos', 'estado-rojo')}
      {currentState.estado.toLowerCase() === 'por_validar' &&
        btn('Por validar', 'estado-gris')}
      {currentState.estado.toLowerCase() === 'preparado_envio' &&
        btn('Listo para enviar al operador', 'estado-verde')}
      {currentState.estado.toLowerCase() === 'rechazado' && btn('Rechazado', 'estado-rojo')}
      {currentState.estado.toLowerCase() === 'aprobado' && btn('Aprobado', 'estado-verde')}
      {currentState.estado.toLowerCase() === 'colocado' && btn('Colocado', 'estado-verde')}
    </React.Fragment>
  )
}

export default BtnEstado
