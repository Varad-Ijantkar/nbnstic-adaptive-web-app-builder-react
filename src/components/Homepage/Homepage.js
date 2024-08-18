import React from 'react';
import styles from './Homepage.css';
import image from './background3.jpg'

const Homepage = () => {
  return (
    <div className="background">
    <img src={image} alt="Image 1" className="image" />
    </div>
  );
};

export default Homepage;
