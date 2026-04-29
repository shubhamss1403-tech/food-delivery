  import React from 'react'
  import { useState,useEffect } from 'react'
  import './Foodapi.css'

   

  function Foodapi() {
  const [show, setShow] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    console.log(data);

    setShow(data.recipes); // 👈 important fix
  }

  return (
    <div className="foodapi">
      <h2 className="foodapi-title">Popular Recipes</h2>
      <div className="foodapi-grid">
        {show.map((item) => (
          <div className="foodapi-card" key={item.id}>
            <img className="foodapi-image" src={item.image} alt={item.name} />
            <div className="foodapi-content">
              <h3>{item.name}</h3>
              <p className="foodapi-meta">Cuisine: {item.cuisine}</p>
              <p className="foodapi-meta">Rating: {item.rating}</p>
              <p className="foodapi-instructions">{item.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Foodapi;