import { clearAllListeners } from '@reduxjs/toolkit'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addmessage } from '../Utils/ChatSlice'
import { generateRandomNames, generateRandomString } from '../Utils/Helper'
import ChatMessage from './ChatMessage'



const LiveChat = () => {
  const [LiveMessage,setLiveMessage]=useState("")
    const dispatch=useDispatch()
    const chatmessages=useSelector((store=>store.Chat.messages))
    console.log(chatmessages);
    
    
    useEffect(()=>{
        const i=setInterval(() => {
            //API Polling
        console.log("API Pooling");
        dispatch(addmessage({
            name:generateRandomNames(),
            message:generateRandomString(15)
        }))
            
        }, 3000);
        return ()=> clearInterval(i)
    },[])
  return (
    <div>
    <div className='w-full h-[700px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse '>
    {/* <ChatMessage name="Sarthak Ekhande" message="Hello guys"/> */}

        <div>
        {
            // Disclaimer: Don't use indexes as keys
            chatmessages.map((c, i) => (
                
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
  
       </div>

       

  
    </div>
    
    <form className='border border-black w-full p-2 m-2 rounded-lg' onSubmit={(E)=>{
      console.log("On form submitted")
      E.preventDefault( )
      dispatch(addmessage({
        name:"Sarthak Ekhande",
        message:LiveMessage
      }))
      clearAllListeners(addmessage)
    }}>
      <input className='px-2 border border-black p-1 w-56 mx-2  rounded-lg ' type="text" value={LiveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}/>
      <button className='w-16 border border-black p-1 m-1 rounded-lg bg-green-300'>Send</button>
    </form>
    </div>
    
  )
}

export default LiveChat