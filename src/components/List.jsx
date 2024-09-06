import React from 'react';

const List = () => {
    return (
        <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
    Categorías
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a className="dropdown-item" href="carnes">Carnes</a></li>
    <li><a className="dropdown-item" href="#">Pescados</a></li>
    <li><a className="dropdown-item" href="#">Pastas</a></li>
    <li><a className="dropdown-item" href="#">Postres</a></li>
  </ul>
</div>

    );
  };

export default List;