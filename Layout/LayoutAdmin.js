import React from 'react'
import Btn from '../components/Asesores/Btn'
import Link from 'next/link'
import Title from '../components/Title'

const LayoutAdmin = ({ children }) => {
  return (
    <section className="bg-app">
      <Title> Admin </Title>
      <div className="wrapper-backoffice flex flex-col mx-auto my-4 justify-center md:flex-row">
        <div className="max-w-1/5 min-h-full px-0 bg-white">
          <Btn
            href="/backoffice"
            name="Solicitudes de crédito"          
          />
          <Btn
            href="/backoffice/roles-admin"
            name="Roles"
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
        <div className="md:w-4/5 p-4 bg-app">
        <nav className="flex justify-between bg-app items-center">
        <small
            className="font-semibold hover:text-blu
          e-500"
          >
            <Link href="/backoffice">
              <a>{`> Backoffice`}</a>
            </Link>
            <h2>Bienvenido</h2>
          </small>
        
          </nav>
          
          {children}
        </div>
      </div>
    </section>
  )
}

export default LayoutAdmin
