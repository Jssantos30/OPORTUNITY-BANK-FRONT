import * as React from 'react'
import Link from 'next/link'
import useDetectClickOut from '../Hooks/useDetectClickOut'
import { useRouter } from 'next/router'
import { customFetch, RequestTypes } from '../utils/custom-fetch'
import { useAuthContext } from '../auth-context'
import { Notification } from '../components/notification'

const Navbar = () => {
  const { logout, isAuth, rol, usuario } = useAuthContext()
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false)
  const router = useRouter()
  const [usuarioAuth, setusuarioAuth] = React.useState(null)

  async function getUserInfo() {
    const responseFetch = await customFetch(`roles/listar-usuario-rol/${usuario}`, {
      type: RequestTypes.auth
    })

    let dataUser = null
    if (responseFetch.status == 200) {
      dataUser = await responseFetch.json()
    }
    setusuarioAuth(dataUser)
  }

  React.useEffect((usuarioAuth) => {
    if (isAuth && usuario && usuarioAuth==null) {
      getUserInfo()
    }
  },[isAuth,usuario])


  return (
    <header
      className={`${!(/backoffice/.test(router.route) || /switch/.test(router.route))
          ? 'bg-color_primary_2_transparent'
          : 'bg-white'
        }  flex flex-col text-sm md:text-xs lg:text-sm fixed w-full z-50`}
    >
      <div className="h-16 flex items-center" style={{ backgroundColor: '#0067D0' }}>
        <div className="main-wrapper w-full flex items-center justify-between">
          <img src={`${process.env.NEXT_BASE_PATH}/Logo-GOV.svg`} alt="Logo-Gov" />
          <img src={`${process.env.NEXT_BASE_PATH}/Logo-Alcaldia-franja.svg`} alt="Logo-alcaldía" className="mr-4" />
        </div>
      </div>

      {!['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol) ||
        !(/backoffice/.test(router.route) || /switch/.test(router.route)) ? (
        <div className="main-wrapper h-20 flex items-center justify-between bg-color_primary_2_transparent">
          <div className="flex justify-between px-4 w-full md:w-auto">
            <Link href="/">
              <a>
                <img src={`${process.env.NEXT_BASE_PATH}/logo-alcaldia.svg`} alt="Logo-alcaldía" />
              </a>
            </Link>

            <a className="flex" ref={triggerRef}>
              <img src={`${process.env.NEXT_BASE_PATH}/menu-icon.svg`} alt="menu-icon" className="md:hidden" />
            </a>
          </div>

          <nav
            ref={nodeRef}
            className={`${!show && 'hidden'} items-center md:pr-4 md:flex md:w-4/5 md:h-full`}
            onClick={() => setShow(false)}
          >
            <Link href="/creditos">
              <a className="mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto whitespace-nowrap">
                Líneas de crédito
              </a>
            </Link>

            <Link href="/programas">
              <a className="mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto">
                Programas
              </a>
            </Link>

            <Link href="/oportunidades">
              <a className="mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto">
                +Oportunidades
              </a>
            </Link>

            <Link href="/contacto">
              <a className="mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto">
                Contáctanos
              </a>
            </Link>

            <Link href="https://mercurio.medellin.gov.co/mercurio/inicialPqr.jsp">
              <a
                className="mx-4 font-semibold py-4 border-t-2 w-full text-center border-white md:border-t-0 md:w-auto"
                target="_blank"
              >
                PQRS
              </a>
            </Link>

            {isAuth ? (
              ['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol) ? (
                <Link href="/backoffice">
                  <a className="w-full md:w-44 text-center py-4 border-white md:border-color_primary_1 font-semibold md:border md:py-2 md:px-1 md:bg-white md:rounded-full md:mr-4 md:text-color_primary_1 border-t-2">
                    Backoffice
                  </a>
                </Link>
              ) : (
                <Link href="/solicitudes">
                  <a className="w-full md:w-44 text-center py-4 border-white md:border-color_primary_1 font-semibold md:border md:py-2 md:px-1 md:bg-white md:rounded-full md:mr-4 md:text-color_primary_1 border-t-2">
                    Mis solicitudes
                  </a>
                </Link>
              )
            ) : (

              <>
                <Link href="/login">
                  <a className="w-full md:w-44 text-center py-4 border-white md:border-color_primary_1 font-semibold md:border md:py-2 md:px-1 md:bg-white md:rounded-full md:mr-4 md:text-color_primary_1 border-t-2 whitespace-nowrap">
                    Ingreso
                  </a>
                </Link>
                <Link href="/crear-cuenta">
                  <a className="w-full md:w-44 text-center py-4 md:border border-white bg-color_primary_1 text-white font-semibold  md:py-2 md:px-1 md:rounded-full border-t-2 whitespace-nowrap">
                    Registro
                  </a>
                </Link>
              </>
            )}

            {isAuth ? (
              <p
                className="px-2"
                style={{
                  cursor: 'pointer',
                }}
                onClick={() => logout()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <g>
                    <path d="M0,0h24v24H0V0z" fill="none" />
                  </g>
                  <g>
                    <g>
                      <path d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z" />
                      <path d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z" />
                    </g>
                  </g>
                </svg>
              </p>
            ) : null}
          </nav>
        </div>
      ) : (
        <div className="main-wrapper px-4 md:px-2 h-20 flex justify-between items-center bg-white">
          
          <Link href="/" className="justify-start">
            <a>
              <img src={`${process.env.NEXT_BASE_PATH}/logo-alcaldia.svg`} alt="Logo-alcaldía" className="" />
            </a>
          </Link>

          {isAuth ? (<div className='flex justify-end items-center'>
            <p className=' mr-4'>Hola, <strong>
              {`${usuarioAuth?.nombres} ${usuarioAuth?.apellidos}`}
              </strong></p>
              <Notification />
            <p
              className="px-2"
              style={{
                cursor: 'pointer',
              }}
              onClick={() => logout()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <g>
                  <path d="M0,0h24v24H0V0z" fill="none" />
                </g>
                <g>
                  <g>
                    <path d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z" />
                    <path d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z" />
                  </g>
                </g>
              </svg>
            </p>
          </div>
          ) : null}
        </div>
      )}
    </header>
  )
}

export default Navbar

