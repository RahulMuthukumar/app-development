import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Log from './Login/login';
 import Sig from './Signup/Signup';
import LandingPage from './landingpage';
import ContactForm from './dashboard/Contact';
import HomePage from './Landing/Home';
import Nav1 from './dashboard/dash1';
import PolicyDetailsPage from './dashboard/dash/PolicyPrice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
