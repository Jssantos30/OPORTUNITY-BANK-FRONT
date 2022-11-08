import * as React from 'react'
import Link from 'next/link'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import TextInput from '../components/Forms/TextInput'
import { useRouter } from 'next/router'
import { STATUS, useAuthContext } from '../auth-context'
import routeRol from '../utils/routeRol'
import Image from 'next/image'
import { customFetch, RequestTypes } from '../utils/custom-fetch'
import { preventOnWheelChange } from '../utils/helpers'

const classInput = `w-full h-12 px-4 py-2 my-1 text-base border border-color_gray_5 placeholder-color_gray_5 rounded-md`
const SUCCESS_CLASS =
  'mensaje-exito mb-4 px-4 py-3 rounded relative'
const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

const INITIAL_LOGIN_FORM = {
  usuario: '',
  contra: '',
}

export default function Login() {
  const { push } = useRouter()
  const { dispatch } = useAuthContext()
  const [message, setMessage] = React.useState('')

  async function handleSubmit(userInfo) {
    try {
      const res = await customFetch('auth/autenticacion', {
        type: RequestTypes.auth,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          usuario: Number(userInfo.usuario),
          contra: userInfo.contra,
        }),
      })

      const resData = await res.json()

      if (res.status === 400) {
        setMessage(
          `Hubo un error, ${resData.message}` ||
            'Hubo un error al iniciar sesión, por favor intenta nuevamente',
        )
        dispatch({ isAuth: false })
        setTimeout(() => {
          setMessage('')
        }, 10000)
      }

      if (res.status === 403) {
        localStorage.setItem('usuario', userInfo.usuario)
        dispatch({ isAuth: false })
        setMessage(`${resData.message}`)
        setTimeout(() => {
          push('/cambiar-contrasena')
        }, 3000)
      }

      if (res.status === 201) {
        const { access_token, data, refreshToken } = resData
        localStorage.setItem('usuario', userInfo.usuario)
        localStorage.setItem('access_token', access_token)
        localStorage.setItem('refresh_token', refreshToken)
        await fetch(`${process.env.NEXT_BASE_PATH}/api/login`, {
          method: 'POST',
          body: JSON.stringify({ token: access_token }),
          headers: { 'Content-Type': 'application/json' },
        })

        dispatch({
          rol: data.rol,
          isAuth: true,
          status: STATUS.resolved,
          usuario: Number(userInfo.usuario),
        })

        const rol = data.rol
        const redirect = routeRol(rol)
        push(redirect)
      }
    } catch (error) {
      setMessage('Hubo un error al iniciar sesión, por favor intenta nuevamente')
    }
  }

  return (
    <div className="my-10">
      <main className="max-w-5xl mx-auto min-h-full flex flex-wrap justify-center">
        <div className="relative w-2/5 h-6/12 object-cover">
          <Image className="object-cover" src={`${process.env.NEXT_BASE_PATH}/login.png`} layout="fill" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-4/5 mx-auto">
            <img
              src={`${process.env.NEXT_BASE_PATH}/logo_armas.svg`} 
              alt="banco_de_las_opotunidades"
              className="mx-auto my-4 "
            />
            <h1 className="text-xl text-center font-medium mb-4 titleLogin">Ingrese sus datos para iniciar sesión</h1>

            <Formik
              initialValues={INITIAL_LOGIN_FORM}
              validationSchema={Yup.object({
                usuario: Yup.string().required('* Campo obligatorio'),
                contra: Yup.string()
                  .required('* Campo obligatorio')
                  .min(6, 'La contraseña debe tener al menos 6 caracteres'),
              })}
              onSubmit={handleSubmit}
            >
              <Form className="flex flex-col">
                <TextInput
                  label="Número de identificación"
                  key="usuario"
                  name="usuario"
                  type="number"
                  onWheel={preventOnWheelChange}
                  className={classInput}
                  placeholder="Escribe aquí el número de tu documento"
                />

                <TextInput
                  label="Digite su contraseña"
                  key="contra"
                  type="password"
                  name="contra"
                  placeholder="Escribe aquí tu contraseña"
                  className={classInput}
                />

                <label className="flex gap-2 font-section text-sm mt-4">
                  <input className="w-4 h-4 mr-1 mb-1 mt-1 inline-block text-center" type="checkbox" />
                  <span className="inline-block font-medium text-left">Recuérdame</span>
                </label>

                {message !== '' && (
                  <div className={message.includes('error') ? ERROR_CLASS : SUCCESS_CLASS}>
                    {message}{' '}
                  </div>
                )}

                <div className='flex justify-between mt-10 mb-5 text-sm'>
                  <Link href="/crear-cuenta">
                    <a className="flex items-center font-medium text-color_primary_2_ligth text-center rounded-full border-2 border-color_primary_2_ligth px-9 buttonAccesLink">
                      Registrarse
                    </a>
                  </Link>

                  <button
                    type="submit"
                    className= "font-medium bg-color_primary_2_ligth text-center rounded-full text-white px-12 py-3 buttonAccesLogin"
                  >
                    Ingresar
                  </button>
                </div>
                <hr />
                <div className='flex items-center mt-5 justify-center recoverPassword'>
                  <p className='text-gray-400 mr-2'>¿Olvidó su contraseña?</p>
                  <Link href="/recuperar">
                    <a className="text-color_primary_2_ligth">
                      Recupérala AQUÍ
                    </a>
                  </Link>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </main>
    </div>
  )
}
