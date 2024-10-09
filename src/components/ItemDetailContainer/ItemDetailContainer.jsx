import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import CartContext from "../CartContext/CartContext";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id} = useParams()
    const { addItem } = useContext(CartContext)

    const onAdd = (q) => {
        addItem(item,q)
    }

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, "items", id)
        getDoc(docRef)
        .then((snapshot) => {
            setItem({
                id: snapshot.id,
                ...snapshot.data()
            })
        })
    }, [id])
    return(
        <div>{<ItemDetail item={item} onAdd={onAdd}/>}</div>
    )
}
 export default ItemDetailContainer