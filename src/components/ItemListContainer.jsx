import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ItemList } from "./ItemList";
import data from "../data/items.json"


export const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    const { id } = useParams();

    
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(data), 2000);
        });
        promise.then(data => {
            if (!id) {setItems(data);
            } else {
                const itemsFiltered = data.filter(
                    (item) => item.category === id
                );
                setItems(itemsFiltered)
            }
            });
    }, []);

    return (
        <div className="box"><ItemList items={items} /></div>
    )
}