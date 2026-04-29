import React from 'react'
import Header from '../Components/Header'
import ExploreMenu from '../Components/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../Components/Fooddisplay';
import Appdownload from '../Components/Appdownload';


   function Home() {
       const [category, setCategory] = useState("all");
  

  return (
    <div>
          
        <Header />
           <ExploreMenu   category={category}  setCategory={setCategory}/>
          <FoodDisplay  category={category}  />
          <Appdownload />
    
    </div>
  )
}

export default Home