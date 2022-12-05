import * as React from 'react'
import { useRouter } from 'next/router'
import ReporteDeudor from '../../../components/Print/FormularioDeudor'
import ReporteCodeudor from '../../../components/Print/FormularioCodeudor'
import Link from 'next/link'
import { protectRouteAndRedirect } from '../../../utils/protect-route.server'
import { customFetch, RequestTypes } from '../../../utils/custom-fetch'

const SolicitudID = ({ personal }) => {
  const { query } = useRouter()
  const { rol } = query
  const [estadoCompletoSolicitud, setEstadoCompletoSolicitud] = React.useState({
    data: [],
    error: '',
    loading: true,
  })

  const handleDownload = async () => {
    window.print()
  }

  return (
    <div className="max-w-2xl mx-auto md:-mt-36 ">
      {rol.includes('DEUDOR') ? (
        <ReporteDeudor
          estadoCompletoSolicitud={estadoCompletoSolicitud}
          setEstadoCompletoSolicitud={setEstadoCompletoSolicitud}
          query={query}
          personal={personal}
        />
      ) : null}

      {rol.includes('CODEUDOR') ? (
        <ReporteCodeudor
          estadoCompletoSolicitud={estadoCompletoSolicitud}
          setEstadoCompletoSolicitud={setEstadoCompletoSolicitud}
          query={query}
          personal={personal}
        />
      ) : null}

      <div className="flex justify-center">
        <button
          onClick={handleDownload}
          className="border rounded-lg  p-3 my-3 bg-color_primary_2 text-white"
        >
          Descargar Informe
        </button>
      </div>
    </div>
  )
}

export default SolicitudID

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo
  const fetchData = await customFetch('roles/listar-usuario-rol', {
    type: RequestTypes.auth,
    headers: {
      Authorization: `Bearer ${sessionInfo.token}`,
      'Content-Type': 'application/json',
    },
  })
  const data = await fetchData.json()

  if (!data) {
    return { props: {} }
  }

  const personal = data.filter(USER => USER.rolID !== 1)
  return { props: { personal } }
}
