import React, { useState } from 'react'
import 'react-mobile-comp/dist/styles.css'
import { Button, ActionSheet, Navigationbar } from 'react-mobile-comp'
const ActionSheetDemo = (props) => {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState(null)
  const handleOpen = () => {
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  const handleOk = (item) => {
    setValue(item.value)
    console.log(item)
  }
  const handleBack =()=>{
    props.history.goBack();
  }
  return (
    <div>
      <Navigationbar centerText="ActionSheetDemo" leftVisible onLeftClick={handleBack}/>
      <Button type="primary" onClick={handleOpen}>ActionSheet: {value}</Button>
      <ActionSheet
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
        value={value}
        onChange={handleOk}
        visible={visible}
        onCancel={handleClose}
        btnsPosition="top"
      >
      </ActionSheet>
    </div>
  );
}

export default ActionSheetDemo;