import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer';

const App = () => {

  const [menu, setMenu] = useState("technology");
  const [search, setSearch] = useState("");
  

  return (
    <>
      <div className='w-screen min-h-screen bg-white'>
        <Navbar setMenu={setMenu} setSearch={setSearch}/>
        <div className='mt-28'>
          <Outlet context={{ menu, search }} />
        </div>
        
      </div>
      
    </>
  )
}

export default App