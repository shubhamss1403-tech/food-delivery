import React from 'react'
import { assets } from '../Assests/assets'
import { NavLink} from 'react-router-dom'


function Navbar({ setShowLogin }) {
  
   

  
  return (
    <nav className="flex items-center justify-between py-6 mt-4 bg-transparent shadow-none z-50 w-[85%] mx-auto box-border">
      {/* Left: Logo */}
      <div className="flex items-end justify-start pb-2 md:ml-0">
      <NavLink to="/"> <img src={assets.logo} alt="Logo" className="h-6 md:h-8 w-auto cursor-pointer" /></NavLink>
      </div>
      {/* Center: Menu (Hidden on mobile) */}
      <ul className="hidden md:flex gap-8 list-none text-lg font-medium text-gray-700 flex-1 justify-center items-center pb-2">
        <li className="hover:text-orange-500 cursor-pointer transition-colors">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition-colors">
          <a href="#explore-menu">Menu</a>
          
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition-colors">
      <a href='#app-download'>Mobile App</a>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition-colors">
        <a href='#footer'>Contact Us</a>
        </li>
        <li className="hover:text-orange-500 cursor-pointer transition-colors">
          <NavLink to="/foodapi">Food API</NavLink>
        </li>
      </ul>
      {/* Right: Icons and Button */}
      <div className="flex items-center justify-end gap-3 md:gap-4 pb-2">
        <img src={assets.search_icon} alt="Basket" className="h-5 md:h-6 w-5 md:w-6 cursor-pointer hover:scale-110 transition-transform" />
         <NavLink to="/card"> <img src={assets.basket_icon} alt="Search" className="h-5 md:h-6 w-5 md:w-6 cursor-pointer hover:scale-110 transition-transform" /></NavLink>
        <button className="md:ml-4 px-3 md:px-5 py-1 md:py-2 bg-orange-500 text-white rounded-full text-sm md:text-base font-semibold shadow hover:bg-orange-600 transition-colors" onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </nav>
  )
}

export default Navbar