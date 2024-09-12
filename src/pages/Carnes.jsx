import { Link } from "react-router-dom";
import items from "../info.js";
import Item from "../components/Item.jsx";

function Carnes (){
    return(
        <main>
            <h1>Carnes</h1>
            <div>
                {items.map((item)=>{
                    return(
                        <article key={item.id}>
                            <h4>{item.name}</h4>
                            <img src={item.image} alt="foto" />
                            <Link to = {`${item.id}`}>mas info</Link>
                        </article>
                    )
                })}
            </div>
        </main>
    )
}

export default Carnes;