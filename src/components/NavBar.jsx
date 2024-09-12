import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav>
      <nav className="navbar navbar-light bg-light"></nav>
      <Link className="navbar-brand" to="/recursos">Home</Link>
      <Link className="navbar-brand" to="/recursos/carnes">Carnes</Link>
      <Link className="navbar-brand" to="/recursos/aves">Aves</Link>
      <Link className="navbar-brand" to="/recursos/pescados">Pescados</Link>
      <Link className="navbar-brand" to="/recursos/pastas">Pastas</Link>
    </nav>
  );
}

export default NavBar;