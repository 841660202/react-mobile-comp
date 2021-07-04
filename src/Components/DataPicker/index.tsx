import React, { useState, useEffect } from 'react'
import Picker from 'rmc-picker/lib/Picker';
// import Picker from '../Picker'
// import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Modal from '../Modal'
interface IPickerRelatedItem {
  label: string;
  value: any;
}
interface IProps {
  visible: boolean;
  closable?: boolean;
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
    visible, closable,
    btnsPosition, value, onCancel, onOk, okText, cancelText
  } = props
  const [_value, set_value] = useState(null)
  const [_datas, set_datas] = useState<IPickerRelatedItem[]>([])
  useEffect(() => {
    const _data = data.map(item => {
      return {
        label: item.label,
        value: item.value
      }
    })
    setTimeout(()=>{
      set_datas(_data)
    })
  }, [data, visible])

  const onChange = (value: any) => {
    set_value(value)
  }

  const onScrollChange = (value: any) => {
    console.log('onScrollChange', value);
    set_value(value)
  }
  const handleCancel = () => {
    onCancel && onCancel()
  }
  const handleOk = () => {
    onOk && onOk(_value)
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
     <Picker
        selectedValue={_value}
        onValueChange={onChange}
        onScrollChange={onScrollChange}
      >
        {_datas.map((item: IPickerRelatedItem) => (
          <Picker.Item
            key={item.value}
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