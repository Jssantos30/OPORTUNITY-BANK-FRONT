import React from 'react'
export const NumeroRegistro = props => {
  const handleReset = () => {
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberRegister: 10,
        numberPage: 0,
      }
    })
  }
  const handlePrev = () => {
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberPage: Math.max(prev.numberPage - 1, 0),
      }
    })
  }
  const handleNext = () => {
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberPage: prev.numberPage + 1,
      }
    })
  }
  const handleSelect = e => {
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberRegister: e.target.value,
        numberPage: 0,
      }
    })
  }
  return (
    <div className="flex justify-between md:flex-row flex-col my-4 items-center font-section">
      <div>
        <span className="numero-registros-text font-small">Registros por página</span>
        <select
          name="registro"
          id="registro"
          value={props.configFilter.numberRegister}
          onChange={handleSelect}
          className=""
        >
          <option value="1"> 1 </option>
          <option value="10"> 10 </option>
          <option value="20"> 20 </option>
          <option value="50"> 50 </option>
          <option value="100"> 100 </option>
        </select>
      </div>
      <div className="flex flex-inline mt-4 md:mt-0" aria-label="Pagination">
        <a onClick={handlePrev} className="inline-flex items-center paginador-contenedor-ant">
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillrule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" cliprule="evenodd" />
          </svg>
          <span>Ant</span>
        </a>

        <a disabled={
          props.NotFoundResult.includes('No se encontraron más resultados') ? true : false
        } aria-current="page" className="paginador-numeros  inline-flex items-center"> {` ${props.configFilter.numberPage + 1}`}{' '}</a>
      

        <a onClick={handleNext} className=" inline-flex items-center paginador-contenedor-sig">
          <span>Sig. </span>
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillrule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" cliprule="evenodd" />
          </svg>
        </a>
      </div>
      {/* 
   <div className="flex h-12">
      <button
         onClick={handleReset}
         className="border border-color_gray_4 py-1 px-2 mr-2 text-center rounded-lg flex items-center w-10"
         >
      <img src="/flecha-boton.svg" alt="<<" />
      <img src="/flecha-boton.svg" alt="<" />
      </button>
      <button
         onClick={handlePrev}
         className="border border-color_gray_4 py-1 px-2 mr-2 flex justify-center rounded-lg items-center w-10"
         >
      <img src="/flecha-boton.svg" alt="<" />
      </button>
      <button
      onClick={handleNext}
      className="border border-color_gray_4 py-1 px-2 mr-2 text-center  text-color_primary_2_ligth font-semibold rounded-lg"
      disabled={
      props.NotFoundResult.includes('No se encontraron más resultados') ? true : false
      }
      >
      {` Siguiente ${props.configFilter.numberPage + 1}`}{' '}
      </button>
   </div>
   */}
    </div>
  )
}