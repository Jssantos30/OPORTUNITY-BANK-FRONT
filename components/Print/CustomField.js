import React from 'react'

const CustomField = props => {
  return (
    <div className={`flex flex-col items-center border px-1 py-1 text-xs ${props.width}`}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className={`border border-black text-center w-full text-xs  ${props.cName || ''}`}
        {...props}
      />
      <label className="font-semibold text-xs pb-0 ">{props.label}</label>
    </div>
  )
}

export default CustomField

