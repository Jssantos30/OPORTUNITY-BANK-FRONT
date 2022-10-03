import * as React from 'react'
import { separadorMillares } from '../../utils/separadorMillares'

const InputCredito = ({
  lineaCreditoInfo,
  valoresSimulacion,
  setValoresSimulacion,
  selected,
  refMonto,
}) => {
  const handleChange = ({ target }) => {
    setValoresSimulacion({
      ...valoresSimulacion,
      linea_credito: lineaCreditoInfo.nombre,
      [target.name]: target.value,
    })
  }

  function numeroCuotas(max_cuota) {
    const arr = []
    for (let i = 1; i <= max_cuota; i++) {
      arr.push(i)
    }
    return arr
  }

  return (
    <React.Fragment>
      <div className="border bg-white rounded-lg p-8">
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="pb-4 text-center md:text-left md:pb-0 font-semibold text-color_primary_2_ligth text-xl w-3/5">
            ¿En cuántas cuotas desearía pagar?
          </p>
          <select
            onChange={handleChange}
            key={'cuotas'}
            label=""
            name="cuotas"
            className="h-10 border w-full pl-4 border-color_gray_4 rounded-lg md:w-2/6"
            value={valoresSimulacion.cuotas}
          >
            <option value="" className="font-light">
              {' '}
              {`---Seleccione cuota ---`}{' '}
            </option>
            {numeroCuotas(lineaCreditoInfo.num_cuotas).map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <p className="text-center md:text-left font-semibold text-color_primary_2_ligth text-xl mb-4 md:mb-0 w-3/5">
            ¿Cuánto dinero desea solicitar?
          </p>
          <input
            onChange={handleChange}
            ref={refMonto}
            key={'monto'}
            label={''}
            name={'monto'}
            type={'number'}
            className={
              'text-center w-full font-semibold h-10 border border-color_gray_5 rounded-lg md:w-2/6'
            }
            min={0}
            max={Number(lineaCreditoInfo.monto_total)}
            placeholder="$"
            value={valoresSimulacion.monto}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
export default InputCredito
