import { useState } from "react"
import Button from 'react-bootstrap/Button';

const stock = 9;

export const ItemCount = () => {

    const [ count, setCount ] = useState(1);

    const decreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    };

    const increaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        }
    };

    const onAdd = () => alert(count)

    return (
        <div className="itemControl">
            <div className="itemCount">
                <Button style={{ height: '45px', width: '45px' }} onClick={decreaseCount}>-</Button>
                <span>{count}</span>
                <Button style={{ height: '45px', width: '45px' }} onClick={increaseCount}>+</Button>      
            </div>
            <Button variant="outline-primary" onClick={onAdd}>Agregar al carrito</Button>
        </div>
    )
}