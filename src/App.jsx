import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='container mx-auto px-4'>
      <Navbar/>
      <Outlet/>
    </div>
    </>
  )
}

export default App