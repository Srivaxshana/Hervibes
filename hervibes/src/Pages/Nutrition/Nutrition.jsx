import React from 'react';
import './Nutrition.css';
import nutrition from '../../assets/nutrition.png';

const Nutrition = () => {
  return (
    <div className="nutrition-page">
       <h1>Track Your Nutrition</h1>
      <h3>Hey Sri,</h3>

      <div className="flex-container">
            <img className="left-image" src={nutrition}  alt="" />
      <p>Strong girls eat smart – <br/>
      balance, energy, and <br/>
      confidence in every bite.</p>
      </div>
      <h2>Today Meal</h2>
      <div>
        <label className="Scale"> 1. Breakfast -</label>
        <select>
          <option>Idly</option>
          <option>Dhosai</option>
        </select>
      </div>
      <div>
        <label className="Scale">2. Lunch -</label>
        <select>
          <option>Rice</option>
          <option>veg salad</option>
        </select>
      </div>
      <div>
        <label className="Scale">3. Dinner -</label>
        <select>
          <option>Pittu</option>
          <option>String hoppers</option>
        </select>
      </div>

          <div>
        <label className="Scale">3. Water(litter) -</label>
        <select>
          <option>1</option>
          <option>1.5</option>
          <option>2</option>
          <option>2.5</option>
          <option>3</option>
        </select>
      </div>
            <button>Submit</button>
           
      <br/>
      <br/>
      <div>
        <p>🫗Drink More Water!</p>
      </div>

      
    </div>
  );
};

export default Nutrition;
