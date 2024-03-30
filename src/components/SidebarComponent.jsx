import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
    const ismenuopen=useSelector(store=>store.app.ismenuOpen)

    //early written pattern
    if(!ismenuopen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
     <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/watch">watchpage</Link></li>
            <li><Link>Videos</Link></li>
            <li><Link>Live</Link></li>
            
        </ul>
       <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default SidebarComponent