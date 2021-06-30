import React, { useState } from 'react'
// import { Switch, Modal, BottomModal } from 'my-react-library'
// import 'my-react-library/lib/index.css'
import { Switch, Button, Toast, Alert} from 'react-mobile-comp'
// import 'ts-comp/dist/styles.css'
const App = () => {
  const [visible, setVisible] = useState(false)
  const [checked, setChecked] = useState(false)
  const handleOpen = () => {
    // Toast.success('hello')
    Alert.confirm({
      cancelText:'取消',
      okText: '确定',
      content: (
        <div>
         12121
        </div>
      ),
      onCancel: () => {

      },
      onConfirm: async () => {

        Alert.close()
      },
    })
    setVisible(true)
  }
  const handleClose = () => {
    setVisible(false)
  }
  return (
    <div style={{paddingTop: 30, paddingLeft: 20}}>
      121
      <Switch checked={checked} onChange={(v)=>setChecked(v)}/>
      <Button onClick={handleOpen}>按钮 开</Button>
      {/* <Button onClick={handleClose}>按钮 关</Button> */}
      {/* <BottomModal visible={visible} onCancel={handleClose}>
        <div>
          这是主体内容
        </div>
      </BottomModal> */}
    </div>
  );
}

export default App;
