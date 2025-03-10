import React, { useState } from 'react';
import './style.css';

const Star = ({ rating, glowing, onSelect }) => {
  
  const handleClick = () => {
    onSelect(rating)
  }

  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div className={starClass} onClick={handleClick}></div>
  );
};

export default Star;