import { Route, Routes } from "react-router-dom";
import React from 'react';
import Error from "./pages/Error";
import Home from "./pages/Home";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartDetail from "./components/Cart/Cart";
import CartContextProvider from "./components/CartContext/CartContextProvider";

const App = () => {
  return (
    <div>
      <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="detail/:id"  element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartDetail/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
