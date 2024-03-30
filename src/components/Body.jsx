import React from 'react'
import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import SidebarComponent from './SidebarComponent'
import Watchpage from './Watchpage'

const Body = () => {
  return (
    <div className='flex '>
        <SidebarComponent/>
       
          <Outlet/>
          </div>
  )
}

export default Body