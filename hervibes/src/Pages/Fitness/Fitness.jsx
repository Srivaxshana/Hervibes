import React from 'react';
import './Fitness.css';
import fitness from '../../assets/fitness.png';
import walking from '../../assets/walking.png';
import yoga from '../../assets/yoga.png';
import warmup from '../../assets/warmup.png';
import squats from '../../assets/squats.png';

const Fitness = () => {
  return (
    <div className="fitness-page">
      <h1>Track Your Fitness</h1>
      <h3>Hey Sri,</h3>
      <div className="flex-container">
      <img className="left-image" src={fitness}  alt="" />
      <p>Strong, <br/>
      confident & <br/>
      unstoppable – <br/> 
      your fitness journey starts here</p>
      </div>
        <br/><br/>
      <h2>Today Workout</h2>
      <div className="workout-options">
        <div>
            <img className="image-style" src={walking}  alt="" />
            Walking
        </div>
        <div>
            <img className="image-style" src={yoga}  alt="" />
            Yoga
        </div>
        <div>
            <img className="image-style" src={warmup}  alt="" />
            Warmup
        </div>
        <div>
            <img className="image-style" src={squats}  alt="" />
            Squats
        </div>
      </div>
    </div>
  );
};

export default Fitness;
