import React, { useContext, useState } from "react";
import CartContext from "../CartContext/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Form from "../Form/Form";

const CartDetail = () => {

    const [orderId, setOrderId] = useState('')
    const {cart,removeItem, getTotal, clear} = useContext(CartContext)

    const [buyer, setBuyer] = useState({
        name: "",
        email: ""
    })

    const [error, setError] = useState({
        name: "",
        email: ""
    })

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name] : e.target.value
        })
    }


    const submit = (e) => {
        e.preventDefault()
        const localError = {}
        if(!buyer.name) {
            localError.name = "El Nombre es oblitario"
        }
        
        if(!buyer.email) {
            localError.email = "El Email es oblitario"
        }

        if(Object.keys(localError).length === 0) {
            createOrder()
        }

        else {
            setError(localError)
        }
    }

    const createOrder = () =>{
        const purchase = {
            buyer,
            items: cart,
            total: getTotal(),
            date: new Date()
        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, purchase)
        .then(res => {setOrderId(res.id)
            clear()
        })
    }

    return(
        <div>
            <h1>Carrito</h1>
            <div className="cart-container">
                {cart.map((el) => (
                    <div key={el.id}>
                        <div>
                        <p>Producto: {el.name}</p>
                        <p>Cantidad: {el.quentity}</p>
                    </div>
                    <img src={el.img} alt={el.name} />
                    <button onClick={() => removeItem(el.id)}>Eliminar</button>
                    </div>
                ))}
            </div>

                <Form
                    handleChange={handleChange}
                    submit={submit}
                    formData={buyer}
                    error={error}
                />
                {
                    orderId && <p>Muchas Gracias Por Su Compra
                        Su ID de compra es el {orderId}
                    </p>
                }
        </div>
    )
}

export default CartDetail