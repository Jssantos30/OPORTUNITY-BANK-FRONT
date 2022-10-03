import * as React from 'react'
import { useRouter } from 'next/router'
import { customFetch, RequestTypes } from './utils/custom-fetch'

const initialConfigFilter = { numberRegister: 10, numberPage: 0 }
export const AuthProvider = ({ children }) => {
  const { push } = useRouter()
  const [{ isAuth, status, mensaje, usuario, rol }, dispatch] = React.useReducer(reducer, {
    isAuth: false,
    status: STATUS.idle,
    mensaje: null,
    usuario: null,
    rol: null,
  })
  const [openModal, setOpenModal] = React.useState(false)
  const [numberRegister, setNumberRegister] = React.useState(10)
  const [numberPage, setNumberPage] = React.useState(0)
  const [configFilter, setConfigFilter] = React.useState(initialConfigFilter)
  const [NotFoundResult, setNotFoundResult] = React.useState('')

  React.useEffect(() => {
    async function checkAuth() {
      const res = await customFetch('auth/usuario', { type: RequestTypes.auth })

      if (res.ok) {
        const data = await res.json()
        dispatch({
          isAuth: true,
          status: STATUS.resolved,
          rol: data.rol,
          usuario: localStorage ? localStorage.getItem('usuario') : '',
        })
      } else {
        dispatch({
          isAuth: false,
          status: STATUS.resolved,
          rol: 'USUARIO',
          usuario: localStorage ? localStorage.getItem('usuario') : '',
        })
      }
    }
    checkAuth()
  }, [])

  const logout = React.useCallback(async () => {
    dispatch({ isAuth: false })
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('usuario')
    localStorage.removeItem('access_token')
    localStorage.removeItem('token_interno')
    
    await fetch(`${process.env.NEXT_BASE_PATH}/api/logout`)
    push('/login')
  }, [push])

  return (
    <authContext.Provider
      value={{
        isAuth,
        status,
        mensaje,
        usuario,
        rol,
        dispatch,
        logout,
        openModal,
        setOpenModal,
        numberRegister,
        setNumberRegister,
        numberPage,
        setNumberPage,
        configFilter,
        setConfigFilter,
        NotFoundResult,
        setNotFoundResult,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

const authContext = React.createContext({})

export function useAuthContext() {
  const ctx = React.useContext(authContext)
  return ctx
}

const reducer = (curr, updates) => ({ ...curr, ...updates })

export const STATUS = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
}

export const ACTION = {
  REGISTRO_EXITOSO: 'REGISTRO EXITOSO',
  REGISTRO_ERROR: 'REGISTRO ERROR',
  OBTENER_USUARIO: 'OBTENER USUARIO',
  LOGIN_EXITOSO: 'LOGIN_EXITOSO',
  LOGIN_ERROR: 'LOGIN ERROR',
  ACTUALIZAR_CONTRASENA_EXITOSA: 'ACTUALIZAR CONTRASEÑA EXITOSA',
  ACTUALIZAR_CONTRASENA_ERROR: 'ACTUALIZAR CONTRASEÑA FALLÓ',
  CERRAR_SESION: 'CERRAR SESION',
}
