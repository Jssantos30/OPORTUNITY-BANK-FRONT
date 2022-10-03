import React from 'react'

const CustomField = props => {
  return (
    <div className={`flex flex-col items-center my-2 border py-2 px-2 text-sm ${props.width}`}>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className={`border border-black text-center w-full text-xs  ${props.cName || ''}`}
        {...props}
      />
      <label className="font-semibold text-xs">{props.label}</label>
    </div>
  )
}

export default CustomField
