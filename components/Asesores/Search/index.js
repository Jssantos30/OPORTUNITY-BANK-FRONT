import * as React from 'react'
import { useAuthContext } from '../../../auth-context'
import { customFetch, RequestTypes } from '../../../utils/custom-fetch'
import { getData } from '../../../utils/getData'

function Search(props) {
  const { rol } = useAuthContext()
  const ROLES = ['ADMINISTRADOR', 'SUPERADMINISTRADOR']

  const initialState = {
    userId: '',
    loading: false,
    data: [],
    error: '',
    token: true,
  }

  const handleChange = ({ target }) => {
    props.setSearch({
      ...props.search,
      [target.name]: target.value,
    })
  }

  const handleClean = event => {
    event.preventDefault()
    if (ROLES.includes(rol)) {
      props.setSearch({
        ...initialState,
        data: props.firstCallAPI,
      })
      props.setInfoHistoricaUser([])
    } else {
      props.setSearch(initialState)
      props.setInfoHistoricaUser([])
    }
  }

  const handleSearch = async event => {
    event.preventDefault()
    props.setSearch({
      ...props.search,
      loading: true,
    })

    if (props.search.userId === '') {
      props.setSearch({ ...initialState, data: props.firstCallAPI })
      props.setInfoHistoricaUser([])
      return
    }

    if (!Number(props.search.userId)) {
      props.setInfoHistoricaUser([])
      props.setSearch({
        ...initialState,
        data: props.firstCallAPI,
        error: 'Debes ingresar un documento',
      })

      setTimeout(() => {
        props.setSearch({
          ...initialState,
          data: props.firstCallAPI,
        })
      }, 3000)
      return
    }

    try {
      const URL = `${process.env.NEXT_PUBLIC_CREDITSOLICITATION_V1}credito/solicitud/usuario/${props.search.userId}`
      const { response: res } = await getData(URL)

      if (res.status === 200) {
        const data = await res.json()
        props.setSearch({
          ...props.search,
          loading: false,
          data: data,
          error: '',
          token: true,
        })
      }

      if (res.status === 401) {
        const data = await res.json()
        props.setSearch({
          ...props.search,
          loading: false,
          data: [],
          error: `${data.message}, el usuario no ha empezado con el formulario`,
          token: false,
        })
      }

      if (res.status === 404) {
        const data = await res.json()
        props.setSearch({
          ...props.search,
          loading: false,
          data: [],
          error: `${data.message}, el usuario no ha empezado con el formulario`,
          token: true,
        })
      }
    } catch (err) {
      props.setSearch({
        ...props.search,
        data: props.firstCallAPI,
        loading: false,
        token: true,
      })
    }

    //Consulta para el historial
    try {
      const resFetchDataHistory = await customFetch(
        `creditos/solicitudes?usuario=${props.search.userId}&indice=0&limite=10`,
        {
          type: RequestTypes.report,
        },
      )
      const data = await resFetchDataHistory.json()

      if (resFetchDataHistory.status === 200) props.setInfoHistoricaUser(data)
      if (resFetchDataHistory.status === 404) props.setInfoHistoricaUser(data)
    } catch (err) {}
  }

  const handleEnter = e => {
    if (e.keyCode === 13) {
      handleSearch(e)
    }
  }

  return (
  <div className='card-custom mb-4'>
    <div className='header-card-custom'>
    <span>Buscar</span>
    </div>
    <div className='body-card-custom'>
    <div className="w-full my-1 items-center flex flex-col md:flex-row">
          <div className="w-full mb-2">
            <label For="userId">Buscar por cédula</label>
              <div className="flex relative items-center">
                <input
                  type="text"
                  className="w-full border rounded-full px-4 py-2 text-center"
                  placeholder="Buscar por cédula..."
                  name="userId"
                  value={props.search.userId}
                  onChange={handleChange}
                  onKeyDown={e => handleEnter(e)}
                />
                <img src={`${process.env.NEXT_BASE_PATH}/Search-Icon.svg`} alt="search" className="absolute right-4" />
              </div>
          </div>
        </div>
    </div>
    <div className='footer-card-custom'>
    <div className='w-full'>
          <div className="flex flex-row justify-end mb-8 md:mb-0">
          <button
              type="submit"
              onClick={handleClean}
              className="btn-texto ml-2"
            >
              Limpiar
            </button>
            
            <button
              className="btn-primario ml-2"
              type="submit"
              onClick={handleSearch}
            >
              Buscar
            </button>
            
          </div>
        </div>
    </div>
      

      
  </div>
  )
}

export default Search
