import React from 'react'
import { Navigationbar, Item } from 'react-mobile-comp'
const menus = [
  // { text: 'home', path: '/home' },
  // { text: 'detail', path: '/detail' },
  { text: 'TimerPicker', path: '/timePicker' },
  { text: 'DataPicker', path: '/dataPicker' },
  { text: 'ActionSheet', path: '/actionSheet' },
  { text: 'Date', path: '/date' },
  { text: 'DatePicker', path: '/datePicker' },
  { text: 'Switch', path: '/switch' },
  { text: 'Alert', path: '/alert' },
  { text: 'Toast', path: '/toast' },
]
const Menus = (props) => {
  const handleClick = (item) => {
    props.history.push({
      pathname: item.path
    })
  }
  return (
    <div>
      <Navigationbar centerText="组件 demos" />
      {
        menus.map(item => (
          <Item
            key={item.path}
            leftText={item.text}
            rightVisible
            onClick={()=>handleClick(item)}>
          </Item>
        ))
      }



    </div>
  )
}
export default Menus