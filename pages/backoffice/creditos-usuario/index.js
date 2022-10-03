import React from 'react'
import { useAuthContext } from '../../../auth-context'
import { NumeroRegistro } from '../../../components/Filtro/NumeroRegistro'
import RowActivos from '../../../components/HOC/RowActivos'
import { SearchActiveSol } from '../../../components/HOC/SearchActiveSol'
import TableActivos from '../../../components/HOC/TableActivos'
import { ProtectedRoute } from '../../../components/protected-route'
import LayoutRol from '../../../Layout/LayoutRol'
import { customFetch, RequestTypes } from '../../../utils/custom-fetch'
import Title from '../../../components/Title'
import TitleBackoffice from '../../../components/TitleBackoffice'

const ERROR_CLASS =
  'mensaje-error mb-4 px-4 py-3 rounded relative'

function Activos() {
  const { rol } = useAuthContext()
  const [loadinLayout, setLoadingLayout] = React.useState(true)
  const [firstCallSol, setFirstCallSol] = React.useState([])
  const initialStateSol = {
    userId: '',
    data: [],
    loading: false,
    error: '',
  }
  const [solicitudesActivas, setSolicitudesActivas] = React.useState(initialStateSol)
  const initialConfigFilter = {
    numberRegister: 10,
    numberPage: 0,
  }

  const [configFilter, setConfigFilter] = React.useState(initialConfigFilter)
  const { numberRegister, numberPage } = configFilter
  const [NotFoundResult, setNotFoundResult] = React.useState('')

  React.useEffect(() => {
    setLoadingLayout(true)
    if (rol) {
      setLoadingLayout(false)
      return
    }
    setLoadingLayout(false)
  }, [rol])

  React.useEffect(() => {
    async function run() {
      setSolicitudesActivas({
        ...solicitudesActivas,
        data: [],
        loading: true,
      })

      try {
        const url = `creditos?estado=Activo&limite=${Number(numberRegister)}&indice=${Number(
          numberPage,
        )}`
        const fetchSolicitudesActivas = await customFetch(url, { type: RequestTypes.report })

        if (fetchSolicitudesActivas.status === 200) {
          const solActivas = await fetchSolicitudesActivas.json()
          const sortedSol = solActivas.sort(
            (a, b) => new Date(b.fecha_desembolso) - new Date(a.fecha_desembolso),
          )

          setFirstCallSol(sortedSol)
          setNotFoundResult('')
          setSolicitudesActivas({
            ...solicitudesActivas,
            data: sortedSol,
            loading: false,
            error: '',
          })
        }

        if (fetchSolicitudesActivas.status === 404) {
          setSolicitudesActivas({
            ...solicitudesActivas,
            data: [],
            loading: false,
            error: 'Hubo un error, no se encontraron resultados',
          })
          setNotFoundResult('No se encontraron más resultados')
        }

        if (fetchSolicitudesActivas.status === 400) {
          setNotFoundResult('')
          setSolicitudesActivas({
            ...solicitudesActivas,
            data: [],
            loading: false,
            error: ' Hubo un error, no se encontraron resultados rrrr',
          })
        }
      } catch (err) {
        setSolicitudesActivas({
          ...solicitudesActivas,
          data: [],
          loading: false,
          error: 'No se encontraron más resultados - error',
        })
        setNotFoundResult('No se encontraron más resultados')
      }
    }
    run()
  }, [rol, numberRegister, numberPage])

  function renderLayout(rol) {
    return (
      <ProtectedRoute>
        <LayoutRol rolUser={rol}>
          <TitleBackoffice>Créditos usuario</TitleBackoffice>
          <SearchActiveSol
            solicitudesActivas={solicitudesActivas}
            setSolicitudesActivas={setSolicitudesActivas}
            firstCallSol={firstCallSol}
            numberRegister={numberRegister}
            numberPage={numberPage}
          />
          {solicitudesActivas.error !== '' ? (
            <div className={solicitudesActivas.error.includes('error') && ERROR_CLASS}>
              {solicitudesActivas.error}
            </div>
          ) : null}
          {solicitudesActivas.loading ? (
            <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div> 
          ) : solicitudesActivas.data.length > 0 ? (
            <>
            <div className='card-custom'>
              <div className='header-card-custom'>
              Lista de créditos usuario
              </div>
                <div className='body-card-custom'>
                  <TableActivos>
                    {solicitudesActivas.data.map(
                      (
                        {
                          cedula,
                          fecha_desembolso,
                          monto_desembolsado,
                          numero_cuotas,
                          cuotas_pendientes,
                          cuota_anterior,
                        },
                        index,
                      ) => (
                        <React.Fragment key={index}>
                          <RowActivos
                            cedula={cedula}
                            fechaDesembolso={fecha_desembolso}
                            MontoDesembolso={monto_desembolsado}
                            NumeroCuotas={numero_cuotas}
                            CuotasPendientes={cuotas_pendientes}
                            CuotaAnterior={cuota_anterior}
                          />
                        </React.Fragment>
                      ),
                    )}
                  </TableActivos>
               </div>
              <div className='footer-card-custom'>
              {solicitudesActivas.userId !== '' ? null : (
                  <NumeroRegistro
                    configFilter={configFilter}
                    setConfigFilter={setConfigFilter}
                    NotFoundResult={NotFoundResult}
                  />
                )}
              </div>
            </div>
            </>
          ) : (
            'No hay datos para mostrar, intente más tarde'
          )}
         
        </LayoutRol>
      </ProtectedRoute>
    )
  }
  //
  return loadinLayout ? <div className='flex flex-nowrap flex-row items-center'>
              <div className='h-16 flex items-center'>Cargando ...</div>
                <div className="spinner_cont items-center">
                  <span className="material spinner" />
                  </div>
                </div>  : renderLayout(rol)
}

export default Activos
