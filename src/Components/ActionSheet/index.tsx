import React, { useState, useEffect } from 'react'
import Modal from '../Modal'
import styles from './index.scss'
interface IProps {
  visible: boolean;
  topRadius?: boolean;
  onChange: (value: any) => void;
  onCancel: () => void;
  cancelText?: string;
  okText?: string;
  value: any;
  data: any[]
  btnsPosition?: 'top' | 'bottom' | 'none'
  checkIcon?: React.ReactElement
}
interface IPickerRelatedItem {
  label: string;
  value: any;
}
const ActionSheet: React.FC<IProps> = props => {
  const {
    visible,
    btnsPosition, value,
    onCancel, onChange, okText, cancelText,
    data, checkIcon, topRadius
  } = props
  const [_value, set_value] = useState()
  const [_datas, set_datas] = useState<IPickerRelatedItem[]>([])

  useEffect(() => {
    const _data = data.map(item => {
      return {
        label: item.label,
        value: item.value
      }
    })
    set_datas(_data)
  }, [data])

  useEffect(() => {
    set_value(value)
  }, [value, visible])

  const handleCancel = () => {
    onCancel && onCancel()
  }
  const handleOk = () => {

  }
  const handleCheck = (item: IPickerRelatedItem) => {
    set_value(item.value)
    onChange && onChange(item)
    onCancel && onCancel()
  }
  return (
    <Modal
      visible={visible}
      btnsPosition={"none"}
      onCancel={handleCancel}
      onOk={handleOk}
      okText={okText}
      cancelText={cancelText}
      topRadius={topRadius}
      closable
    >
      <ul className={styles.checkItemWrap}>
        {(_datas || []).map(item => <li
          onClick={() => handleCheck(item)}
          className={styles.checkItem}
          key={item.value}>
          {item.label}
          {item.value === _value &&
            (
              checkIcon || <img
                className={styles.checkIcon}
                src="https://images.tuyacn.com/rms-static/d419ea60-c910-11eb-a907-234050690abd-1623235968006.png"
              />
            )
          }
        </li>)}
        <li className={styles.space}></li>
        <li
          onClick={handleCancel}
          className={styles.checkItem}
          key={'cancel'}>
          {cancelText || 'Cancel'}
        </li>
      </ul>
    </Modal>
  )
}


export default ActionSheet