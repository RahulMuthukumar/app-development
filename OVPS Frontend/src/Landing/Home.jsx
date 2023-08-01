import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Welcome to Online Votting Portal</h1>
      <p>The Ignorance Of One Voter in a democracy impairs the security of all</p>
      <a href='/signup'><button className="cta-btn">Register Now</button></a>
    </div>
  );
};

export default HomePage;
