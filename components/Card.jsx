import React, { useState } from "react";
import "../styles/Card.css"; // Corrected the import path

const Card = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card-container ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
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