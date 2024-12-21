import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`card-container ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card">
        <div className="card-front">
          {frontContent}
        </div>
        <div className="card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default Card;