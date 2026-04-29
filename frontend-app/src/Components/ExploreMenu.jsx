import React from 'react'
import { menu_list } from '../Assests/assets'
import './Exploremenu.css'


   function ExploreMenu({category, setCategory}) {
   return (
          <div className='explore-menu' id='explore-menu'>
          <h1> Explore your  Menu</h1>
         <p className='explore-menu-text'>Discover our wide range of delicious dishes, carefully crafted to satisfy your taste buds. Whether you're in the mood for something spicy or mild, we have something for everyone.</p>
         <div className='explore-menu-list'>
            {menu_list.map((item,index) => {
               return(
                    <div onClick={()=>setCategory(prev=>prev === item.menu_name ? "all" : item.menu_name)}  key={index} className='explore-menu-list-item'>
                     <img  src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
               )
            })}
         </div>
        </div>
      
  )
}

export default ExploreMenu