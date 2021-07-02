import React, { FC } from 'react'
import styles from './index.scss'

interface SafeAreaProps {
  show?: boolean
  style?: React.CSSProperties
}
const SafeArea: FC<SafeAreaProps> = (props) => {
  const { show } = props
  return show ? <div className={styles.iOSSafeArea} style={props.style}></div> : null
}
SafeArea.defaultProps = {
  show: true,
  style: {}
}
export default React.memo(SafeArea)