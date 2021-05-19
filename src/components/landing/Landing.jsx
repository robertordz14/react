import React from 'react';
import './Landing.css';

const Landing = () => {
  return (
    <div className="Landing">
      <div className="Landing-left">
        <div className="Landing-image-wrapper">
          <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/006fcb05af1f7827a2cc1678c36693762457a68e_full.jpg" alt="" />
        </div>

        <h2>Roberto Rodriguez</h2>
        
      </div>
      
      <div className="Landing-right">
        <p>
        I have 20 years old, my favorite color is red and my favorite sport is basketball
        </p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default Landing;
