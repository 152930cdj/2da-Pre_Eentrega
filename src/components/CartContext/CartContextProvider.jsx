import CartContext from "./CartContext"
import React from "react"
import { useState } from "react"


const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item,q) => {
        setCart([
            ...cart,
            {
            quentity: q,
            ...item
            }
        ])
    }

    const removeItem = (id) => {
        setCart(
            cart.filter((el) => el.id !==id)
        )
    }

    const clear = () => {
        setCart([])
    }

    const getTotal = () => {
        let total = 0;

        cart.forEach(item => {
          total += item.price * item.quantity;
        });
      
        return total;
      };

    const values = {
        cart,
        addItem,
        removeItem,
        clear,
        getTotal
    }

    return(
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider