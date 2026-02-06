import React, { useState } from 'react'

const Usestate = () => {
    const[count, setCount] = useState(1)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count + 1)}>Submit</button>
    </div>
  )
}

export default Usestate