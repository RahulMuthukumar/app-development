import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <div className="contae">
          <a href="/About" className="logo"><b>Online Voting And Polling System</b></a>
          <ul className="links">
            <a href='/Home'><li>Home</li></a>
            <a href="/About"><li>About Us</li></a>
            <a href='/Feed'><li>Feedback</li></a>
            <a href='/Login'><li>Login</li></a>
          </ul>
        </div>
      </header>
      <div className="content">
        <div className="contae">
          <div className="info">
            <h1>Of the people, By the People, For the People</h1>
            <p>A casting vote is a vote that someone may exercise to resolve a tied vote in a deliberative body....</p>
            <a href='/Moreinfo'><button>More Info</button></a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
