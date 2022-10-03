import * as React from 'react'
import { useRouter } from 'next/router'
import { STATUS, useAuthContext } from '../auth-context'

export const ProtectedRouteAdmin = ({ children, preventRedirect }) => {
  const { push, route } = useRouter()
  const { isAuth, status, rol } = useAuthContext()

  React.useEffect(() => {
    if (!isAuth && !preventRedirect && status === STATUS.resolved) push('/login')
  }, [isAuth, preventRedirect, push, status])

  React.useEffect(() => {
    if (route.includes('backoffice/roles-admin') && !['ADMINISTRADOR'].includes(rol)) {
      push('/backoffice')
    }
  }, [rol, route, isAuth])

  return <>{children}</>
}
