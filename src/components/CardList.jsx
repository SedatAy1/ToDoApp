import React, { useState, useEffect } from 'react';
import Card from './Card';
import './CardList.css';

const CardList = () => {
  const [ships, setShips] = useState([]);
  const [selectedShip, setSelectedShip] = useState(null);
  const [nextPage, setNextPage] = useState('https://swapi.dev/api/starships/');

  useEffect(() => {
    fetchShips(nextPage);
  }, []);

  const fetchShips = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setShips([...ships, ...data.results]);
      setNextPage(data.next);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="card-list">
      {ships.map((ship, index) => (
        <Card key={index} ship={ship} onClick={() => setSelectedShip(ship)} />
      ))}
      {nextPage && <button onClick={() => fetchShips(nextPage)}>Load More</button>}
    </div>
  );
};

export default CardList;
