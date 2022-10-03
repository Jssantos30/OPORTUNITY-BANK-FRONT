import React from 'react'
import styles from '../../styles/Tab.module.css'

export const ContainerTab = props => {
  return (
    <div
      className={
        props.toggleState === props.tabNumber
          ? `${styles.content} ${styles.activeContent}`
          : `${styles.content}`
      }
    >
      {props.children}
    </div>
  )
}
