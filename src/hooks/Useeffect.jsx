import React, { useEffect } from 'react'

const Useeffect = () => {
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>console.log(data))
    })
  return (
    <div>Useeffect</div>
  )
}

export default Useeffect