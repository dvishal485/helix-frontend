import React from 'react'
import './style.scss'
import ToggleSwitch from './toggleSwitch.jsx' 


const Child_toggle = (props) => {
  return (
    <div className='child2'>
    <hr id="hr1"/>
    <h3>{props.s0}</h3>
    <div className='child2_inner'>
    <h4>{props.s1}</h4>
    <ToggleSwitch id={props.id} current_value={props.current_value}/>
    </div>
   
    <form >
    
    </form>
  </div>
  )
}

export default Child_toggle
