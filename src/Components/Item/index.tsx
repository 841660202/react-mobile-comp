import React from 'react'
import styles from './index.scss'
interface IProps {
  leftText?: string;
  rightVisible?: boolean
  onClick?: () => void
  renderRight?: () => void
}
const Item: React.FC<IProps> = (props) => {
  const { leftText, rightVisible, onClick, renderRight } = props
  const handleClick = () => {
    onClick && onClick()
  }
  return (
    <div className={styles.item} onClick={handleClick}>
      <div className={styles.leftText}>{leftText}</div>
      {rightVisible && <div className={styles.right}></div>}
      {renderRight && renderRight()}
    </div>
  )
}
export default Item