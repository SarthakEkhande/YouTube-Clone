import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies}=data;
  return (
    <div className='flex bg-gray-100 p-2 rounded-lg'>
      <img className='w-12 h-12' src='https://avatars.githubusercontent.com/u/81583494?v=4'></img>
      <div className='px-3'>
      <h1 className='font-bold'>{name}</h1>
        <h3 className=''>{text}</h3>
        {/* <p>{replies}</p>     */}
      </div>
      
    </div>
  )
}

export default Comment