import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import './style.css'
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {

  return (
    <nav>
      <nav className="navbar navbar-dark bg-dark">
      <Navbar.Brand href={'/'} className="brand">RestoSoft</Navbar.Brand>
      <NavLink className="navbar-brand" to={'/category/carnes'}>Carnes</NavLink>
      <NavLink className="navbar-brand" to={'/category/aves'}>Aves</NavLink>
      <NavLink className="navbar-brand" to={'/category/pescados'}>Pescados</NavLink>
      <NavLink className="navbar-brand" to={'/category/pastas'}>Pastas</NavLink>
      <NavLink className="navbar-brand" to={'/cart'}><span><CartWidget/></span>
      </NavLink>
      
      </nav>
    </nav>
  );
}

export default NavBar;