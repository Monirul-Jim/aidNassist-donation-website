'use client'
import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Star = ({ value }) => {
  const filledStars = Math.floor(value);
  const hasHalfStar = value - filledStars >= 0.5;

  const starElements = [];

  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      starElements.push(<FaStar key={i} className="inline text-amber-300" />);
    } else if (hasHalfStar && i === filledStars) {
      starElements.push(<FaStarHalf key="half" className="inline text-amber-300" />);
    } else {
      starElements.push(<FaStar key={i} className="inline text-gray-500" />);
    }
}

  return <div className="star-container">{starElements}</div>;
};

export default Star;
