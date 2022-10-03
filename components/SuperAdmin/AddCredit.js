import React from 'react'
import { useAuthContext } from '../../auth-context'
import { preventOnWheelChange } from '../../utils/helpers'
import validForm from '../../utils/validateFields'
const AddCredit = props => {
  const { setOpenModal } = useAuthContext()
  const [messageError, setMessageError] = React.useState('')
  const [err, setErr] = React.useState({})

  const [editMontoMinSalarios, setEditMontoMinSalarios] = React.useState(false)
  const [editMontoMin, setEditMontoMin] = React.useState(true)

  const [editMontoMax, setEditMontoMax] = React.useState(true)
  const [editMontoMaxSalarios, setEditMontoMaxSalarios] = React.useState(false)

  const handleChange = ({ target }) => {
    if (target.name === 'num_salarios_minimo') {
      props.setValueMontoMinimo(target.value)
    }

    if (target.name === 'num_salarios') {
      props.setValueMontoMaximo(target.value)
    }

    props.setValuesAddLineaCredito({
      ...props.valuesAddLineaCredito,
      [target.name]: target.value,
    })
  }

  const refNodes = {
    linea_credito: React.useRef(null),
    num_cuotas: React.useRef(null),
    num_salarios_minimo: React.useRef(null),
    num_salarios: React.useRef(null),
    monto_minimo: React.useRef(
      refNodes?.num_salarios_minimo?.current?.value * props.salarioMinimo || 0,
    ),
    monto_total: React.useRef(
      refNodes?.num_salarios?.current?.value * props.salarioMinimo || 0,
    ),
  }

  //Efecto para guardar el monto minimo si agregas el # de salarios minimos

  React.useEffect(() => {
    props.setValuesAddLineaCredito({
      ...props.valuesAddLineaCredito,
      monto_minimo: refNodes?.num_salarios_minimo?.current?.value * props.salarioMinimo || 0,
    })
  }, [refNodes?.num_salarios_minimo?.current?.value])

  React.useEffect(() => {
    props.setValuesAddLineaCredito({
      ...props.valuesAddLineaCredito,
      monto_total: refNodes?.num_salarios?.current?.value * props.salarioMinimo || 0,
    })
  }, [refNodes?.num_salarios?.current?.value])

  const handleEditarMontoMin = () => {
    setEditMontoMinSalarios(true)
    setEditMontoMin(false)
  }

  const handleGuardarMontoMin = () => {
    setEditMontoMin(true)
    const nuevoValor = (props.valuesAddLineaCredito.monto_minimo / props.salarioMinimo).toFixed(
      1,
    )
    props.setValuesAddLineaCredito({
      ...props.valuesAddLineaCredito,
      num_salarios_minimo: nuevoValor,
    })
    refNodes.num_salarios_minimo.current.value = nuevoValor
    setEditMontoMinSalarios(false)
  }
  const handleEditarMontoMax = () => {
    setEditMontoMaxSalarios(true)
    setEditMontoMax(false)
  }

  const handleGuardarMontoMax = () => {
    setEditMontoMax(true)
    const nuevoValor = (props.valuesAddLineaCredito.monto_total / props.salarioMinimo).toFixed(
      1,
    )
    props.setValuesAddLineaCredito({
      ...props.valuesAddLineaCredito,
      num_salarios: nuevoValor,
    })
    refNodes.num_salarios.current.value = nuevoValor
    setEditMontoMaxSalarios(false)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const resultValidate = validForm(props.valuesAddLineaCredito)
    setErr(resultValidate)
    const isMissingFields = Object.keys(resultValidate).length
    const missingFields = Object.keys(resultValidate)

    if (!isMissingFields) {
      setOpenModal(true)
    } else {
      for (let key of missingFields) {
        refNodes[key].current.focus({ preventScroll: false })
      }
    }
  }

  const handleCloseBox = event => {
    event.preventDefault()
    props.setValuesAddLineaCredito({
      linea_credito: '',
      num_cuotas: '',
      num_salarios: '',
      monto_total: '',
      num_salarios_minimo: '',
      monto_minimo: '',
    })
    props.setValueMontoMinimo('')
    props.setValueMontoMaximo('')
    props.setShowCreditLineBox(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='body-card-custom'>
      <div onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-2">

        <div className="grid">
          <label className="font-bold">Nombre de línea de crédito:</label>
          <input
            type="text"
            name="linea_credito"
            value={props.valuesAddLineaCredito.linea_credito}
            onChange={handleChange}
            ref={refNodes.linea_credito}
            className="h-10 border border-gray-400 px-4 rounded-lg"
          />

          {err.linea_credito ? (
            <div className="texto-error">{err.linea_credito}</div>
          ) : null}
        </div>

        <div className="grid">
          <label className="font-bold">Número de cuotas permitidas:</label>
          <input
            type="number"
            onWheel={preventOnWheelChange}
            min={1}
            name="num_cuotas"
            value={props.valuesAddLineaCredito.num_cuotas}
            onChange={handleChange}
            ref={refNodes.num_cuotas}
            className="h-10 border border-gray-400 px-4 rounded-lg"
          />

          {err.num_cuotas ? (
            <div className="texto-error">{err.num_cuotas}</div>
          ) : null}
        </div>

        <div className="grid">
          <label className="font-bold">Numero de salarios - monto mínimo:</label>
          <input
            type="number"
            onWheel={preventOnWheelChange}
            name="num_salarios_minimo"
            disabled={editMontoMinSalarios}
            value={!editMontoMinSalarios ? props.valuesAddLineaCredito.num_salarios_minimo : ''}
            onChange={handleChange}
            ref={refNodes.num_salarios_minimo}
            className="h-10 border border-gray-400 px-4 rounded-lg"
          />

          {err.num_salarios_minimo ? (
            <div className="texto-error">{err.num_salarios_minimo}</div>
          ) : null}
        </div>

        <div className="grid">
          <label>Monto mínimo:</label>
          <div className='grid grid-cols-3 gap-2'>
          
          <input
            type="number"
            onWheel={preventOnWheelChange}
            name="monto_minimo"
            ref={refNodes.monto_minimo}
            disabled={editMontoMin}
            value={
              editMontoMin && !refNodes?.num_salarios_minimo?.current?.value
                ? refNodes?.num_salarios_minimo?.current?.value * props.salarioMinimo || 0
                : props.valuesAddLineaCredito.monto_minimo
            }
            onChange={handleChange}
            className="grid col-span-2"
          />

          {editMontoMin ? (
            <div className="grid col-span-1">
              <button
                className="btn-secundario"
                type="button"
                onClick={handleEditarMontoMin}
              >
               <span>
                
              Editar</span> 
              </button>
            </div>

            
            
          ) : (
            <div className="grid col-span-1">
              <button
                className="btn-primario"
                type="button"
                onClick={handleGuardarMontoMin}
              >
                {'Guardar'}
              </button>
            </div>
          )}
          {err.monto_minimo ? (
            <div className="texto-error">{err.monto_minimo}</div>
          ) : null}
        </div>
        </div>

        <div className="grid">
          <label className="font-bold">Número de salarios - monto máximo:</label>
          <input
            type="number"
            onWheel={preventOnWheelChange}
            name="num_salarios"
            disabled={editMontoMaxSalarios}
            value={!editMontoMaxSalarios ? props.valuesAddLineaCredito.num_salarios : ''}
            onChange={handleChange}
            ref={refNodes.num_salarios}
            className="h-10 border border-gray-400 px-4 rounded-lg"
          />

          {err.num_salarios ? (
            <div className="texto-error">{err.num_salarios}</div>
          ) : null}
        </div>

        <div className="grid">
          <label>Monto Máximo:</label>
          <div className='grid grid-cols-3 gap-2'>
          
          <input
              type="number"
              onWheel={preventOnWheelChange}
              name="monto_total"
              ref={refNodes.monto_total}
              disabled={editMontoMax}
              value={
                editMontoMax && !refNodes?.num_salarios?.current?.value
                  ? refNodes?.num_salarios?.current?.value * props.salarioMinimo || 0
                  : props.valuesAddLineaCredito.monto_total
              }
            onChange={handleChange}
            className="grid col-span-2"
          />

          {editMontoMax ? (
            <div className="grid col-span-1">
              <button
                className="btn-secundario"
                type="button"
                onClick={handleEditarMontoMax}
              >
               <span>
                
              Editar</span> 
              </button>
            </div>

            
            
          ) : (
            <div className="grid col-span-1">
              <button
                className="btn-primario"
                type="button"
                onClick={handleGuardarMontoMax}
              >
                {'Guardar'}
              </button>
            </div>
          )}
          {err.monto_total ? (
            <div className='texto-error block'>
            {err.monto_total}
            </div>
          ) : null}
        </div>
        </div>
        
        
      </div>
      </div>
      <div className="flex justify-end md:items-end footer-card-custom">
          <button
            type="submit"
            className="btn-primario order-1 md:order-1"
          >
            Enviar
          </button>
          <button
            onClick={handleCloseBox}
            type="submit"
            className="btn-texto-gris order-0 md:order-0"
          >
            Cancelar
          </button>
        </div>
    </form>
  )
}

export default AddCredit
