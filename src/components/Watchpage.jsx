import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { closemenu } from '../Utils/appSlice'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'
// import Store from '../Utils/store'

const Watchpage = () => {
    // const params=useParams();
    const [searchparams]=useSearchParams()
    console.log(searchparams.get("v"));
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(closemenu())

    })
  return (
    <div className='flex flex-col w-full'>
    <div className='px-5 flex'>
    <div>
    <iframe width="1100" height="700" src={"https://www.youtube.com/embed/"+ searchparams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className='w-full'>
      <LiveChat/>
    </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default Watchpage