import React from 'react'
import { separadorMillares } from '../../utils/separadorMillares'

const TableIncome = props => {
  return (
    <div>
      <table className="border border-black my-2">
        <thead>
          <tr>
            <td colSpan={2} className="text-center border border-black bg-gray-400 text-white">
              Ingresos Mensuales
            </td>
            <td colSpan={2} className="text-center border border-black bg-gray-400 text-white">
              {' '}
              Egresos Mensuales
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black">Ingresos salario</td>
            <td className="border border-black">
              {' '}
              {separadorMillares(props.ingresos?.salario) == 'NaN'
                ? 0
                : separadorMillares(props.ingresos?.salario)}{' '}
            </td>
            <td className="border border-black">Cuotas de arrendamiento</td>
            <td className="border border-black">
              {separadorMillares(props.egresos?.cuota_arrendamiento) == 'NaN'
                ? 0
                : separadorMillares(props.egresos?.cuota_arrendamiento)}
            </td>
          </tr>

          <tr>
            <td className="border border-black">Otros ingresos</td>
            <td className="border border-black">
              {separadorMillares(props.ingresos?.otros_ingresos) == 'NaN'
                ? 0
                : separadorMillares(props.ingresos?.otros_ingresos)}
            </td>
            <td className="border border-black">Gastos familiares</td>
            <td className="border border-black">
              {separadorMillares(props.egresos?.gastos_familiares) == 'NaN'
                ? 0
                : separadorMillares(props.egresos?.gastos_familiares)}
            </td>
          </tr>

          <tr>
            <td className="border border-black"></td>
            <td className="border border-black"></td>
            <td className="border border-black">Otros gastos</td>
            <td className="border border-black">
              {separadorMillares(props.egresos?.otros_gastos) == 'NaN'
                ? 0
                : separadorMillares(props.egresos?.otros_gastos)}
            </td>
          </tr>
          <tr>
            <td className="border border-black">Total ingresos mensuales </td>
            <td className="border border-black">
              {separadorMillares(props.ingresos?.ingresos_mensuales) == 'NaN'
                ? 0
                : separadorMillares(props.ingresos?.ingresos_mensuales)}
            </td>
            <td className="border border-black">Total gastos mensuales</td>
            <td className="border border-black">
              {separadorMillares(props.egresos?.gastos_mensuales) == 'NaN'
                ? 0
                : separadorMillares(props.egresos?.gastos_mensuales)}
            </td>
          </tr>
        </tbody>
      </table>
      <style jsx>{`
        td {
          padding: 0.5rem 1rem;
        }
      `}</style>
    </div>
  )
}

export default TableIncome
