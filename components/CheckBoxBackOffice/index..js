import React from 'react'

export const CheckBoxDocument = ({
  name,
  value,
  id,
  getDefaultChecked,
  handleChange,
  posicionRol,
}) => {
  return (
    <div className="d-f" key={id}>
      <input
        type="checkbox"
        name={value}
        onChange={e => handleChange(e, posicionRol)}
        defaultChecked={getDefaultChecked(value, posicionRol)}
      />
      <label htmlFor={name} className="ml-2">
        {name}
      </label>
    </div>
  )
}
