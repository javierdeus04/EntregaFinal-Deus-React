import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const ItemCount = ({ onAdd, stock }) => {

    const [count, setCount] = useState(1);

    const handleDecreaseCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1)
        }
    };

    const handleIncreaseCount = () => {
        if (stock > count) {
            setCount((prev) => prev + 1)
        }
    };

    const handleAddToCart = () => {
        if (count <= stock) {
            onAdd(count);
            toast.success(`Has agregado ${count} ${count === 1 ? 'unidad' : 'unidades'} al carrito`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };


    return (
        <div className="itemControl">
            <div className="itemCount">
                <Button style={{ height: '45px', width: '45px' }} onClick={handleDecreaseCount}>-</Button>
                <span>{count}</span>
                <Button style={{ height: '45px', width: '45px' }} onClick={handleIncreaseCount}>+</Button>
            </div>
            <Button variant="outline-primary" onClick={handleAddToCart}>Agregar al carrito</Button>
            <ToastContainer />
        </div>
    )
}