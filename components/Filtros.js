import * as React from 'react'
import { customFetch, RequestTypes } from '../utils/custom-fetch'

const initialState = {
  userId: '',
  loading: false,
  data: [],
  error: '',
}

const initialFilter = {
  fecha: '',
  asesor: '',
  estado: 'TODOS',
}

const estado = [
  'COMPLETADO',
  'INCOMPLETO',
  'FALTA_DOCUMENTOS',
  'POR_VALIDAR',
  'PREPARADO_ENVIO',
  'RECHAZADO',
  'APROBADO',
  'COLOCADO',
  'TODOS',
]

export const Filtros = props => {
  const ListaDeAsesores = props.usuarios?.filter(usuario => usuario.rolID === 4)
  const [valueFilter, setValueFilter] = React.useState(initialFilter)
  const { configFilter } = props
  const { numberRegister, numberPage } = configFilter

  React.useEffect(() => {
    requestFilter()
  }, [requestFilter])

  const requestFilter = React.useCallback(async () => {
    let dynamicUrl = createDynamicUrl(valueFilter, numberPage, numberRegister)

    try {
      let url = `${dynamicUrl}`
      const respuestaFetch = await getData(url)

      if (respuestaFetch.status === 200) {
        const dt = await respuestaFetch.json()
        if (dt.length > 0) {
          props.setSearch({
            ...initialState,
            loading: true,
          })
          setTimeout(() => {
            props.setSearch({
              ...initialState,
              data: [...dt],
              loading: false,
              error: '',
            })
          }, 2000)
        } else {
          props.setSearch({
            ...props.search,
            data: [],
            loading: false,
            error: 'No existen resultados',
          })
          setTimeout(() => {
            props.setSearch({
              ...props.search,
              data: [],
              loading: false,
              error: '',
            })
          }, 5000)
        }
      } else {
        props.setSearch({
          ...props.search,
          data: [],
          loading: false,
          error: 'Hubo un error, NO se encontraron registros',
        })

        setTimeout(() => {
          props.setSearch({
            ...props.search,
            data: [],
            loading: false,
            error: '',
          })
        }, 5000)
      }
    } catch (err) {
      props.setSearch({
        ...props.search,
        data: [],
        loading: false,
        error: 'Hubo un error. - Intenta más tarde',
      })

      setTimeout(() => {
        props.setSearch({
          ...props.search,
          data: [],
          loading: false,
          error: '',
        })
      }, 5000)
    }
  }, [numberPage, numberRegister, props, valueFilter])

  const handleFilter = ({ target }) => {
    setValueFilter({
      ...valueFilter,
      [target.name]: target.value,
    })
  }

  const applyFiltro = async () => {
    await requestFilter()
  }

  const deleteFiltro = () => {
    props.setSearch({
      ...initialState,
      data: props.firstCallAPI,
    })
    setValueFilter(initialFilter)
  }

  const handleCloseFilter = () => {
    props.setOpenFilter(false)
    setValueFilter(initialFilter)
  }

  return (
    <div className="w-full card-custom mb-8">
      <div className='header-card-custom flex justify-between'><span>Filtros de busqueda</span> <span onClick={handleCloseFilter}><img
          src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
          className="h-4 flex justify-end hover:cursor-pointer"
        /></span></div>
  <div className='body-card-custom'>
<div className='w-full grid grid-cols-1 md:grid-cols-4 gap-2 mb-4'>
        <div className='grid'>
          <label className="block"> Solicitudes asignadas </label>
          <select
            name="asesor"
            value={valueFilter.asesor}
            onChange={handleFilter}
            className="text-center"
          >
            <option value="">{` Seleccionar...`} </option>
            <option value="NO_ASIGNADO"> sin asignar </option>
            {ListaDeAsesores?.map((asesor, index) => (
              <option value={asesor.cedula} key={index}>
                {' '}
                {`${asesor.nombres}  ${asesor.apellidos}`}{' '}
              </option>
            ))}
          </select>
        </div>
      
    
        <div className='grid'>
        <label className="block">Por fecha</label>
          <input
            type="date"
            name="fecha"
            value={valueFilter.fecha}
            onChange={handleFilter}
            className="text-center"
          />
        </div>


        <div className='grid'>
          <label className="block"> Por mes </label>
          <input
            type="month"
            name="fecha"
            value={valueFilter.fecha}
            onChange={handleFilter}
            className="text-center"
          />
        </div>



        <div className='grid'>
          <label className="block">Estado</label>
          <select
            name="estado"
            value={valueFilter.estado}
            onChange={handleFilter}
            className="text-center"
          >
            {/* <option value={'TODOS'}> Todos </option> */}
            {estado.map((item, index) => (
              <option value={item} key={index}>
                {item.toLowerCase()}
              </option>
            ))}
          </select>
        </div>
        </div>
      
      </div>
      <div className='footer-card-custom flex justify-end'>

      <button
        className="btn-texto-gris"
        onClick={handleCloseFilter}
      >
        Ocultar filtros
      </button> 
      <button
        className="btn-texto"
        onClick={deleteFiltro}
      >
        Limpiar filtros
      </button>

      <button
        className="btn-secundario"
        onClick={applyFiltro}
      >
        Aplicar filtro(s)
      </button>
      </div>
      <div/>
    </div>

  )
}

async function getData(url) {
  try {
    const fetchCreditos = await customFetch(url, { type: RequestTypes.credit })
    return fetchCreditos
  } catch (error) {}
}

function createDynamicUrl(filters, indice = 0, limite = 10) {
  let base_url = `credito/solicitudes?indice=${indice}&limite=${limite}`
  for (let key in filters) {
    let separador = base_url.indexOf('?') !== -1 ? '&' : '?'
    if (filters[key]) {
      key = key.trim()
      base_url += `${separador}${key}=${filters[key]}`
    }
  }
  return base_url
}
