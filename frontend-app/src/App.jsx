import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Card from './Pages/Card'
import Placeorder from './Pages/Placeorder'
import Footer from './Components/Footer'
import Menu from './Pages/Menu'
import { useState } from 'react'
import Login from './Components/Login'
import Foodapi from './Components/Foodapi'
 

 function App() {
      const [showlogin, setShowLogin] = useState(false);

  return (
    <div>
      {
        showlogin?<Login setShowLogin={setShowLogin} />:
        <> </>
      }
      
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/card" element={<Card/>} />
           <Route path="/order" element={<Placeorder />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/foodapi" element={<Foodapi />} />
        
      </Routes>
      <Footer />
       
    </div>
  )
}

export default App