import React from 'react'
import { StoreContext } from '../context/Contextapi'
import { Navigate, useNavigate } from 'react-router-dom'

import { useContext } from 'react'
import './Card.css'

function Card() {
   const {cardItems,food_list,removeFromCard,getTotalItems} = useContext(StoreContext)
   const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
            <p>items</p>
            <p>title</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
           <p>remove</p>
        </div>
        <br />
        <hr />
        <div>
           {
                   food_list.map((item,index) => {
                      if(cardItems[item._id]>0){
                              
                       return(
                             <div key={index}>
                               <div className='cart-items-title cart-items-item'>
                                 <img src={item.image} alt="" />
                                 <p>{item.name}</p>
                                 <p>${item.price}</p>
                                 <p>{cardItems[item._id]}</p>
                                 <p>${item.price * cardItems[item._id]}</p>
                                 <p onClick={()=>removeFromCard(item._id)} className='cross'>x</p>
                               </div>
                               <hr />
                             </div>
                       )
                                  
                      }
                   })
           }
           </div>
                     
                        
              


      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalItems() * 10}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalItems() * 10 + 2}</b>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card