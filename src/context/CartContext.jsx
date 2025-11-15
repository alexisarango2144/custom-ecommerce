import { createContext, useState } from "react";

// Creamos el contexto y lo exportamos para su uso
export const CartContext = createContext()

export const CartProvider = ({children})=>{
    
    // Creamos el estado del carrito
    const [cart, setCart] = useState([])

    // Aquí van todas las funciones/funcionalidades que modifiquen el carrito

    // Agregar item al carrito
    const addItem = (item, qty)=>{
        if(isInCart(item)){
            // Si ya existe, no lo agrego de nuevo, solo sumo la cantidad
            setCart(cart.map((cartProd)=> cartProd.id === item.id ? {...cartProd, quantity: cartProd.quantity + qty} : cartProd))
        }else{
            // Hago spread de cart y agrego el nuevo objeto
            setCart([...cart, {...item, quantity:qty}])
        }
    }

    const removeItem = (item)=>{
        // setCart(cart.filter((cartItem)=> cartItem.id !== item.id))
        setCart(cart.filter((cartProd)=> cartProd.id !== item.id))
    }

    const clearCart = ()=>{
        setCart([])
    }

    const isInCart = (item)=>{
        return cart.some((cartProd)=> cartProd.id === item.id)
    }

    return(
        // Proveedor de contexto con el estado del carrito. Dentro quedan los objetos hijos del contexto
        // Las funciones se pasan en value para poder ser usadas en los hijos
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}