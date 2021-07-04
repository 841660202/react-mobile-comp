import React from 'react'
import 'react-mobile-comp/dist/styles.css'
import { Alert, Navigationbar, Button } from 'react-mobile-comp'
const AlertDemo = (props) => {
  const handleOpen = (props) => {
    Alert.confirm({
      cancelText: '取消',
      okText: '确定',
      title: '提示信息',
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
  }

  const handleBack = () => {
    props.history.goBack();
  }
  return (
    <div>
      <Navigationbar centerText="AlertDemo" leftVisible onLeftClick={handleBack} />
      <div className="pageContent">
        <Button type="primary" onClick={handleOpen}>按钮 关</Button>
      </div>
    </div>
  );
}

export default AlertDemo;