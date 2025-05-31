import React , { useState } from 'react';
import './SignUp.css';
import login from '../../assets/login.png';
import { Link } from 'react-router-dom'; 

const SignUp = () => {
     const [password, setPassword] = useState('1234'); 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="signup-page">
     
      <div className="signup-box">
           
      <h1>Sign Up</h1>
      <br/>
        <img className="LogImg"  src={login}  alt="" />
        <div>
            <form>
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />

            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password:</label>
            <input type="password" placeholder="Enter your password" 
             value={password}
            onChange={handlePasswordChange}/>
           
            <h4>I already have an account?{" "}
                    <Link to="/login">login</Link></h4>
            <Link to="/fitness">
            <button type="submit">Sign Up</button>
            </Link>

            
            </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
