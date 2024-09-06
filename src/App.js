import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import List from './components/List';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Ruta raíz que muestra el catálogo */}
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra plataforma!" />} />
          
          {/* Ruta para ver productos por categoría */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
        <List />
      </div>
    </Router>
  );
}

export default App;
