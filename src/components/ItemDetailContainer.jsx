import { useState } from "react";
import { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";



import { ItemDetail } from "./ItemDetail";
import data from "../data/items.json"


export const ItemDetailContainer = (props) => {

    const [item, setItem] = useState(null)

    const {id} = useParams();

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const itemById = data.find((item) => item.id === id);
                resolve(itemById);
            }, 2000);
        });
        promise.then(data => setItem(data));
    }, []);

    if (!item) return (
        <div className="box">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );

    return (
        <div className="detailItem">
            <h1 style={{textAlign: 'center'}}>Detalle del producto</h1> 
            <ItemDetail className="box" item={item} />            
        </div>
    )
}