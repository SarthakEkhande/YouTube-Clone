import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Demo2 = () => {
    let x=10;

   const ref=useRef(0)
   console.log(ref);
   console.log("rendering...");

    const [Y,setY]=useState(0)
    console.log(x);
  const i=useRef(null);
    useEffect(()=>{
  i.current=  setInterval(() => {
        console.log("namaste react",Math.random());
        
      }, 1000);
      return ()=> clearInterval(i.current)

    },[])
  return (
    <div className='m-4 p-2 border border-black w-96 h-96'>
    <div>
    <button className='border border-black p-2 m-2 bg-green-500 rounded-xl ' onClick={()=>{x=x+1 , console.log("X",x)}}> increse x</button>
        <span className='font-bold text-xl'>Let : {x}</span>
        <button className='border border-black p-2 m-2 bg-green-500 rounded-xl ' onClick={()=>{setY(Y+1) , console.log("X",Y)}}> increse Y</button>
        <span className='font-bold text-xl'>Let : {Y}</span>
        <button className='border border-black p-2 m-2 bg-green-500 rounded-xl ' onClick={()=>{ref.current=ref.current+1 , console.log("Ref",ref.current)}}>Ref</button>
        <span className='font-bold text-xl'>Ref:{ref.current}</span>

        <button className='bg-red-900 p-4 m-4 text-white font-bold border border-black' onClick={()=>{
          clearInterval(i.current)
        }}>Stop Printing</button>
        
    </div>
    </div>
  )
}

export default Demo2