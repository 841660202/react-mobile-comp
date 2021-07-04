import classNames from 'classnames';
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Picker from 'rmc-picker/lib/Picker';
import Button from '../Button';
import styles from './index.scss'
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
  topRadius?: boolean
}
const DataPicker: React.FC<IProps> = props => {
  const {
    data,
    visible, closable,
    btnsPosition, value,
    onCancel, onOk, okText, cancelText,
    topRadius
  } = props


  const [_value, set_value] = useState(value)
  const [_datas, set_datas] = useState<IPickerRelatedItem[]>([])


  useEffect(() => {
    set_value(value)
  }, [visible, value])

  useEffect(() => {
    const _data = data.map(item => {
      return {
        label: item.label,
        value: item.value
      }
    })
    setTimeout(() => {
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
    onCancel && onCancel()
  }
  const handleCloseModal = useCallback(
    () => {
      if (closable && onCancel) {
        onCancel()
      }
    },
    [closable, onCancel],
  )
  console.log(_datas)
  const renderPicker = useMemo(() => {
    return <Picker
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
  }, [onChange, onScrollChange, _datas])



  return (
    <>

      <div className={styles.modalMask} onClick={handleCloseModal}>
        <div
          onClick={e => e.stopPropagation()}
          className={classNames(styles.bottomBoday, {
            [styles.topRadius]: !!topRadius
          })}>
          {
            btnsPosition === 'top' && <div className={styles.footer}>
              <Button onClick={handleCancel}>
                {cancelText || 'Cancel'}
              </Button>
              <Button type="primary" onClick={handleOk}>
                {okText || 'Ok'}
              </Button>
            </div>
          }
          {renderPicker}
          {
            btnsPosition === 'bottom' && <div className={styles.footer}>
              <Button onClick={handleCancel}>
                {cancelText || 'Cancel'}
              </Button>
              <Button type="primary" onClick={handleOk}>
                {okText || 'Ok'}
              </Button>
            </div>
          }
        </div>
      </div>
    </>

  )
}


export default DataPicker