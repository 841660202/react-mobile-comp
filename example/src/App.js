import React, { useState } from 'react'
// import { Switch, Modal, BottomModal } from 'my-react-library'
import 'react-mobile-comp/dist/styles.css'
import dayjs from 'dayjs'
import { Modal, Button, Toast, Alert, Date, DatePicker, ActionSheet } from 'react-mobile-comp'
const App = () => {
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
  const handleOk = (value) => {
    console.log(value)
  }
  return (
    <div>
      {/* 121 */}
      {/* <Switch checked={checked} onChange={(v)=>setChecked(v)}/> */}
      {/* <Button onClick={handleOpen}>按钮 开</Button> */}
      {/* <Button onClick={handleClose}>按钮 关</Button> */}
      {/* <DatePicker
        closable
        value={dayjs(dayjs().format('YYYY-MM-DD')).valueOf()}
        onOk={handleOk}
        visible={visible}
        onCancel={handleClose}
        btnsPosition="top">
      </DatePicker> */}
      <ActionSheet
        closable
        topRadius
        data={
          [
            { label: 'js', value: 'js' },
            { label: 'js1', value: 'js1' },
            { label: 'js2', value: 'js2' },
          ]
        }
        value={'js'}
        onOk={handleOk}
        visible={visible}
        onCancel={handleClose}
        btnsPosition="top"
      >
      </ActionSheet>
      {/* <Date /> */}
    </div>
  );
}

export default App;
