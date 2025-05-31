import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='Logo'/>
        <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/fitness">Fitness</Link></li>
            <li><Link to="/mental-wellness">Mental Wellness</Link></li>
            <li><Link to="/nutrition">Nutrition</Link></li>
            <li><Link to="/menstrual-cycle">Menstrual Cycle</Link></li>
            {/* <li><Link to="/profile">Profile</Link></li> */}
            <li><Link to="/login">Login</Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar