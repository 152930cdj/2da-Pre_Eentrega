import React from 'react';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <nav>
      <Link to="/">RestoSoft</Link>
      <Link to="/category/carnes">Carnes</Link>
      <Link to="/category/aves">Aves</Link>
      <Link to="/category/pescados">Pescados</Link>
      <Link to="/category/pastas">Pastas</Link>
    </nav>
  );
}

export default Navbar;