import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const ExampleUseEffect2 = () => {
    const [data,setData]=useState("");
    const [count,setCount]=useState("");
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].email)
            console.log("Api is called");
        })
    },[])
  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={()=>{
            setCount(count+1);
        }}
      >
        Increment 
      </button>
    </div>
  )
}

export default ExampleUseEffect2
