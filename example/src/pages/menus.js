import React from 'react'
import { Navigationbar, Item } from 'react-mobile-comp'
const menus = [
  { text: 'home', path: '/home' },
  { text: 'detail', path: '/detail' },
  { text: 'timePicker', path: '/timePicker' },
  { text: 'dataPicker', path: '/dataPicker' },
  { text: 'actionSheet', path: '/actionSheet' },
  { text: 'date', path: '/date' },
  { text: 'datePicker', path: '/datePicker' },
  { text: 'switch', path: '/switch' },
  { text: 'alert', path: '/alert' },
  { text: 'toast', path: '/toast' },
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