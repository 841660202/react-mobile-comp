import React, { useState } from 'react'
// import { Switch, Modal, BottomModal } from 'my-react-library'
import 'react-mobile-comp/dist/styles.css'
import { Modal, Button, Toast, Alert, Date, DatePicker, Navigationbar } from 'react-mobile-comp'
const ToastDemo = (props) => {
  const [visible, setVisible] = useState(true)
  const [checked, setChecked] = useState(false)
  const handleOpen = () => {
    // Toast.success('hello')
    // Alert.confirm({
    //   cancelText:'取消',
    //   okText: '确定',
    //   content: (
    //     <div>
    //      12121
    //     </div>
    //   ),
    //   onCancel: () => {

    //   },
    //   onConfirm: async () => {

    //     Alert.close()
    //   },
    // })
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  const handleToast = (value) => {
    Toast.info('hello world')
  }
  const handleBack =()=>{
    props.history.goBack();
  }
  return (
    <div>
      <Navigationbar centerText="ToastDemo" leftVisible onLeftClick={handleBack}/>
      {/* 121 */}
      {/* <Switch checked={checked} onChange={(v)=>setChecked(v)}/> */}
      <Button onClick={handleToast} type="primary">按钮 开</Button>
      {/* <Button onClick={handleClose}>按钮 关</Button> */}
      {/* <DatePicker
        closable
        value={dayjs(dayjs().format('YYYY-MM-DD')).valueOf()}
        onOk={handleOk}
        visible={visible}
        onCancel={handleClose}
        btnsPosition="top">
      </DatePicker> */}
      {/* <Date /> */}
    </div>
  );
}

export default ToastDemo;