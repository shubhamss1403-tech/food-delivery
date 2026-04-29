import React from 'react'
import { assets } from '../Assests/assets'
import './Fooditem.css'
import { StoreContext } from '../context/Contextapi';
import { useContext } from 'react';


function Fooditem({id, name, price, image, description}) {
     const {cardItems,addToCard,removeFromCard} =  useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image} alt=""/>
           {
             !cardItems[id]
             ? <img onClick={()=>addToCard(id)}  src={assets.add_icon_white} alt="" />
             : <div>
                <img onClick={()=>removeFromCard(id)}  src={assets.remove_icon_red} alt="" />
               <p>{cardItems[id]}</p>
                <img onClick={()=>addToCard(id)}  src={assets.add_icon_green} alt="" />
                </div>
            
           }
        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt="rating" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default Fooditem