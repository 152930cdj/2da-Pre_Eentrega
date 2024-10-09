import React, {useState, useEffect} from "react";
import Counter from "../Counter/Counter";
import { Card } from "react-bootstrap";
import CardContext from "../Card/CardContext";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";


const ItemDetail = ({item, onAdd}) => {
    const [product, setProducts] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const docRef = doc(db, "items", id)
        getDoc(docRef)
        .then((snapshot) => {
            setProducts({
                id: snapshot.id,
                ...snapshot.data()
            })
        })
    }, [id])
    
    return(
        <>
        <CardContext.Provider>
        <Card className="card"style={{ width: '18rem' }}>
                <Card.Title>{product.name}</Card.Title>
            <Card.Img variant="top" src={product.img} alt='foto' className='cardImage'/>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Precio: ${product.price}</Card.Text>
                <Counter onAdd={onAdd}/>
            </Card.Body>
        </Card>
        </CardContext.Provider>
        </>
    )
} 
export default ItemDetail