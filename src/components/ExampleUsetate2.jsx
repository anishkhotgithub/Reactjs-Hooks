import React from 'react'
import { useState } from 'react'

const ExampleUsetate2 = () => {
  const [inputValue,SetInpValue]=useState("Anish");
  let onChange=(event)=>{
    const newValue=event.target.value;
    SetInpValue(newValue)
  }
  return (
    <div>
      <input placeholder='Add something' onChange={onChange}/>
      {inputValue}
    </div>
  )
}

export default ExampleUsetate2
