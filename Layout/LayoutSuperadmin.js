import React from 'react'
import Btn from '../components/Asesores/Btn'

const LayoutSuperAdmin = ({ children }) => {
  return (
    <section className="bg-app">
      <div className="wrapper-backoffice flex flex-col mx-auto my-10 py-14 px-10 justify-center md:flex-row">
        <div className="max-w-1/5 border-menu min-h-full px-0 py-5 bg-white">
          <Btn 
            href="/backoffice"
            name="Solicitudes de crédito"
          />
          <Btn
            href="/backoffice/roles"
            name="Roles"
          />
          <Btn
            href="/backoffice/configuracion-interes"
            name="Configuración interés"
          />
          <Btn
            href="/switch"
            name="Crear solicitud"
          />
          <Btn
            href="/backoffice/creditos-usuario"
            name="Créditos usuario"
          />
          <Btn
            href="/backoffice/documentos"
            name="Documentos"
          />
        </div>
        <div className="md:w-4/5 pr-4 pl-4 bg-app">
          {/* <small className="font-semibold hover:text-blue-500">
            <Link href="/backoffice">
              <a>{`> Backoffice`}</a>
            </Link>
            <h2>Bienvenido superadmin.</h2>
  </small> */}
          {children}
        </div>
      </div>
    </section>
  )
}

export default LayoutSuperAdmin
