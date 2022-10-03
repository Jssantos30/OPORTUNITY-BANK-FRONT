import React from 'react'

const classCelda = 'border-r  '
const padding = 'px-6 py-2'

export const IndicadoresTasas = ({
  tasa_interes_mora,
  mora_de_1_a_30_dias,
  mora_de_31_a_60_dias,
  mora_de_61_a_90_dias,
  mora_mayor_a_90_dias,
}) => {
  return (
    <div>
      <table className="border  rounded-lg bg-white">
        <thead className="border ">
          <tr>
            <th className="border py-4"> nombre</th>
            <th> valor </th>
          </tr>
        </thead>

        <tbody>
          <tr className={''}>
            <td className={`${classCelda} ${padding}`}>tasa interes mora</td>
            <td className={padding}>{tasa_interes_mora}</td>
          </tr>
          <tr className={''}>
            <td className={`${classCelda} ${padding}`}>mora de 1 a 30 dias</td>
            <td className={padding}>{mora_de_1_a_30_dias}</td>
          </tr>
          <tr className={''}>
            <td className={`${classCelda} ${padding}`}>mora de 31 a 60 dias</td>
            <td className={padding}>{mora_de_31_a_60_dias}</td>
          </tr>
          <tr className={''}>
            <td className={`${classCelda} ${padding}`}>mora de 61 a 90 dias</td>
            <td className={padding}>{mora_de_61_a_90_dias}</td>
          </tr>
          <tr className={''}>
            <td className={`${classCelda} ${padding}`}> mora_mayor a 90 dias </td>
            <td className={padding}> {mora_mayor_a_90_dias} </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
