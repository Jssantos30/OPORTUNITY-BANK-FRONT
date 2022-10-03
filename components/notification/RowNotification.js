import React from 'react'
import { getAdminName } from '../../utils/getAdminName'
import Link from 'next/link'
import { fetchData } from '../../utils/fetchData'
import { useRouter } from 'next/router'

export const RowNotification = ({ ctxDataUsuarios, notification }) => {
  const router = useRouter()

  const checkedNotification = async notification => {
    try {
      const url = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud`
      const dataToSend = {
        seccion: 'ASE',
        solicitud_id: notification.id,
        data: {
          ...notification.asesor,
          revisado: true,
        },
      }

      const { responseComplete, res } = await fetchData(url, dataToSend)

      if (responseComplete) {
        router.push(
          `/backoffice/${notification.deudor.persona.num_identificacion}?sid=${notification.id}`,
        )
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <tbody className="last:border-b-1 text-sm">
      <tr className="border-b-0 font-section">
        <td className="text-center p-4">{`Admin ${getAdminName(
          ctxDataUsuarios,
          notification,
        )}`}</td>
        <td className="text-center p-4">{notification.id}</td>
        <td className="text-center p-4">{`${notification.deudor.persona.primer_nombre}`}</td>
        <td className="text-center p-4">{`${notification.deudor.persona.primer_apellido}`}</td>
        <td className="text-center p-4">{notification.deudor.persona.num_identificacion}</td>
        <td className="text-center p-4">{formatDate(notification.asesor.fecha_asignacion)}</td>
        {/* <td className="text-center p-4">
          {notification.asesor.visto ? (
            <div className="estado-amarillo whitespace-nowrap">Sin ver</div>
          ) : (
            <div className="estado-verde whitespace-nowrap">Visto</div>
          )}
        </td> */}

        <td className="text-center p-4">
          {
            <a
              className="btn-texto"
              onClick={() => checkedNotification(notification)}
            >
              {' '}
              Ver{' '}
            </a>
          }{' '}
        </td>
      </tr>
    </tbody>
  )
}

export const formatDate = date => new Date(date).toLocaleDateString('es', dateOptions)

export const dateOptions = {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}
