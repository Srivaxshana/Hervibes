import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Fitness from './Pages/Fitness/Fitness'
import MentalWellness from './Pages/MentalWellness/MentalWellness'
import Nutrition from './Pages/Nutrition/Nutrition'
import MenstrualCycle from './Pages/MenstrualCycle/MenstrualCycle'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/mental-wellness" element={<MentalWellness />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/menstrual-cycle" element={<MenstrualCycle />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;