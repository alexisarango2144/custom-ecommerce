import { createContext, useState } from "react";
import SwalToast from "../components/SwalToast";
import SwalAlert from "../components/SwalAlert";


// Creamos el contexto y lo exportamos para su uso
export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    // Creamos el estado del carrito
    const [cart, setCart] = useState([])

    // Aquí van todas las funciones/funcionalidades que modifiquen el carrito

    // Agregar item al carrito
    const addItem = (item, qty) => {
        if (isInCart(item)) {
            // Si ya existe, no lo agrego de nuevo, solo sumo la cantidad
            setCart(cart.map((cartProd) => {
                if (cartProd.id === item.id) {
                    if (cartProd.quantity + qty > item.stock) {
                        SwalToast({
                            icon: "warning",
                            title: "Lo sentimos, nuestro stock no es suficiente.",
                            content: "Sin embargo agregamos todo lo que tenemos disponible."
                        })
                        return { ...cartProd, quantity: item.stock }
                    } else {
                        SwalToast({
                            icon: "success",
                            title: `Producto agregado al carrito.`,
                            content: `Agregamos ${qty} ${item.title} al carrito.`
                        })
                        return { ...cartProd, quantity: cartProd.quantity + qty }
                    }
                } else {
                    return cartProd
                }
            }))

        } else {
            SwalToast({
                icon: "success",
                title: `Producto agregado al carrito.`,
                content: `Agregamos ${qty} ${item.title} al carrito.`
            })
            // Hago spread de cart y agrego el nuevo objeto
            setCart([...cart, { ...item, quantity: qty }])
        }
    }

    const removeItem = (item) => {
        setCart(cart.filter((cartProd) => cartProd.id !== item.id))
        SwalToast({
                    icon: "warning",
                    title: `Se eliminó el producto ${item.title} del carrito.`,
                })
    }

    const clearCart = () => {
        SwalAlert({
            icon: "question",
            title: `¿Desea limpiar el carrito?`,
            content: `Tienes ${cart.length} ${cart.length > 1 ? 'productos' : 'producto'} en el carrito.`,
            confirmText: 'Sí',
            cancelText: 'No',
            confirmButtonColorClass: 'btn-danger',
            confirmCallback: () => {
                setCart([])
                SwalToast({
                    icon: "success",
                    title: `Se limpió el carrito.`,
                })
            }
        })
    }

    const isInCart = (item) => {
        return cart.some((cartProd) => cartProd.id === item.id)
    }

    const currentQuantity = (item) => {
        if (!isInCart(item)) {
            return 0
        }
        return cart.find((cartProd) => cartProd.id === item.id).quantity
    }


    return (
        // Proveedor de contexto con el estado del carrito. Dentro quedan los objetos hijos del contexto
        // Las funciones se pasan en value para poder ser usadas en los hijos
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, isInCart, currentQuantity }}>
            {children}
        </CartContext.Provider>
    )
}