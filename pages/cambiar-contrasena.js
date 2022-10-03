import * as React from 'react'

import { useAuthContext } from '../auth-context'
import { fetchData } from '../utils/fetchData'
import { useRouter } from 'next/router'

const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'
const classInput = `w-full h-12 px-4 py-2 my-1 text-base border border-color_gray_4 placeholder-color_gray_5 rounded-2xl`
const URL_CAMBIO_CONTRASENA = `${process.env.NEXT_PUBLIC_AUTHSERVICE_V1}auth/cambio-contra`

function CambiarContrasena() {
  const { dispatch, mensaje } = useAuthContext()
  const { push } = useRouter()

  const [password, setPassword] = React.useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [errorMessage, setErrorMessage] = React.useState('')
  const { currentPassword, newPassword, confirmPassword } = password

  const handleChange = ({ target }) => {
    setPassword({
      ...password,
      [target.name]: target.value,
    })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const dataUptadePassword = {
      usuario: Number(localStorage.getItem('usuario')),
      contra: currentPassword,
      nuevaContra: newPassword,
    }

    if (confirmPassword !== newPassword) {
      setErrorMessage('Hubo un error: Las contraseñas no coinciden')
      return
    }

    try {
      const { res } = await fetchData(URL_CAMBIO_CONTRASENA, dataUptadePassword, false)

      if (res.statusCode === 400) {
        setErrorMessage(`Hubo un error ${res.message}`)
        setTimeout(() => {
          setErrorMessage('')
        }, 10000)
      }

      if (res.statusCode === 404) {
        setErrorMessage(`Hubo un error ${res.message}` || 'Hubo un error ')
        setTimeout(() => {
          setErrorMessage('')
        }, 10000)
      }

      if (res.code === '200' && res.success === '1') {
        setErrorMessage(res.message)
        dispatch({ isAuth: false })
        localStorage.clear()
        setTimeout(() => {
          setErrorMessage('')
          push('/login')
        }, 3000)
      }
    } catch (error) {
      setErrorMessage('Hubo un error al cambiar la contraseña, por favor intenta nuevamente')
    }
  }

  return (
    <section className="main-wrapper pt-16 px-8">
      {mensaje ? (
        <div className="pb-8">
          Es tu primer inicio de sesión, debes cambiar la contraseña. Revisa el correo asociado
          con la contraseña preestablecida.
        </div>
      ) : null}
      <aside>
        <form onSubmit={handleSubmit}>
          <label>
            Contraseña actual
            <input
              type="password"
              autoComplete="off"
              onChange={handleChange}
              name="currentPassword"
              value={currentPassword}
              className={classInput}
              placeholder="Ingrese su contraseña actual"
            />
          </label>

          <label>
            Nueva contraseña
            <input
              type="password"
              autoComplete="off"
              onChange={handleChange}
              name="newPassword"
              value={newPassword}
              className={classInput}
              placeholder="Ingrese la nueva contraseña"
            />
          </label>

          <label>
            Confirma contraseña
            <input
              type="password"
              autoComplete="off"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
              className={classInput}
              placeholder="Ingrese la nueva contraseña"
            />
          </label>

          {errorMessage !== '' ? (
            <div className={errorMessage.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
              {errorMessage}
            </div>
          ) : null}

          <button
            type="submit"
            className="my-4 px-4 py-2 text-color_primary_2_ligth inline rounded-full hover:text-white mx-auto border-2 hover:bg-color_primary_2_ligth border-color_primary_2_ligth"
          >
            Cambiar
          </button>
        </form>
      </aside>
    </section>
  )
}

export default CambiarContrasena
