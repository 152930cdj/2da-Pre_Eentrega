import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"; 

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams(); 

    useEffect(() => {
        const db = getFirestore();
        let itemCollection;

        if (categoryId) {
            itemCollection = query(
                collection(db, "items"),
                where("category", "==", categoryId)
            );
        } else {
            itemCollection = collection(db, "items");
        }

        getDocs(itemCollection)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            })
            .catch((error) => {
                console.error("Error fetching products: ", error);
            });
    }, [categoryId]);

    return (
        <div>
            <ItemList items={products} />
        </div>
    );
};

export default ItemListContainer;