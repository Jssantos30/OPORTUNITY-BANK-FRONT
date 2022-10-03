import React from 'react'
import { useField } from 'formik'

const SelectionInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  const renderFunc = props.children || props.render

  return (
    <div key={props.id} className="flex flex-col mb-6 h-20">
      <label className="font-medium mb-2">{label}</label>
      <div className="h-10">
        <select
          {...field}
          disabled={props.disabled}
          className={`${props.className} rounded-lg border border-gray-400 w-full`}
          style={{borderRadius : '6px', border:`${meta.touched && meta.error ? '0.5px solid #AD0808':'0.5px solid #707070'}`}}
        >
          <option
            className="text-center"
            value={props.value || ''}
          >{`<---- Selecciona un campo ---->`}</option>
          {props.options.map(renderFunc)}
        </select>
          {meta.touched && meta.error ? <div style={{marginTop: '0px'}} className="error">{meta.error}</div> :  <div> </div>}
      </div>
    </div>
  )
}

export default SelectionInput
