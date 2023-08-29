import { ItemCount } from "./ItemCount"

export const ItemDetail = ({ item }) => {
    return (
        <div className="itemDetail">
            <div>
                <h1>{item.title}</h1>
                <h5>{item.category.toUpperCase()}</h5>
                <img style={{ height: '400px', width: '400px' }} src={item.imageUrl} />
            </div>
            <div>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ratione, temporibus non eum quia in, inventore suscipit excepturi quo nisi corrupti sed accusantium, eveniet tempora a consequuntur fugit dolor laboriosam.</div>
                <ItemCount />
            </div>
        </div>
    )
}