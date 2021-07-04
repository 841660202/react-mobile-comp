import React, { useState, useEffect, useCallback, useMemo } from 'react'
import Picker from 'rmc-picker/lib/Picker';
// import Picker from '../Picker'
import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Button from '../Button'
import styles from './index.scss'
import classNames from 'classnames';
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
  topRadius?: boolean
}
const DataPicker: React.FC<IProps> = props => {
  const {
    data,
    visible, closable,
    btnsPosition, value, onCancel, onOk, okText, cancelText,
    step, suffixs, topRadius
  } = props
  const [_value, set_value] = useState([null, null])
  const [_datas, set_datas] = useState<Array<IPickerRelatedItem[]>>([[], []])
  useEffect(() => {
    if (Array.isArray(suffixs) && suffixs.length === 2) {
      set_datas([genHours(suffixs[0]), genMinutes(step, suffixs[1])])
    } else {
      set_datas([genHours(), genMinutes(step)])
    }
  }, [visible, step])

  const onChange = useCallback(
    (value: any) => {
      console.log(value);

      set_value(value)
    },
    [],
  )

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
  const handleCloseModal = useCallback(
    () => {
      if (closable && onCancel) {
        onCancel()
      }
    },
    [closable, onCancel],
  )
  const renderPicker = useMemo(() => {
    return (
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
    )
  }, [_datas, onChange, _value])
  return (
    <>
      {
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
      }
    </>

  )
}


export default DataPicker