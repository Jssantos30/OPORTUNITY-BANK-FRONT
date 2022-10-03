import React from 'react'

export const FilterRoles = props => {
  const [pages, setPages] = React.useState([])

  React.useEffect(() => {
    const numPages = []

    for (let i = 1; i <= props.meta.totalPages; i++) {
      numPages.push(i)
    }
    setPages(numPages)
  }, [props.meta.totalPages])

  const handleReset = () => {
    props.setMeta(prev => {
      return {
        ...prev,
        currentPage: 1,
      }
    })
  }
  const handlePrev = () => {
    props.setMeta(prev => {
      return {
        ...prev,
        currentPage: Math.max(prev.currentPage - 1, 1),
      }
    })
  }

  const handleNext = () => {
    props.setMeta(prev => {
      return {
        ...prev,
        currentPage: Math.min(prev.currentPage + 1, prev.totalPages),
      }
    })
  }

  const handleSelect = e => {
    props.setMeta(prev => {
      return {
        ...prev,
        itemsPerPage: e.target.value,
        currentPage: 1,
      }
    })
  }

  const handlePage = pagina => {
    props.setMeta(prev => {
      return {
        ...prev,
        currentPage: pagina,
      }
    })
  }

  return (
    <div className="flex justify-between my-4 items-center font-section">
      <div>
      <span className="numero-registros-text font-small">Registros por página</span>
        <select
          name="registro"
          id="registro"
          value={props.meta.itemsPerPage}
          onChange={handleSelect}
          className=""
        >
          <option className="custom-option" value="1"> 1 </option>
          <option className="custom-option" value="10"> 10 </option>
          <option className="custom-option" value="20"> 20 </option>
          <option className="custom-option" value="50"> 50 </option>
          <option className="custom-option" value="100"> 100 </option>
        </select>
      </div>

     <div className="flex">
         {/*<button
          onClick={handleReset}
          className="border border-color_gray_4 py-1 px-2 mr-2 text-center rounded-lg flex items-center w-10"
        >
          <img src={`${process.env.NEXT_BASE_PATH}/flecha-boton.svg`} alt="<<" />
          <img src={`${process.env.NEXT_BASE_PATH}/flecha-boton.svg`} alt="<" />
        </button>*/}
        <button
          onClick={handlePrev}
          className="inline-flex items-center paginador-contenedor-ant"
        >
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillrule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" cliprule="evenodd" />
          </svg>
          <span>Ant. </span>
        </button>

        <div className="flex">
          {pages.map((pag, index) => {
            return (
              <button
                key={index}
                onClick={() => handlePage(index + 1)}
                className={
                  props.meta.currentPage === index + 1
                    ? `paginador-numeros-activo  inline-flex items-center`
                    : `paginador-numeros  inline-flex items-center`
                }
              >
                {pag}
              </button>
            )
          })}
        </div>

        <button
          onClick={handleNext}
          className="inline-flex items-center paginador-contenedor-sig"
          disabled={props.meta.currentPage >= props.meta.totalPages ? true : false}
        >
          {props.meta.currentPage >= props.meta.totalPages ? 'Sig.' : ` Siguiente`}
          
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillrule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" cliprule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}
