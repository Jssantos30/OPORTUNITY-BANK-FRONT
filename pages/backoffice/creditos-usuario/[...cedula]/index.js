import * as React from 'react'
import { useAuthContext } from '../../../../auth-context'
import { IndicadoresCoutas } from '../../../../components/HOC/IndicadoresCoutas'
import { IndicadoresOtros } from '../../../../components/HOC/IndicadoresOtros'
import { IndicadoresPrincipales } from '../../../../components/HOC/IndicadoresPrincipales'
import { IndicadoresTasas } from '../../../../components/HOC/IndicadoresTasas'
import { ProtectedRoute } from '../../../../components/protected-route'
import LayoutRol from '../../../../Layout/LayoutRol'
import Link from 'next/link'
import { protectRouteAndRedirect } from '../../../../utils/protect-route.server'
import { customFetch, RequestTypes } from '../../../../utils/custom-fetch'

function DashBoardSol({ data }) {
  const { rol } = useAuthContext()
  const [loadingDashBoard, setLoadingDashBoard] = React.useState(true)

  React.useEffect(() => {
    setLoadingDashBoard(true)
    if (rol) {
      setLoadingDashBoard(false)
      return
    }
    setLoadingDashBoard(false)
  }, [rol])

  function RenderLayout({ rol, children }) {
    return <LayoutRol rolUser={rol}>{children}</LayoutRol>
  }

  return (
    <ProtectedRoute>
      <RenderLayout rol={rol}>
        {loadingDashBoard ? (
          <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> 
        ) : data.length > 0 ? (
          
          <div className="flex flex-col">
            <div>
            <Link href="/backoffice/creditos-usuario">
              <a className="btn-secundario">
                volver
              </a>
            </Link>
            </div>
            {data.map(
              ({
                abono_total,
                cedula,
                cuota_anterior,
                cuotas_pendientes,
                dias_periodo_gracia,
                estado_cartera,
                estado_credito,
                fecha_desembolso,
                fecha_ultimo_pago,
                intereses_mora,
                monto_desembolsado,
                mora_de_1_a_30_dias,
                mora_de_31_a_60_dias,
                mora_de_61_a_90_dias,
                mora_mayor_a_90_dias,
                numero_cuotas,
                obligacion,
                origen_recurso,
                periodo_gracia,
                registro_activo,
                saldo_a_favor,
                saldo_capital,
                saldo_favor_terceros,
                saldo_mayo,
                saldo_total,
                tasa_interes_corriente,
                tasa_interes_mora,
              }) => {
                return (
                  
                  <div key={cedula} className="my-4 card-custom">
                    <div className='header-card-custom'>Detalle solicitud crédito</div>
                    <div className='body-card-custom'>
                    <IndicadoresPrincipales
                      cedula={cedula}
                      monto_desembolsado={monto_desembolsado}
                      fecha_desembolso={fecha_desembolso}
                      intereses_mora={intereses_mora}
                    />

                    <hr className="my-4 border-1" />
                    
                    <div className="md:grid md:grid-cols-3 gap-2">
                      <div className="md:grid md:col-start-1 md:col-span-2 justify-self-center">
                        <IndicadoresCoutas
                          tasa_interes_corriente={tasa_interes_corriente}
                          numero_cuotas={numero_cuotas}
                          cuotas_pendientes={cuotas_pendientes}
                          cuota_anterior={cuota_anterior}
                          fecha_ultimo_pago={fecha_ultimo_pago}
                          abono_total={abono_total}
                          saldo_a_favor={saldo_a_favor}
                          saldo_capital={saldo_capital}
                          saldo_favor_terceros={saldo_favor_terceros}
                          saldo_mayo={saldo_mayo}
                          saldo_total={saldo_total}
                        />
                      </div>

                      <div className="md:grid md:col-start-3 md:col-span-1">
                        <IndicadoresTasas
                          tasa_interes_mora={tasa_interes_mora}
                          mora_de_1_a_30_dias={mora_de_1_a_30_dias}
                          mora_de_31_a_60_dias={mora_de_31_a_60_dias}
                          mora_de_61_a_90_dias={mora_de_61_a_90_dias}
                          mora_mayor_a_90_dias={mora_mayor_a_90_dias}
                        />
                      </div>
                    </div>

                    <hr className="my-4 border-white" />

                    <IndicadoresOtros
                      dias_periodo_gracia={dias_periodo_gracia}
                      estado_cartera={estado_cartera}
                      estado_credito={estado_credito}
                      obligacion={obligacion}
                      origen_recurso={origen_recurso}
                      periodo_gracia={periodo_gracia}
                      registro_activo={registro_activo}
                    />
                    </div>
                  </div>
                )
              },
            )}
          </div>
        ) : (
          'No hay datos para mostrar'
        )}
      </RenderLayout>
    </ProtectedRoute>
  )
}

export default DashBoardSol

export async function getServerSideProps(context) {
  const sessionInfo = protectRouteAndRedirect(context.req, context.res)
  if (sessionInfo.redirect) return sessionInfo
  const [cedula] = context.query.cedula
  const fetchSolicitudesActivas = await customFetch(
    'creditos?estado=Activo&limite=20&indice=0',
    { type: RequestTypes.report, headers: { Authorization: `Bearer ${sessionInfo.token}` } },
  )

  const solActivas = await fetchSolicitudesActivas.json()
  let filterSolicitud
  if (solActivas) {
    filterSolicitud = solActivas.filter(sol => sol.cedula === cedula)
  } else {
    filterSolicitud = []
  }

  return { props: { data: filterSolicitud } }
}
