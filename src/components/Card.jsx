import React from 'react';
import './Card.css';

const Card = ({ ship, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h2>{ship.name}</h2>
      <p>Model: {ship.model}</p>
      <p>Max Speed: {ship.max_atmosphering_speed}</p>
    </div>
  );
};

export default Card;
