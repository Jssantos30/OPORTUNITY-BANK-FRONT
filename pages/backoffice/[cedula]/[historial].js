import { useRouter } from 'next/router'
import React from 'react'
import TableHistory from '../../../components/Asesores/TableHistory'
import TableRowHistory from '../../../components/Asesores/TableHistory/TableRowHistory'
import Title from '../../../components/Title'
import LayoutAsesor from '../../../Layout/LayoutAsesor'
import { protectRouteAndRedirect } from '../../../utils/protect-route.server'
import { getData } from '../../../utils/getData'
import ErrorPage from '../../_error'
import TitleBackoffice from '../../../components/TitleBackoffice'

const Historial = ({ sid, cedula }) => {
  const [loading, setLoading] = React.useState(true)
  const [onErrGet, setOnErrGet] = React.useState(null)
  const [getHistorialSolicitudes, setGetHistorialSolicitudes] = React.useState([])
  const [attr, setAttr] = React.useState({
    nombres: '',
    apellidos: '',
    rol: '',
    credito: '',
  })

  const { push } = useRouter()

  React.useEffect(() => {
    async function run() {
      setLoading(true)
      const url_get_solicitud = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/usuario/${cedula}`
      const { response } = await getData(url_get_solicitud)

      let dataSolicitud = await response.json()

      if (response.status === 401) {
        setLoading(false)
        setOnErrGet('Hubo un error al consultar la información del crédito, por favor intenta nuevamente')
      }

      if (response.status === 404) {
        setOnErrGet(null)
        setLoading(false)
      }

      if (response.status === 200) {
        if (!dataSolicitud.length) setGetHistorialSolicitudes([])
        else {
          const data = dataSolicitud.filter(sol => sol.id === sid)
          let nombres =
            data[0]?.codeudor?.persona.num_identificacion === Number(cedula)
              ? `${data[0]?.codeudor?.persona.primer_nombre} ${
                  data[0]?.codeudor?.persona.segundo_nombre || ''
                }`
              : data[0]?.deudor?.persona.num_identificacion === Number(cedula)
              ? `${data[0]?.deudor?.persona.primer_nombre} ${
                  data[0]?.deudor?.persona.segundo_nombre || ''
                }`
              : ''

          let apellidos =
            data[0]?.codeudor?.persona.num_identificacion === Number(cedula)
              ? `${data[0]?.codeudor?.persona.primer_apellido} ${
                  data[0]?.codeudor?.persona.segundo_apellido || ''
                }`
              : data[0]?.deudor?.persona.num_identificacion === Number(cedula)
              ? `${data[0]?.deudor?.persona.primer_apellido} ${
                  data[0]?.deudor?.persona.segundo_apellido || ''
                }`
              : ''

          let rol =
            data[0]?.codeudor?.persona.num_identificacion === Number(cedula)
              ? `${data[0]?.codeudor?.tipo}`
              : data[0]?.deudor?.persona.num_identificacion === Number(cedula)
              ? `${data[0]?.deudor?.tipo}`
              : ''

          let credito = data[0]?.tipo

          setAttr(prev => ({ ...prev, nombres, apellidos, rol, credito }))
          setGetHistorialSolicitudes(data)
        }
        setLoading(false)
        setOnErrGet(null)
      }
    }
    run()
  }, [cedula, push, sid])

  return (
    <LayoutAsesor>
      <div>
        <TitleBackoffice>Historial</TitleBackoffice>

        {loading ? (
          <div className='flex flex-nowrap flex-row items-center'>
          <div className='h-16 flex items-center'>Cargando ...</div>
          <div className="spinner_cont items-center">
            <span className="material spinner" />
          </div>
        </div>
        ) : onErrGet ? (
          <ErrorPage message={onErrGet} />
        ) : (
          <React.Fragment>
            {getHistorialSolicitudes.length > 0 ? (
              <><div className='card-custom'>
                <TableHistory>
                  {getHistorialSolicitudes[0]?.estado_solicitud
                    .map((sol, index) => {
                      return (
                        <TableRowHistory
                          key={index}
                          cedula={cedula}
                          nombres={attr?.nombres}
                          apellidos={attr?.apellidos}
                          rol={attr?.rol}
                          credito={attr?.credito}
                          fecha={sol.fecha_actualizacion}
                          estado_solicitud={sol}
                        />
                      )
                    })
                    .reverse()}
                </TableHistory>
                </div>
              </>
            ) : (
              <div className='mensaje-error'>No hay historial para mostrar, intenta más tarde</div>
            )}
          </React.Fragment>
        )}
      </div>
    </LayoutAsesor>
  )
}

export default Historial

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo
  const { cedula } = context.params
  const { sid } = context.query

  return {
    props: { sid, cedula },
  }
}
