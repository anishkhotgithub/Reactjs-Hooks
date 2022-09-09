import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const ExampleUseEffect = () => {
    const [data,setData]=useState("") 
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email)
        })
    })
  return (
    <div>
      Hello world<br/>
      Email:{data}
    </div>
)
}

export default ExampleUseEffect
