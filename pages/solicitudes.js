import * as React from 'react'
import { ProtectedRoute } from '../components/protected-route'
import { customFetch, RequestTypes } from '../utils/custom-fetch'
import Link from 'next/link'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'
const INFO_CLASS =
  'mensaje-info mb-4 px-4 py-3 rounded relative'

// const ERROR_CLASS =
//   'mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
// const INFO_CLASS =
//   'mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative'

function Solicitudes() {
  const [usuario, setUsuario] = React.useState({
    cedula: undefined,
    loading: true,
  })
  const [infoSol, setInfoSol] = React.useState([])
  const [error, setError] = React.useState('')
  const [info, setInfo] = React.useState('')

  React.useEffect(() => {
    if (localStorage) {
      setUsuario({
        cedula: localStorage.getItem('usuario'),
        loading: false,
      })
    } else {
      setUsuario({
        ...usuario,
        loading: false,
      })
    }
  }, [])

  React.useEffect(() => {
    if (usuario.cedula) {
      getSolByID(`credito/solicitud/usuario/${usuario.cedula}`)
    }
  }, [usuario.cedula])

  async function getSolByID(url) {
    try {
      const fetchData = await customFetch(url, { type: RequestTypes.credit })

      if (fetchData.status === 200) {
        const data = await fetchData.json()
        setInfoSol(data)
        setInfo('La información que verás a continuación corresponde a una solicitud que se encuentra en proceso ')
      } else {
        setInfoSol([])
        setError('No se encontraron solicitudes activas, intente más tarde ')
        setTimeout(() => {
          setError('')
        }, 5000)
      }
    } catch (err) {
      setInfoSol([])
      setError('No se encontraron solicitudes activas, intente más tarde ')
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  return (
    <>
      <section className="w-3/6 mx-auto">
        <ProtectedRoute>
          {error !== '' ? (<><br></br>
            <div className={ERROR_CLASS}>{error}</div>
          </>
          ) : null}
          {info !== '' ? (<><br></br>
            <div className={INFO_CLASS}>{info}</div>
            </>) : null}

          {usuario.loading ? (
            <div>Loading</div>
          ) : usuario.cedula ? (

            <div>
              {infoSol.length > 0 ? (
                <>
                  <h1 className=" my-4"> Estas son las solicitudes que tiene el usuario: </h1>
                  <table className="table-auto mx-auto">
                    <thead>
                      <tr>
                        <td> Numero </td>
                        <td> Solicitud </td>
                        <td> Tipo </td>
                        <td> Estado </td>
                        <td> Observaciones </td>

                      </tr>
                    </thead>
                    <tbody>
                      {infoSol.map(({ id, tipo, estado_solicitud }, index) => {
                        const estado = estado_solicitud.filter(({ actual }) => actual === true)
                        const observaciones = estado_solicitud.filter(({ actual }) => actual === true)
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{id}</td>
                            <td>{tipo}</td>
                            <td>{estado[0].estado} </td>
                            <td> {observaciones[0].observaciones} </td> 
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </>

              ) : <h1 className=" my-4 text-center">
                <div className='mb-4 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative'>
                  Ingresa a la Sección de Accesos rápidos e ingresa una Solicitud
                </div>
                <Link href="/switch">
                  <a className="bg-color_primary_2_ligth w-4/5 mx-auto rounded-full p-4 my-10 text-center text-white font-semibold px-8 md:w-36 md:mx-0">
                    Solicita un crédito
                  </a>
                </Link>
              </h1>}
            </div>
          ) : (
            'Hubo un error'
          )}


        </ProtectedRoute>
      </section>
      <style jsx>{`
        td {
          border: solid thin black;
          text-align: center;
          padding: 0.5rem 2rem;
        }
      `}</style>
    </>
  )
}

export default Solicitudes
