import React, { useState } from 'react'
// import { Switch, Modal, BottomModal } from 'my-react-library'
import 'react-mobile-comp/dist/styles.css'
import { Switch, Navigationbar } from 'react-mobile-comp'
const SwitchDemo = (props) => {
  const [checked, setChecked] = useState(false)
  const handleBack =()=>{
    props.history.goBack();
  }
  return (
    <div>
      <Navigationbar centerText="SwitchDemo" leftVisible onLeftClick={handleBack}/>
      <Switch checked={checked} onChange={(v)=>setChecked(v)}/>
    </div>
  );
}

export default SwitchDemo;