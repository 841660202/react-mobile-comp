import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styles from './index.scss'
import Button from '../Button'
interface IModalProps {
  visible?: boolean
  closable?: boolean
  topRadius?: boolean
  maskStyle?: object
  okText?: string
  cancelText?: string
  zIndex?: number
  onCancel?: () => void
  onOk?: () => void
  forceRender?: boolean
  children: any
  btnsPosition?: 'top' | 'bottom' | 'none'

}
const Modal = (props: IModalProps) => {
  const { forceRender, zIndex,
    okText, children,
    closable, cancelText, visible, onCancel,
    btnsPosition,
    onOk,
    topRadius
  } = props
  const [_forceRender, set_ForceRender] = useState<boolean>(false)
  const [_visible, set_Visible] = useState<boolean>(false)

  const _zIndex = zIndex || 1000

  useEffect(() => {
    set_ForceRender(forceRender || false)
  }, [props.forceRender])

  useEffect(() => {
    set_Visible(visible || false)
  }, [visible])

  const handleCloseModal = () => {
    if (closable && onCancel) {
      onCancel()
    }
  }
  const handleOk = () => {
    onOk && onOk()
  }
  const handleCancel = () => {
    onCancel && onCancel()
  }
  return (
    <div
      onClick={handleCloseModal}
      className={classNames(styles.modalMask, {
        [styles.hide]: !_visible,
        [styles.show]: _visible,
        [styles.cursorPointer]: closable
      })}
      // key={`${_forceRender}`}
      // style={{ zIndex: _zIndex, transform: `translateZ(${_zIndex}px)` }}
      >
      <div className={classNames(styles.bottomBoday, {
        [styles.topRadius]: !!topRadius
      })}>
        {
          btnsPosition === 'top' && <div className={styles.footer}>
            <Button onClick={handleCancel}>
              {cancelText || 'Cancel'}
            </Button>
            <Button type="primary" onClick={handleOk}>
              {okText || 'Ok'}
            </Button>
          </div>
        }
        {children}
        {
          btnsPosition === 'bottom' && <div className={styles.footer}>
            <Button onClick={handleCancel}>
              {cancelText || 'Cancel'}
            </Button>
            <Button type="primary" onClick={handleOk}>
              {okText || 'Ok'}
            </Button>
          </div>
        }
      </div>
    </div>
  )
}

export default Modal