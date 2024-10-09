import React, {useState, useEffect} from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "..";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardContext from "../components/Card/CardContext";
import { Link } from "react-router-dom";
import '../pages/home.css';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const productsCollection = collection(db, "items");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsList);
      };
  
      fetchProducts();
    }, []);
  
    return (
        <>
        <CardContext.Provider>
        <h1>Productos</h1>
            <Card className="card" style={{ width: '18rem' }}>
                {products.map(product => (
                    <div key={product.id}>
                        <Card.Img variant="top" src={product.img} alt='foto' className="cardImage"/>
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>Precio: ${product.price}</Card.Text>
                        <Link to={`/detail/${product.id}`}>
                        <Button variant="primary">Ver detalle</Button>
                        </Link>
                        </Card.Body>
                    </div>
                ))}
            </Card>
      </CardContext.Provider>
      </>
    );
  };

export default Home;

/*<img src={item.img} alt={item.name}/>
<div className="item-info">
    <h3>{item.name}</h3>
    <p>Descripcion:{item.description}</p>
    <p>precio:${item.price}</p>
    </div>
    <Counter onAdd={onAdd}/>*/