import React from 'react'
import { useField } from 'formik'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className="flex flex-col my-1 text-color_black_1 w-full mb-6 h-20" key={props.key}>
      <label className="text-sm" htmlFor={props.name}> {label} </label>
      <div className="h-10">
        <input
          id={props.name}
          name={props.name}
          {...field}
          {...props}
          className={`${props.className} w-full`}
          style={{borderRadius : '6px', border:`${meta.touched && meta.error ? '0.5px solid #AD0808':'0.5px solid #707070'}`}}
        />
      </div>
      {meta.touched && meta.error ? <div className="error">{`${meta.error}`}</div> : <div> </div>}
    </div>
  )
}

export default TextInput
