import { useState } from "react";
import React from "react";

const Counter = ({onAdd, text = "Agregar producto al carrito", q = 1}) => {
    const [count, setCounter] = useState(q);

    const increment = () => {
        setCounter(count + 1);
    };

    const decrement = () => {
        if (count + 1) {
            setCounter(count - 1)
        }
    };

    return (
        <div className="counter-container">
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button className="add-to-cart" onClick={() => onAdd(count)}>
                {text}
            </button>

        </div>
    )
}

export default Counter