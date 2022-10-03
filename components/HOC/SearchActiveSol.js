import React from 'react'
import { customFetch, RequestTypes } from '../../utils/custom-fetch'

export const SearchActiveSol = ({
  solicitudesActivas,
  setSolicitudesActivas,
  firstCallSol,
}) => {
  const initialStateSol = {
    userId: '',
    data: [],
    loading: false,
    error: '',
  }

  const refSearch = React.useRef()

  const handleChange = ({ target }) => {
    setSolicitudesActivas({
      ...solicitudesActivas,
      [target.name]: target.value,
    })
  }

  const handleSearch = async event => {
    event.preventDefault()
    setSolicitudesActivas({
      ...solicitudesActivas,
      loading: true,
    })

    if (solicitudesActivas.userId === '') {
      setSolicitudesActivas({
        ...initialStateSol,
        data: firstCallSol,
      })
      return
    }

    if (!Number(solicitudesActivas.userId)) {
      setSolicitudesActivas({
        ...initialStateSol,
        data: firstCallSol,
        error: 'Hubo un error, debes ingresar un documento',
      })

      setTimeout(() => {
        setSolicitudesActivas({
          ...initialStateSol,
          data: firstCallSol,
        })
      }, 5000)
      return
    }

    try {
      const url = `creditos?estado=Activo&limite=${30}&indice=${0}&usuario=${
        solicitudesActivas.userId
      }`
      const fetchSolicitudesActivas = await customFetch(url, { type: RequestTypes.report })

      if (fetchSolicitudesActivas.status === 200) {
        const solActivas = await fetchSolicitudesActivas.json()
        const sortedSol = solActivas.sort((a, b) => {
          return new Date(b.fecha_desembolso) - new Date(a.fecha_desembolso)
        })

        setSolicitudesActivas({
          ...initialStateSol,
          userId: refSearch.current.value,
          data: sortedSol,
          loading: false,
        })
      } else {
        setSolicitudesActivas({
          ...initialStateSol,
          userId: refSearch.current.value,
          data: [],
          loading: false,
          error: 'Hubo un error, no se encontraron resultados.',
        })

        setTimeout(() => {
          setSolicitudesActivas({
            ...initialStateSol,
            data: firstCallSol,
            loading: false,
            error: '',
          })
        }, 5000)
      }
    } catch (err) {
      setSolicitudesActivas({
        ...initialStateSol,
        userId: refSearch?.current?.value,
        data: [],
        loading: false,
        error: 'Hubo un error, intenta más tarde.',
      })

      setTimeout(() => {
        setSolicitudesActivas({
          ...initialStateSol,
          data: firstCallSol,
          loading: false,
          error: '',
        })
      }, 5000)
    }
  }

  const handleClean = () => {
    setSolicitudesActivas({
      ...initialStateSol,
      data: firstCallSol,
      loading: false,
      error: '',
    })
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
                  ref={refSearch}
                  type="text"
                  className="w-full border rounded-full px-4 py-2 text-center"
                  placeholder="No. de cedula"
                  name="userId"
                  value={solicitudesActivas.userId}
                  onChange={handleChange}
                  onKeyDown={e => handleEnter(e)}
                />
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
