import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { findPrime } from '../Utils/Helper'

const Demo = () => {
    const [text,settext]=useState(0)
    const [isDarkTheme,setisDarkTheme]=useState(false)

    
    // console.log("rendering");

    const prime = useMemo(() => findPrime(text), [text]);

   
     
     

    
  return (
    <div className={'m-4 p-2 w-96 h-96 border border-black' + (isDarkTheme && " bg-gray-500" )}>

       <div>
           <button className='m-5 p-2 bg-green-500 rounded-lg' onClick={()=>setisDarkTheme(!isDarkTheme)}>Toggle</button>
       </div>
        <div>
            <input className='border px-2 border-black w-72' type="number" value={text} onChange={(e)=>settext(e.target.value)}/>
        </div>

        <div>
            <h1 className=' mt-4 font-bold text-xl'>Nth Prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo