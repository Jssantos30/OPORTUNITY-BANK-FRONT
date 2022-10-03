import React from 'react'
import styles from '../../styles/Tab.module.css'

export const Tabs = props => {
  return (
    <div className={`${styles.containerTb}`}>
      <div className={`${styles.blocTabs}`}>
        <div
          onClick={() => props.setToggleState(1)}
          className={
            props.toggleState === 1
              ? `${styles.tabs} ${styles.activeTabs}`
              : 'tabs w-1/2 flex justify-center items-center'
          }
        >
          Solicitudes
        </div>

        <div
          onClick={() => props.setToggleState(2)}
          className={
            props.toggleState === 2 ? `${styles.tabs} ${styles.activeTabs}` : `${styles.tabs}`
          }
        >
          Historico de Solicitudes
        </div>
      </div>

      <div className={`${styles.contentTabs}`}>{props.children}</div>
    </div>
  )
}
