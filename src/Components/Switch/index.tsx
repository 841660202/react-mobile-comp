// Switch.js
import React from 'react';
import { motion } from 'framer-motion'
import styles from './index.scss'
import classnames from 'classnames';
interface SwitchProps {
  children: any;
  checked: boolean;
  disabled: boolean;
  onChange: (v: boolean) => void
}
const Switch = (props: SwitchProps) => {
  const { checked, onChange, disabled } = props
  const handleChange = (e: any) => {
    e.stopPropagation()
    if (disabled) return
    onChange && onChange(!checked)
  }
  return (
    <motion.div className={classnames(styles.switchWrap, {
      [styles.active]: checked,
      [styles.disabled]: disabled,
    })} onClick={handleChange}>
      <motion.div
        className={classnames(styles.switchIcon, {
          [styles.disabled]: disabled,
        })}
        onClick={handleChange}
        animate={{
          x: checked ? 26 : 0,
        }}
      >
      </motion.div>
    </motion.div>
  );
}

export default Switch