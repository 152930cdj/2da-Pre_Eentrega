import { Link, useParams } from 'react-router-dom';
import items from '../info.js';

function Item() {

    const {itemId} = useParams();

    const itemFind = items.find((item)=> item.id== itemId);

    const {image, name, description} = itemFind;

  return (  
      <div>
        <img src={image} alt=""/>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <Link to = "/recursos">volver</Link>
    </div>
  )
}

export default Item;
