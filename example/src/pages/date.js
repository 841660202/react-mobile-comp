import React, { useState } from 'react'
import dayjs from 'dayjs'
import 'react-mobile-comp/dist/styles.css'
import { Date, Navigationbar } from 'react-mobile-comp'
const DateDemo = (props) => {
  const [value, setValue] = useState(dayjs(dayjs().format('YYYY-MM-DD')).valueOf())

  const handleChange = (value) => {
    setValue(value)
  }
  const handleBack = () => {
    props.history.goBack();
  }
  return (
    <div>
      <Navigationbar centerText="DateDemo" leftVisible onLeftClick={handleBack} />
      <Date value={value} onChange={handleChange} />
      <br></br>
      <div style={{textAlign: 'center'}}>
      {dayjs(value).format('YYYY/MM/DD')}
      </div>
    </div>
  );
}

export default DateDemo;