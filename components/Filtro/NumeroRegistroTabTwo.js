import React from 'react'
import { useAuthContext } from '../../auth-context'

export const NumeroRegistroTabTwo = props => {
  // const { numberRegister, setNumberRegister, setNumberPage, numberPage } = useAuthContext()
  // const [ numeroDatos, setNumeroDatos] = React.useState()

  const handleReset = () => {
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberRegisterTabTwo: 10,
        numberPageTabTwo: 0,
      }
    })
  }
  const handlePrev = () => {
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberPage: Math.max(prev.numberPageTabTwo - 1, 0),
      }
    })
  }

  const handleNext = () => {
    //TODO: debo de ponerle un máximo, pero este me lo debe de dar el backend
    // setNumberPage( prev => Math.min(  prev + 1,  numeroDatos ))
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberPage: prev.numberPageTabTwo + 1,
      }
    })
  }

  const handleSelect = e => {
    props.setConfigFilter(prev => {
      return {
        ...prev,
        numberRegisterTabTwo: e.target.value,
        numberPageTabTwo: 0,
      }
    })
  }

  return (
    <div className="flex justify-between my-4 items-center font-section">
      <div>
        <span className="mr-4 text-lg font-medium">Registros por página</span>
        <select
          name="registro"
          id="registro"
          value={props.configFilter.numberRegisterTabTwo}
          onChange={handleSelect}
          className="numero-registros-text"
        >
          <option value="1"> 1 </option>
          <option value="10"> 10 </option>
          <option value="20"> 20 </option>
          <option value="50"> 50 </option>
          <option value="100"> 100 </option>
        </select>
      </div>

      <div className="flex h-12">
        <button
          onClick={handleReset}
          className="border border-color_gray_4 py-1 px-2 mr-2 text-center rounded-lg flex items-center w-10"
        >
          <img src={`${process.env.NEXT_BASE_PATH}/flecha-boton.svg`} alt="<<" />
          <img src={`${process.env.NEXT_BASE_PATH}/flecha-boton.svg`} alt="<" />
        </button>
        <button
          onClick={handlePrev}
          className="border border-color_gray_4 py-1 px-2 mr-2 flex justify-center rounded-lg items-center w-10"
        >
          <img src={`${process.env.NEXT_BASE_PATH}/flecha-boton.svg`} alt="<" />
        </button>
        <button
          onClick={handleNext}
          className="border border-color_gray_4 py-1 px-2 mr-2 text-center  text-color_primary_2_ligth font-semibold rounded-lg"
        >
          {` Siguiente ${props.configFilter.numberPageTabTwo + 1}`}{' '}
        </button>
      </div>
    </div>
  )
}
