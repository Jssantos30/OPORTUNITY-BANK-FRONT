import React from 'react'
import { useAuthContext } from '../auth-context'
import Footer from '../components/Footer'
import Navbar from '../components/NavBar'
import CallToAction from '../components/CallToAction'
import { useRouter } from 'next/router'



const Layout = ({ children }) => {

  const { rol } = useAuthContext()
  const { route } = useRouter()
  return (
    <div>
      {!route.includes('backoffice/reporte') ? <Navbar /> : null}
      {!route.includes('backoffice') ? <CallToAction /> : null}
      <main className="container-page">{children}</main>
      {!route.includes('backoffice') && !['ASESOR', 'ADMINISTRADOR', 'SUPERADMINISTRADOR'].includes(rol) ? <Footer /> : null}
    </div>
  )
}

export default Layout
