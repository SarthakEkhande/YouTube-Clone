import { useState } from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Demo from './components/Demo'
import Demo2 from './components/Demo2'
import Header from './components/Header'
import MainContainer from './components/MainContainer'
import Watchpage from './components/Watchpage'
import Store from './Utils/store'

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element: <MainContainer/>
   },
   {
    path:"watch",
    element: <Watchpage />
   },
   {
    path:"demo",
    element:<><Demo/><Demo2/></> 
   },
   {
   path:"/demo2",
   element:""
   }
]
}
])

function App() {  
  const [count, setCount] = useState(0)


  //body
  //header
  //Body
  //sidebar
  //menuitems
  //maincontainer
  //buttonlist
  //videocontainer
  //videocard

  return (
    <Provider store={Store}>
      <>
    
    <p className="">
      <Header/>

   <RouterProvider router={appRouter}/>
    </p>
  </>
    </Provider>
    
  )
}

export default App
