// Button.js
import React from 'react';
import styles from './index.scss';
import classNames from 'classnames'

interface ButtonProps {
  children?: any;
  style?: any;
  onClick?: () => void;
  type?: 'primary'| 'default' | 'danger'
}
const Button = (props: ButtonProps) => {
  const { children, style, onClick, type } = props
  return (
    <button
      className={classNames(styles.button, {
        [styles.default]: type === undefined || 'default' === type,
        [styles.primary]: "primary" === type,
        [styles.danger]: 'danger' === type,
      })}
      style={style}
      onClick={onClick}
    >{children}</button>
  )
};
export default Button