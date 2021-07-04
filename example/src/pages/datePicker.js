import React, { useState } from 'react'
import dayjs from 'dayjs'
import 'react-mobile-comp/dist/styles.css'
import { Button, DatePicker, Navigationbar } from 'react-mobile-comp'
const DatePickerDemo = (props) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(dayjs(dayjs().format('YYYY-MM-DD')).valueOf())
  const handleOpen = () => {
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  const handleOk = (value) => {
    console.log(value)
    setValue(value)
  }
  const handleBack = () => {
    props.history.goBack();
  }
  return (
    <div>
      <Navigationbar centerText="DatePickerDemo" leftVisible onLeftClick={handleBack} />
      <Button onClick={handleOpen} type="primary">按钮 开</Button>
      <div>value: {dayjs(value).format('YYYY/MM/DD')}</div>
      <DatePicker
        closable
        value={value}
        onOk={handleOk}
        visible={visible}
        onCancel={handleClose}
        btnsPosition="top">
      </DatePicker>
    </div>
  );
}

export default DatePickerDemo;