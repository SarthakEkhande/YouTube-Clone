import React from 'react'

const Button = (props) => {
    const {name}=props
  return (
    <div className='px-5 py-2 m-2 font-bold bg-gray-200 rounded-lg hover:bg-black hover:text-white '>
        <button className=' '>{name}</button>
    </div>
  )
}

export default Button