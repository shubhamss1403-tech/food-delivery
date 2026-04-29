import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../context/Contextapi'
import Fooditem from './Fooditem';

function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'>

        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>{
           if(category === "all" || item.category === category){
              return(
                <Fooditem key={index} id={item._id} name={item.name} price={item.price} image={item.image} description={item.description} />
              )
            }
          })}
        </div>
    </div>
  )
}

export default FoodDisplay