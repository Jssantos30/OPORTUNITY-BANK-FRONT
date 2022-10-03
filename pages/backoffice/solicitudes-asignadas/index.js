import React from 'react'
import { RowNotification } from '../../../components/notification/RowNotification'
import TableHead from '../../../components/notification/TableHead'
import TitleBackoffice from '../../../components/TitleBackoffice'
import LayoutAsesor from '../../../Layout/LayoutAsesor'
import { useNotificationContext } from '../../../notification-context'
import { customFetch, RequestTypes } from '../../../utils/custom-fetch'
import { protectRouteAndRedirect } from '../../../utils/protect-route.server'

function SolicitudesAsignadas({ usuarios }) {
  const { getDatabyAsesor } = useNotificationContext()

  return (
    <LayoutAsesor>
      <TitleBackoffice>Solicitudes asignadas</TitleBackoffice>
      <div className='card-custom'>
      <div className='header-card-custom'>Lista de solicitudes</div>  
      <div className='body-card-custom'>
      {getDatabyAsesor.length > 0 ? (
        <div className="">
          <TableHead>
            {getDatabyAsesor
              .map((notification, index) => {
                return (
                  <React.Fragment key={index}>
                    <RowNotification
                      notification={notification}
                      ctxDataUsuarios={usuarios || []}
                    />
                  </React.Fragment>
                )
              })
              .reverse()}
          </TableHead>
        </div>
      ) : (
        <div className="mensaje-error">
          {' '}
          No hay notificaciones para mostrar. Intenta más tarde{' '}
        </div>
      )}
      </div>
      </div>
    </LayoutAsesor>
  )
}

export default SolicitudesAsignadas

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo

  const response = await customFetch('roles/listar-usuario-rol', {
    type: RequestTypes.auth,
    headers: { Authorization: `Bearer ${sessionInfo.token}` },
  })
  let usuarios = undefined

  if (!response) {
    usuarios = undefined
  } else {
    usuarios = await response.json()
  }

  return { props: { usuarios } }
}
