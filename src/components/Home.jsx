// Home.jsx
import React from 'react';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <div className="full-viewport">
      <div className="left-section">
        <div className="title-section">
          <h1 className="large-title">Full Stack Developer</h1>
          <h6>
           
            Passionate Full Stack Developer creating seamless web solutions
            with expertise in front-end and back-end technologies.
           
          </h6>
          <div className="logo-section">
            {/* Use online URLs for logos */}
            <img src="/MongoDB_Logomark_SpringGreen.png" alt="MongoDB Logo" className="logo" />
            <img src="/icons8-express-js-50.png" alt="MongoDB Logo" className="logo" />
            <img src="/logo192.png" alt="MongoDB Logo" className="logo" />
            <img src="/icons8-node-js-48.png" alt="MongoDB Logo" className="logo" />
            <img src="/Java Symbol.png" alt="MongoDB Logo" className="logo" />
            <img src="/MySQL.png" alt="MongoDB Logo" className="logo" />
            {/* <img src="/python.png" alt="MongoDB Logo" className="logo" /> */}
            
            
            {/* Add more logo images as needed */}
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src="/20240108_084704-removebg.png" alt="My Large Photo" className="large-photo" />
      </div>
    </div>
  );
};

export default Home;
