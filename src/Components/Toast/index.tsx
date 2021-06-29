import React, { Fragment }  from 'react'
import styles from './index.scss'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
let timer: any = null
class Toast extends React.Component {
  static info(msg: string | "info", timeout: number = 2000) {
    init()
    setTime(timeout)
    ReactDOM.render(<Fragment>
      <div>{msg}</div>
    </Fragment>, document.getElementById('dark-toast'));
  }
  static success(msg: string | "success", timeout: number = 2000) {
    init()
    setTime(timeout)
    ReactDOM.render(<Fragment>
      <i className={classnames(styles.icon, styles.iconSuccess)} style={{color: '#00DBB4'}}></i>
      <div>{msg}</div>
    </Fragment>, document.getElementById('dark-toast'));
  }
  static fail(msg:string, timeout: number = 2000) {
    init()
    setTime(timeout)
    ReactDOM.render(<Fragment>
      <i className={classnames(styles.icon, styles.iconFail)} style={{color: 'red'}}></i>
      <div>{msg}</div>
    </Fragment>, document.getElementById('dark-toast'));
  }
  static warning(msg: string | "warning", timeout: number = 2000) {
    init()
    setTime(timeout)
    ReactDOM.render(<Fragment>
      <i className={classnames(styles.icon, styles.iconWarn)} style={{color: 'orange'}}></i>
      <div>{msg}</div>
    </Fragment>, document.getElementById('dark-toast'));
  }
  static loading(msg: string | "loading", status: boolean) {
    init()
    setLoading(status)
    ReactDOM.render(<Fragment>
      <i className={classnames(styles.icon, styles.iconLoading)}></i>
      <div>{msg}</div>
    </Fragment>, document.getElementById('dark-toast'));
  }
}
function setLoading(status: boolean) {
  let dark_toast: any = document.getElementById('dark-toast')
  if (status)
    dark_toast.style.display = "block"
  else
    dark_toast.style.display = "none"
}
function init() {
  clearTimeout(timer)
  let dark_toast = document.getElementById('dark-toast')
  if (dark_toast) {
    dark_toast.style.display = "block"
  } else {
    let div = document.createElement("div")
    div.setAttribute("id", "dark-toast")
    document.body.appendChild(div);
  }
}
function setTime(timeout: number) {
  timer = setTimeout(() => {
    let dark_toast = document.getElementById('dark-toast')
    if (dark_toast) {
      dark_toast.style.display = "none"
    }
  }, timeout)
}
export default Toast


