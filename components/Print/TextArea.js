import React from 'react'

const TextArea = props => {
  return (
    <div className="flex justify-center m-4" name={props.name}>
      <label>{props.label}</label>
      <textarea className={`border border-black   ${props.cName || ''}`}>
        {props.value}
      </textarea>
    </div>
  )
}

export default TextArea
