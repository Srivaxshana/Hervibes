import React from 'react';
import './Home.css';
import homeimage1 from '../../assets/home image1.png';
import fitnesstracking from '../../assets/fitness tracking.png';
import mentalwellness from '../../assets/mental wellness.png';
import nutritiontracking from '../../assets/nutrition tracking.png';
import menstrualcycle from '../../assets/menstrual cycle.png';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="home-page">
      <header>
          <div className="flex-container">
            <h1>Empowering <br/>
               Women to Live <br/>
               Healthier <br/>
                Lives</h1>
            <div className="auth-buttons1">

                <br/> <br/><br/><br/><br/><br/><br/><br/>
            <Link to="/login">
            <button className="login-btn">Log In</button>
            </Link>
            </div>
            <img className="right-image" src={homeimage1}  alt="" />
         </div>

          <br/>
          <br/>
          <br/>
        <div className="auth-buttons2">
          <span className='account'>If you don’t have an account</span>
        <Link to="/signup">
          <button className="signup-btn">Create an account</button>
        </Link>
        </div>
        
      </header>
      
      <section className="features-overview">
        <h2>Features Overview</h2>
        <div className="feature-cards">

          <div className="feature-card"> 
            <img className="image-style" src={fitnesstracking}  alt="" />
             Fitness Tracking
          </div>

          <div className="feature-card">
            <img className="image-style" src={mentalwellness}  alt="" />
            Mental Wellness
          </div>

          <div className="feature-card">
             <img className="image-style" src={nutritiontracking}  alt="" />
            Nutrition Tracking
          </div>

          <div className="feature-card">
            <img className="image-style" src={menstrualcycle}  alt="" />
            Menstrual Cycle
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
