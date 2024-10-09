import { createContext, useState,useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../CartContext/CartContext';
import './CartWidget.css'

export const Boton = createContext();

const CartWidget = ({boton}) => {
  const {cart} = useContext(CartContext)

    const [contador, setContador] = useState(0)

  return (
    <Boton.Provider value={{contador, setContador}}>
    <div className="cart-widget">
      <FaShoppingCart/>
      <span>  {cart.length}</span>
      </div>
    </Boton.Provider>  
  );
};

export default CartWidget;
