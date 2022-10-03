import * as React from 'react'
import { useRouter } from 'next/router'
import { STATUS, useAuthContext } from '../auth-context'

export const ProtectedRoute = ({ children, preventRedirect }) => {
  const { push, route } = useRouter()
  const { isAuth, status, rol, usuario } = useAuthContext()

  React.useEffect(() => {
    if (!isAuth && !preventRedirect && status === STATUS.resolved) push('/login')
  }, [isAuth, preventRedirect, push, status])

  React.useEffect(() => {
    if (
      status === STATUS.resolved &&
      route.includes('backoffice') &&
      !['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol)
    ) {
      push('/')
    }
  }, [push, rol, route, status])

  if (!usuario || !isAuth) return <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> 

  return <>{children}</>
}
