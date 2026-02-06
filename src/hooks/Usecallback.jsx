import React, { useCallback, useState } from 'react'

const Usecallback = () => {
    const[state, setState] = useState(2)

    const handleClick = useCallback(()=>{
        setState(state * 2)
    })
  return (
    <div>Usecallback
        <h1>{state}</h1>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Usecallback