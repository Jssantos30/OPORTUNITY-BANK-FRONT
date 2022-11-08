import React from 'react'
import Btn from '../components/Asesores/Btn'
import Link from 'next/link'
import Title from '../components/Title'
import { Notification } from '../components/notification'

const LayoutAsesor = ({ children }) => {
  return (
    <section className="bg-app">
      {/* <div>
        <Title> Asesor </Title>
      </div> */}
      <div className="wrapper-backoffice flex flex-col mx-auto my-4 justify-center md:flex-row">
        <div className="max-w-1/5 min-h-full px-0 bg-white">
          <Btn
            href="/backoffice"
            name="Solicitudes de crédito"
            icon_url={`${process.env.NEXT_BASE_PATH}/icon-solicitud-backoffice.svg`}
            icon_white_url={`${process.env.NEXT_BASE_PATH}/icon-solicitud-backoffice-white.svg`}
          />
          {/* <Btn href="#" name="Administrador" icon_url={`${process.env.NEXT_BASE_PATH}/icon-gestor-backoffice.svg`} /> */}
          <Btn
            href="/switch"
            name="Crear solicitud"
            icon_url={`${process.env.NEXT_BASE_PATH}/icon-config-backoffice.svg`}
            icon_white_url={`${process.env.NEXT_BASE_PATH}/icon-config-backoffice-white.svg`}
          />

          <Btn
            href="/backoffice/solicitudes-asignadas"
            name="Solicitudes Asignadas"
            icon_url={`${process.env.NEXT_BASE_PATH}/icon-config-backoffice.svg`}
            icon_white_url={`${process.env.NEXT_BASE_PATH}/icon-config-backoffice-white.svg`}
          />
          <Btn
            href="/backoffice/creditos-usuario"
            name="Créditos usuario"
            icon_url={`${process.env.NEXT_BASE_PATH}/icon-solicitud-backoffice.svg`}
            icon_white_url={`${process.env.NEXT_BASE_PATH}/icon-solicitud-backoffice-white.svg`}
          />

        </div>
        <div className="md:w-4/5 pl-4 pr-4 bg-app">
          <nav className="flex justify-end bg-app items-center sr-only">
            {/* <small className="font-semibold w-max">
              <Link href="/backoffice">
                <a className="hover:text-blue-500">{`>Backoffice`}</a>
              </Link>
            </small> */}
            {/* <Notification /> */}
          </nav>
          {children}
        </div>
      </div>
    </section>
  )
}

export default LayoutAsesor
