import { useRouter } from 'next/router'
import React from 'react'
import { getAdminName } from '../../utils/getAdminName'
import { fetchData } from '../../utils/fetchData'

export const CardNotification = ({ notification, ctxDataUsuarios = [] }) => {
  const router = useRouter()

  const clickNotification = async notification => {
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
    <div
      className=" bg-white border  my-2 p-2 px-4 flex hover:cursor-pointer hover:bg-blue-200"
      onClick={() => clickNotification(notification)}
    >
      <div>
        <label className="font-semibold text-sm">
          Admin {getAdminName(ctxDataUsuarios, notification)} te asignó una nueva solicitud de
          crédito
        </label>{' '}
        <br />
        <label>solicitud:</label> <small>{notification.id}</small>
        <br />
        <label>Nombre: </label>
        <small>{`${notification.deudor.persona.primer_nombre} ${notification.deudor.persona.primer_apellido}`}</small>
        <br />
        <label>cc:</label> <small>{notification.deudor.persona.num_identificacion}</small>{' '}
        <br />
        <p
          className="text-xs font-semibold hover:underline hover:text-blue-500 hover:cursor:pointer"
          onClick={() => clickNotification(notification)}
        >
          {' '}
          Haz clic aquí para ir a verlo{' '}
        </p>
      </div>
      <div className="flex items-center">
        {notification.asesor.visto ? (
          <div className="w-4 h-4 rounded-full bg-blue-400"> </div>
        ) : null}
      </div>
    </div>
  )
}
