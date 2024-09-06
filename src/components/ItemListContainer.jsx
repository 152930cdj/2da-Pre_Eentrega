import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = categoryId ? await getItemsByCategory(categoryId) : await getAllItems();
      setItems(data);
    };
    
    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <div>
        {items.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
