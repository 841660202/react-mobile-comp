import React, { useState, useEffect } from 'react'
import 'rmc-picker/assets/index.css'
import Picker from 'rmc-picker/lib/Picker';
import Modal from '../Modal'
interface IPickerRelatedItem {
  label: string;
  value: any;
}
interface IProps {
  visible: boolean;
  onOk: (value: any) => void;
  onCancel: () => void;
  onClose: () => void;
  cancelText?: string;
  okText?: string;
  value: any[];
  data: any[]
  btnsPosition?: 'top' | 'bottom'
}
const DataPicker: React.FC<IProps> = props => {
  const {
    data,
    visible, btnsPosition, value, onCancel, onOk, okText, cancelText
  } = props
  const [_values, set_values] = useState([undefined, undefined])
  const [firstDatas, setfirstDatas] = useState<IPickerRelatedItem[]>([])
  const [secondDatas, setsecondDatas] = useState([])
  useEffect(() => {
    const _data = data.map(item => {
      return {
        label: item.label,
        value: item.value
      }
    })
    setfirstDatas(_data)
  }, [data])

  const onChange = (value: any) => {
    set_values(value)

  }
  const onScrollChange = (value: any) => {
    console.log('onScrollChange', value);
    set_values(value)
  }
  const handleCancel = () => {
    onCancel && onCancel()
  }
  const handleOk = () => {
    onOk && onOk(_values)
  }
  return (
    <Modal
      visible={visible}
      btnsPosition={btnsPosition}
      onCancel={handleCancel}
      onOk={handleOk}
      okText={okText}
      cancelText={cancelText}
    >
      <Picker indicatorClassName="my-picker-indicator">
        {firstDatas.map((item: IPickerRelatedItem) => (
          <Picker.Item
            key={item.value}
            className="my-picker-view-item"
            value={item.value}
          >
            {item.label}
          </Picker.Item>
        ))}
      </Picker>
    </Modal>
  )
}


export default DataPicker