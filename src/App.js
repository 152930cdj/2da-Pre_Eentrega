import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Carnes from "./pages/Carnes";
import Aves from "./pages/Aves";
import Pescados from "./pages/Pescados";
import Pastas from "./pages/Pastas";
import Productos from "./components/Productos";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Item from "./components/Item";
import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recursos" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="carnes" element={<Carnes/>}/>
          <Route path="aves" element={<Aves/>}/>
          <Route path="pescados" element={<Pescados/>}/>
          <Route path="pastas" element={<Pastas/>}/>
          <Route path="productos/:productoName"  element={<Productos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
