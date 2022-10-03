import * as React from 'react'
import { useAuthContext } from './auth-context'
import { customFetch, RequestTypes } from './utils/custom-fetch'

const MINUTES = 60000
export const NotificationProvider = ({ children }) => {
  const [getDatabyAsesor, setDataByAsesor] = React.useState([])
  const [NumberNotification, setNumberNotification] = React.useState(null)
  const { usuario } = useAuthContext()

  const doRequest = React.useCallback(async () => {
    if(localStorage.getItem('usuario')){
      try {
        const response = await customFetch(`credito/solicitudes?asesor=${usuario}`, {
          type: RequestTypes.credit,
        })

        if (response.status === 200) {
          const data = await response.json()
          const sortedApplication = data.sort(
            (a, b) => b.asesor.fecha_asignacion - a.asesor.fecha_asignacion,
          )

          setDataByAsesor(sortedApplication)
        } else {
          setDataByAsesor([])
        }
      } catch (error) {}
    }
  }, [usuario])

  React.useEffect(() => {
    doRequest()
    const interval = setInterval(async () => {
      await doRequest()
    }, MINUTES)

    return () => clearInterval(interval)
  }, [doRequest])

  return (
    <notificationContext.Provider
      value={{
        getDatabyAsesor,
        setDataByAsesor,
        NumberNotification,
        setNumberNotification,
        doRequest,
      }}
    >
      {children}
    </notificationContext.Provider>
  )
}

const notificationContext = React.createContext([])

export function useNotificationContext() {
  const ctx = React.useContext(notificationContext)
  return ctx
}
