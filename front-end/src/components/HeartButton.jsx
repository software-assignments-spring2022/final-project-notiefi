import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const HeartButton = props => {
  const router = useRouter();

  const [liked, setLiked] = useState(false)
  const [fill, setFill] = useState("none")

  const handleClick = ev => {
    ev.preventDefault();
    const nextLiked = liked ? false : true;
    const nextFill = fill === "none" ? "currentColor" : "none"
    setLiked(nextLiked)
    setFill(nextFill)
  }

  return (
    <button onClick={handleClick}>
      {liked ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill={fill} 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}>
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ) : (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={2}>
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )}
    </button>
  );
}

HeartButton.propTypes = {};
export default HeartButton;