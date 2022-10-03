import * as React from 'react'
import Link from 'next/link'
import { useUsuarioContext } from '../../pages/backoffice'
import { useNotificationContext } from '../../notification-context'
import { CardNotification } from './CardNotification'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'

export const Notification = () => {
  const { getDatabyAsesor } = useNotificationContext()
  const ctxDataUsuarios = useUsuarioContext()
  const [userAsesor, setUserAsesor] = React.useState([])
  const [openBoxNotification, setOpenBoxNotification] = React.useState(false)
  const ref = React.useRef()

  React.useEffect(() => {
    async function run() {
      try {
        const response = await customFetch(`roles/listar-usuario-rol`, {
          type: RequestTypes.auth,
        })

        if (response.status === 200) {
          const Asesores = await response.json()
          setUserAsesor(Asesores)
        } else {
          setUserAsesor([])
        }
      } catch (err) {
        setUserAsesor([])
      }
    }
    run()
  }, [])

  React.useEffect(() => {
    const checkIfClickedOutside = e => {
      if (openBoxNotification && ref.current && !ref.current.contains(e.target)) {
        setOpenBoxNotification(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [openBoxNotification])

  const handleBoxNotification = () => {
    setOpenBoxNotification(!openBoxNotification)
  }

  return (
    <div className="" ref={ref}>
      <div onClick={handleBoxNotification}>
        {getDatabyAsesor.length === 0 ? null : (
          <div className="flex flex-row items-center">
            <span className='campanita'>

              <svg xmlns="http://www.w3.org/2000/svg" id="_001-campana" data-name=" 001-campana" width="24.833" height="29.838" viewBox="0 0 24.833 29.838">
                <path id="Trazado_1587" data-name="Trazado 1587" d="M5358.44,109.327a8.316,8.316,0,0,1-2.953-6.364V99.5a8.7,8.7,0,0,0-7.45-8.593V89.568a1.242,1.242,0,1,0-2.483-.073c0,.024,0,.049,0,.073v1.341A8.7,8.7,0,0,0,5338.1,99.5v3.462a8.325,8.325,0,0,1-2.965,6.373,2.172,2.172,0,0,0,1.413,3.823h20.489a2.173,2.173,0,0,0,1.4-3.831Z" transform="translate(-5334.377 -88.289)" fill="#FF8900" />
                <path id="Trazado_1588" data-name="Trazado 1588" d="M5352.028,135.532a4.664,4.664,0,0,0,4.564-3.725h-9.125A4.663,4.663,0,0,0,5352.028,135.532Z" transform="translate(-5339.613 -105.694)" fill="#FF8900" />
              </svg>
            </span>
            <span className='label-campanita'>


              {getDatabyAsesor.filter(({ asesor }) => asesor.revisado === false).length}+

            </span>
          </div>

        )}
      </div>

      {openBoxNotification ? (
        getDatabyAsesor.length > 0 ? (
          <div className='fixed inset-0 bg-modal-info justify-center z-50'>
            <div className='flex justify-center'>
            <div className="lg:w-1/2 modal-card-custom">
              <div className="header-card-custom">Notificaciones
              </div>

              <div className='body-card-custom'>
                <div className='modal-content'>
                  {getDatabyAsesor.map((notification, index) => {
                    return (
                      <React.Fragment key={index}>
                        <CardNotification
                          notification={notification}
                          ctxDataUsuarios={userAsesor || ctxDataUsuarios}
                        />
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
              <div className="footer-card-modal-sm" >
                <div className='flex justify-end'>
                  <button className="btn-texto-gris" onClick={handleBoxNotification}>Cerrar</button>


                  <Link href="/backoffice/solicitudes-asignadas">
                    <button className="btn-secundario">Ver todo</button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          </div>
        ) : (
          <div className="w-1/2 rounded-lg  max-h-60  text-center absolute right-24 z-30 bg-white border  my-2 p-2 px-4">
            {' '}
            No hay notificaciones para mostrar. <br /> intenta más tarde{' '}
          </div>
        )
      ) : null}
    </div>
  )
}
