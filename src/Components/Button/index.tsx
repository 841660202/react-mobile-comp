// Button.js
import React from 'react';
import css from './index.scss';
import classnames from 'classnames'
interface ButtonProps {
  children: any;
  style: any;
  onClick: () => void
}
const Button = (props: ButtonProps) => {
  const { children, style, onClick } = props
  return (
    <button
      className={classnames(css.button)}
      style={style}
      onClick={onClick}
    >{children}</button>
  )
};
export default Button