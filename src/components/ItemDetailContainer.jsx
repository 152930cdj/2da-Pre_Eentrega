import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItemDetail = async () => {
      const data = await getItemById(itemId);
      setItem(data);
    };

    fetchItemDetail();
  }, [itemId]);

  if (!item) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetailContainer;
