import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const[data, setData] = useState(0)

    const square = useMemo(()=>{
        return data * data
    })
  return (
    <div>Usememo
        <h1>{square}</h1>
        <input type='number' value={data} onChange={(e)=>setData(Number(e.target.value))}></input>
    </div>
  )
}

export default Usememo