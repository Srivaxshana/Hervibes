import React from 'react';
import './Login.css';
import login from '../../assets/login.png';
import { Link } from 'react-router-dom'; 

const Login = () => {
  return (
    <div className="login-page">
        <div className="login-box">
        <br/>
      <h1>Log In</h1>
      <img className="LogImg" src={login}  alt="" />
      <div>
        <input type="text" placeholder="Username" />
        <br/>
        <input type="password" placeholder="Password" />
        <br/>
        <br/>
        <h4>If you don’t have an account?{" "}
          <Link to="/signup">Create an account</Link></h4>
        
        <Link to="/fitness">
        <button>Log In</button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
