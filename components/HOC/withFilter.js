import React from 'react'

export const withFilter = props => {
  return <>{() => props.children()}</>
}
