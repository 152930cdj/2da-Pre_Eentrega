import React from 'react';
import { Link } from 'react-router-dom';

function Item({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <Link to={`/item/${item.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
