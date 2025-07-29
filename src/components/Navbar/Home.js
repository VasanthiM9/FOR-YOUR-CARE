import React from 'react';
import Background from '../../assets/background.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-left">
        <h1>Welcome to <span className="highlight">For Your Care</span></h1>
        <p>Your trusted digital healthcare assistant.</p>
      </div>
      <div className="home-right">
        <img src={Background} alt="Healthcare" className="home-image" />
      </div>
    </div>
  );
};

export default Home;
