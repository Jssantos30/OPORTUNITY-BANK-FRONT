import React from 'react'

const Title = ({ children }) => {
  return (
    <h1 className={`text-center text-3xl font-semibold my-4`}>
      {children}
    </h1>
  )
}

export default Title
