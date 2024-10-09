import React from "react";
import CardContextProvider from "../Card/CardContextProvider";

const Item = ({item}) => {
    return(
        <CardContextProvider item={item}>
        <div key={item.id}>
            <img src={item.img} alt={item.id}/>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
        </CardContextProvider>
    )
}

export default Item;