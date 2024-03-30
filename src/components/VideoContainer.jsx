import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Youtube_Videos_API } from '../Utils/constants';
import VideoCard,{RedBorderVideoCard} from './VideoCard';

const VideoContainer = () => {
  const [Videos,setVideos]=useState([])

  useEffect(()=>{

  getVideos();
  },[])
  const getVideos=async()=>{
    const data=await fetch(Youtube_Videos_API)
    const json=await data.json()
    // console.log(json.items);
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap gap-2'>
    {Videos[0] && <RedBorderVideoCard videoinfo={Videos[0]}/>}
      {/* <VideoCard videoinfo={Videos[0]}/> */}
      {Videos.map(video=>(
        <Link key={video.id}  to={"/watch?v=" + video.id}><VideoCard  videoinfo={video}/></Link>))}
    </div>
  )
}

export default VideoContainer