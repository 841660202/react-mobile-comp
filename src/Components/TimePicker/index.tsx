import React, { useState, useEffect } from 'react'
import Picker from 'rmc-picker/lib/Picker';
// import Picker from '../Picker'
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Modal from '../Modal'

/**
 * 补零
 * @param value
 * @returns {*|string}
 */
export function fixDateNum(value: number, suffix = '') {
  if (suffix) {
    return +value >= 10 ? `${value}${suffix}` : `0${+value}${suffix}`
  } else {
    return +value >= 10 ? `${value}` : `0${+value}`
  }

}

const genHours = (suffix = '') => {
  const hours: IPickerRelatedItem[] = []
  for (let i = 0; i < 24; i++) {
    hours.push({
      value: i,
      label: fixDateNum(i, suffix)
    })
  }
  return hours
}
const genMinutes = (step = 5, suffix = '') => {
  const minutes: IPickerRelatedItem[] = []
  for (let i = 0; i < 60; i = i + step) {
    minutes.push({
      value: i,
      label: fixDateNum(i, suffix)
    })
  }
  console.log(minutes)
  return minutes
}
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
  step?: number
  suffixs: string[]
}
const DataPicker: React.FC<IProps> = props => {
  const {
    data,
    visible, closable,
    btnsPosition, value, onCancel, onOk, okText, cancelText,
    step, suffixs
  } = props
  const [_value, set_value] = useState([null, null])
  const [_datas, set_datas] = useState<Array<IPickerRelatedItem[]>>([[], []])
  useEffect(() => {
    if (Array.isArray(suffixs) && suffixs.length === 2) {
      set_datas([genHours(suffixs[0]), genMinutes(step, suffixs[1])])
    } else {
      set_datas([genHours(), genMinutes(step)])
    }
  }, [visible])

  const onChange = (value: any) => {
    console.log(value);

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
  // const renderPicker = () => {
  //   return (
  //     <Picker
  //       selectedValue={_value}
  //       onValueChange={onChange}
  //       onScrollChange={onScrollChange}
  //     >
  //       {_datas.map((item: IPickerRelatedItem) => (
  //         <Picker.Item
  //           key={item.value}
  //           value={item.value}
  //         >
  //           {item.label}
  //         </Picker.Item>
  //       ))}
  //     </Picker>
  //   )
  // }
  return (
    <>
      <Modal
        visible={visible}
        btnsPosition={btnsPosition}
        onCancel={handleCancel}
        onOk={handleOk}
        okText={okText}
        cancelText={cancelText}
        closable={closable}
      >



        <MultiPicker
          selectedValue={_value}
          onValueChange={onChange}
        >
          {_datas.map((items, itemsIndex) => {
            return <Picker indicatorClassName="my-picker-indicator" key={itemsIndex}>
              {items.map(item => <Picker.Item
                className="my-picker-view-item"
                value={item.value}
                key={item.value}
              >{item.label}</Picker.Item>
              )}
            </Picker>
          })}
        </MultiPicker>
      </Modal>
    </>

  )
}


export default DataPicker