import React from 'react'
import styles from "@styles/BaseBtn.module.scss"

const BaseBtn = ({onClick, children, className}) => {
  return (
      <button className={`${styles.baseBtn} ${className}`} onClick={onClick}>{children}</button>
  )
}

export default BaseBtn