import React from 'react';
import './MentalWellness.css';
import mental from '../../assets/mental.png';

const MentalWellness = () => {
  return (
    <div className="mental-wellness-page">
       <h1>Track Your Mental Wellness</h1>
       <h3>Hey Sri,</h3>
       <div className="flex-container">
      <p>Strong minds create <br/> strong lives – <br/>let's build yours together</p>
       <img className="right-image" src={mental}  alt="" />
      </div>
      <div >
        <label className="Scale">1. Mood Scale -</label>
       
        <select>
          <option>Happy</option>
          <option>Sad</option>
          <option>Angry</option>
          <option>Tired</option>
          <option>Neutral</option>
        </select>
       
      </div>
      <div>
         <br/>
        <label>2. Mood Description -</label>
       
        <input type="text" />
      </div>
       <button>Submit</button>
    </div>
  );
};

export default MentalWellness;
