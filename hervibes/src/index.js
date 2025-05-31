// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";  // Import the ErrorBoundary

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

