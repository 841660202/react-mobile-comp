import React, { useState, useEffect } from 'react'
import Modal from '../Modal'
import Date from '../Date'
import dayjs, { Dayjs } from 'dayjs'
interface IProps {
  closable: boolean
  visible: boolean
  btnsPosition?: 'top' | 'bottom'
  value: number
  onCancel?: () => void
  onOk?: (value: number) => void
  okText?: string
  cancelText?: string
}
const DatePicker: React.FC<IProps> = props => {
  const { visible, btnsPosition, value, onCancel, onOk, okText, cancelText, closable } = props
  const [date, setDate] = useState(value)

  useEffect(() => {
    setDate(value || dayjs(dayjs().format('YYYY-MM-DD')).valueOf())
  }, [value, visible])
  
  const onValueChange = (value: number) => {
    setDate(value)
  }
  const handleCancel = () => {
    onCancel && onCancel()
  }
  const handleOk = () => {
    onOk && onOk(date)
  }
  return (
    <Modal
      visible={visible}
      btnsPosition={btnsPosition}
      onCancel={handleCancel}
      onOk={handleOk}
      okText={okText}
      cancelText={cancelText}
      closable={closable}
    >
      <Date value={date} onChange={onValueChange}></Date>
    </Modal>
  )
}


export default DatePicker