import React, { useState,useEffect,useCallback,useMemo} from 'react'

const Demo = () => {
    const [data, setData] =useState(0);
    const [data1, setData1] = useState(1);
    const [data2, setData2] = useState(0);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>console.log(data))
    })
    const handleClick = useCallback(()=>
        setData1(data1 * 2)
    )
    const squre= useMemo(()=> 
        data2*data2
    )
    
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>setData(data+1)}>add</button>
        <h1>{data1}</h1>
        <button onClick={handleClick}>multiply using callback</button>
        <h1>{squre}</h1>
        <input type='number' value={data2} onChange={(e)=>setData2(Number(e.target.value))}></input>
    </div>
  )
}

export default Demo