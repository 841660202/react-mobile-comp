import React, {useState} from 'react';
import {Switch} from 'react-mobile-comp'
export default ()=>  {
  const [checked, setChecked] = useState(false)
  return (
    <Switch checked={checked} onChange={(v)=>setChecked(v)}/>
  )
}
