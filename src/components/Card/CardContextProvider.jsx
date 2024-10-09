import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardContext from './CardContext';
import { Link } from 'react-router-dom';
import './style.css'


function CardContextProvider({item}) {

  return (
    <CardContext.Provider>
    <Card className="card"style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} alt='foto' className='cardImage'/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Card.Text>Precio: ${item.price}</Card.Text>
        <Link to={`/detail/${item.id}`}>
          <Button variant="primary">Ver detalle</Button>
        </Link>
      </Card.Body>
    </Card>
    </CardContext.Provider>
  );
}

export default CardContextProvider;