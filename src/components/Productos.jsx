/*const mockItems = [
    { id: 1, name: 'Ojo de Bife', description: 'Carne de Primera', category: 'carnes' },
    { id: 2, name: 'Pechugas de Pollo', description: 'Del corral a tu mesa', category: 'aves' },
    { id: 3, name: 'Salmon', description: 'Frescura y sabor en cada bocado', category: 'pescados' },
    { id: 4, name: 'Fetuccini', description: 'Sabores que te transportan a Italia', category: 'pastas' },
  ];
  
  // Función para obtener todos los productos
    const getAllItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockItems);  
      }, 1000);  
    });
  };
  

    const getItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockItems.filter(item => item.category === categoryId)); 
      }, 1000);
    });
  };
  
 
    const getItemById = (itemId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockItems.find(item => item.id === parseInt(itemId)));  
      }, 1000);
    });
  };
  
export default Productos;*/

import { Link } from "react-router-dom";
import productos from "../info.js";


function Productos(){

    return(
        <main>
            <h1>Productos</h1>
            <div>
                {productos.map((producto)=> {
                return (
                    <article key = {producto.name}>
                        <h4>{producto.description}</h4>
                        <img src={producto.image} alt="foto"/>
                    </article>
                )
                })}
            </div>
        </main>
    )
}

export default Productos;
