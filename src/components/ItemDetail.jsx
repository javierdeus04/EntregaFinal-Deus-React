import { useContext } from "react"
import { ItemCount } from "./ItemCount"
import { CartContext } from "../contexts/CartContext"

export const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const onAdd = count => {addItem(item, count)};
    return (
        <div className="itemDetail">
            <div>
                <h2>{item.name}</h2>
                <h4>{item.categoryId}</h4>
                <img style={{ height: '300px', width: '400px' }} src={item.img} alt=""/>
            </div>
            <div>
                <div>{item.description}</div>
                <h3>${item.price}</h3>
                <span>Stock: {item.stock}</span>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}
