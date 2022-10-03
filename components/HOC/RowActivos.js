import React from 'react'
import Link from 'next/link'

export const formatDate = date => new Date(date).toLocaleDateString('es', dateOptions)
export const dateOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}

const RowActivos = props => {
  return (
    <tbody className="last:border text-sm">
      <tr className="font-section">
        <td className="text-center p-4">{props.cedula}</td>
        <td className="text-center p-4">{formatDate(props.fechaDesembolso)}</td>
        <td className="text-center p-4">{props.MontoDesembolso}</td>
        <td className="text-center p-4">{props.NumeroCuotas}</td>
        <td className="text-center p-4">{props.CuotasPendientes}</td>
        <td className="text-center p-4">{props.CuotaAnterior}</td>
        <Link href={`/backoffice/creditos-usuario/${props.cedula}`}>
          <a>
            <td className="text-center p-4"><div className='btn-texto items-center justify-center'>{'Ver más'}</div> </td>
          </a>
        </Link>
      </tr>
    </tbody>
  )
}

export default RowActivos
