import React from 'react';
import './MenstrualCycle.css';
import menstrual from '../../assets/menstrual.png';

const MenstrualCycle = () => {
  return (
    <div className="menstrual-cycle-page">
      <h1>Track Your Menstrual Cycle</h1>
       <h3>Hey Sri,</h3>
       <div className="flex-container">
          <p>Track your cycle, <br/>
          understand your body, <br/> 
          &<br/>
           take control with confidence.</p>
          <img className="right-image" src={menstrual}  alt="" />
       </div>
        <br/>
         <h2>Period Calculator</h2>
         <br/>
      <div>
        <label>1. When did your last period start?</label>
        <input type="date" />
      </div>
      <br/>
      <div>
        <label>2. How many days did it last?</label>
        <input type="number" />
      </div>
      <br/>
      <div>
        <label>3. Average cycle length (days)</label>
        <input type="number" />
      </div>
      <br/>
      <button>See Results</button>
    </div>
  );
};

export default MenstrualCycle;
