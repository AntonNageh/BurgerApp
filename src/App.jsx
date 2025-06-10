import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Notfound from './Components/Notfound/Notfound'
import CustomizedOrder from './Components/CustomizedOrder/CustomizedOrder'
import CustomizedOrderProvider from './Context/CustomizedOrderContext'
import Contact from './Components/Contact/Contact'
import Cart from './Components/Cart/Cart'
import Orders from './Components/Orders/Orders'


function App() {
  let routes = createBrowserRouter([
    {path:"" ,  element: (
      <CustomizedOrderProvider>
        <Layout />
      </CustomizedOrderProvider>
    ) , children:[{
      index:true , element:<Home/>},
      {path:"*" , element:<Notfound/>},
      {path:"customizedorder" , element:<CustomizedOrder/>},
      {path:"contact" , element:<Contact/>},
      {path:"cart" , element:<Cart/>},
       {path:"orders" , element:<Orders/>}
    ]}
  ])

  return (
    <>
   
      <RouterProvider router={routes}></RouterProvider>
    
    </>
  )
}

export default App
