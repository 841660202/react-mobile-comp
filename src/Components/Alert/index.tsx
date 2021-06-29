import  React from 'react'
import  ReactDOM from 'react-dom'
import { Fragment } from "react"
interface IConfirm {
  title?: string,
  content?: any,
  onCancel?: () => void,
  onConfirm?: () => void,
  cancelText?: string;
  okText: string;
  hideCancel?: boolean;
}
class Alert extends React.Component {
  static confirm(params: IConfirm) {
    const {
      title,
      content,
      onCancel,
      onConfirm,
      cancelText,
      okText,
      hideCancel,
    } = params
    init()
    const handleCancel = () => {
      onCancel && onCancel()
      destory()
    }
    const handleOk = () => {
      onConfirm && onConfirm()
    }
    ReactDOM.render(<Fragment>
      <div className="alert-wrap">
        <div className="tuya-alert-title">{title}</div>
        <div className="tuya-alert-content">{content}</div>
        <div className="tuya-alert-footer">
          {
            !hideCancel && <button
              className="tuya-alert-footer-cancel"
              onClick={handleCancel}>
              {cancelText || '取消'}
            </button>
          }
          <button className="tuya-alert-footer-ok" onClick={handleOk}>{okText || '继续'}</button>
        </div>
      </div>
    </Fragment>, document.getElementById('tuya-alert'));
  }
  static close() {
    destory()
  }
}
function init() {
  let tuya_alert = document.getElementById('tuya-alert')
  if (tuya_alert) {
    tuya_alert.style.display = "block"
  } else {
    let div = document.createElement("div")
    div.setAttribute("id", "tuya-alert")
    document.body.appendChild(div);
  }
}
function destory() {
  let tuya_alert = document.getElementById('tuya-alert')
  if (tuya_alert) {
    document.body.removeChild(tuya_alert);
  }
}
export default Alert


