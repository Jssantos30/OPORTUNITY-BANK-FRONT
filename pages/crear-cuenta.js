import React from 'react'
import { RegistroUsuario } from '../components/Login/index'

function CrearCuenta() {
  return (
    <main>
      <img src={`${process.env.NEXT_BASE_PATH}/LogoBanco.svg`} alt="banco_de_las_opotunidades" className="mx-auto mt-6 mb-4" />
      <RegistroUsuario />
    </main>
  )
}

export default CrearCuenta
