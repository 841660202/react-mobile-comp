import React from 'react'
import styles from './index.scss'
interface IProps {
  centerText?: string;
  leftVisible?: boolean
  onLeftClick?: () => void
}
const Navigationbar: React.FC<IProps> = (props) => {
  const { centerText, leftVisible, onLeftClick } = props
  const handleLeftClick = () => {
    onLeftClick && onLeftClick()
  }
  return (
    <div className={styles.headerWrap}>
      {leftVisible ? <div
        className={styles.back}
        onClick={handleLeftClick}
      /> : <div className={styles.left}></div>}
      <div className={styles.center}>{centerText}</div>
      <div className={styles.right}></div>
    </div>
  )
}
export default Navigationbar