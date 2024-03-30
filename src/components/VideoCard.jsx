import React from 'react'

const VideoCard = (props) => {
    const {videoinfo}=props;

    // console.log(videoinfo);
    const {snippet, statistics}=videoinfo
    const {channelTitle,title,thumbnails,channelId}=snippet
    // console.log(snippet);
  return (
    <div className='p-2 m-2 w-60 shadow-xl rounded-lg'>
    <img className='w-64 rounded-lg flex flex-row' src={thumbnails?.default?.url}/>
    {/* <video src={'https://www.youtube.com/watch?v='+ channelId } width="320" height="240" controls>
    
    </video> */}
    <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} Views</li>
    </ul>

    </div>
  )
}

export const RedBorderVideoCard=({videoinfo})=>{
  return(
    <div className='p-1 m-1 border border-black'>
      <VideoCard videoinfo={videoinfo}/>
    </div>
  )
}
export default VideoCard