import { createContext, useState } from "react"

export const CartContext = createContext([])

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addItem = (newItem, quantity) => {
        const alreadyExists = cartList.some(item => item.id === newItem.id)
        if (!alreadyExists) setCartList(prev => [...prev, { ...newItem, quantity }])
        else {
            const updateItems = cartList.map(item => {
                if (item.id === newItem.id)
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    }
                else return item
            })
            setCartList(updateItems)
        }
    }

    const totalWidget = cartList.reduce((acc, val) => acc + val.quantity, 0)

    const removeList = () => setCartList([])

    const deleteItem = (id) => {
        const cartListFiltered = cartList.filter(item => item.id !== id)
        setCartList(cartListFiltered)
    }
    return (
        <CartContext.Provider value={{ cartList, addItem, deleteItem, removeList, totalWidget }}>{children}</CartContext.Provider>
    )
}

