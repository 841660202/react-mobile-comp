import React, { useState } from 'react'
import 'react-mobile-comp/dist/styles.css'
import { Button, TimePicker, Navigationbar } from 'react-mobile-comp'
const ActionSheetDemo = (props) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(null)
  const handleOpen = () => {
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  const handleOk = (value) => {
    setValue(value)
    console.log(value)
  }
  const handleBack = () => {
    props.history.goBack();
  }
  return (
    <div>
      <Navigationbar centerText="DataPickerDemo" leftVisible onLeftClick={handleBack} />
      <div className="pageContent">
        <Button type="primary" onClick={handleOpen}>打开</Button>
        <br></br>
        {value}
        {
          visible && <TimePicker
            closable
            topRadius
            data={
              [
                { label: 'js', value: 'js' },
                { label: 'oc', value: 'oc' },
                { label: 'swift', value: 'swift' },
                { label: 'rn', value: 'rn' },
                { label: 'flutter', value: 'flutter' },
                { label: 'android', value: 'android' },
                { label: 'h5', value: 'h5' },
              ]
            }
            suffixs={['时', '分']}
            value={value}
            onOk={handleOk}
            visible={visible}
            onCancel={handleClose}
            btnsPosition="top"
          >
          </TimePicker>
        }
      </div>
    </div>
  );
}

export default ActionSheetDemo;