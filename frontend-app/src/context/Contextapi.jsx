import React, { useEffect } from 'react'
import { createContext } from 'react'
import { food_list } from '../Assests/assets';
import { useState } from 'react';

export const StoreContext = createContext(null);

 const StoreContextProvider = (props) => {
    const [cardItems, setCardItems] = useState({});
      

    const addToCard = (itemid) => {
         if(!cardItems[itemid]){
            setCardItems(prev => ({...prev, [itemid]: 1}))
         }else{
            setCardItems(prev => ({...prev, [itemid]: prev[itemid] + 1}))
         }

      }

      const removeFromCard = (itemid) => {
         setCardItems((prev) => ({...prev, [itemid]: prev[itemid] - 1
           
         }))
         
    }
       useEffect(() => {
   console.log(cardItems);
       },[cardItems])
      

       const getTotalItems = () => {
         let total = 0;
         for(let item in cardItems){
            total += cardItems[item]
         }
         return total;
      }

   const store = {
        food_list,
        cardItems,
        addToCard,
        removeFromCard,
         getTotalItems

   }


    return(
        <StoreContext.Provider  value={store}>
            {props.children}
        </StoreContext.Provider>
    )
 
 }

export default StoreContextProvider