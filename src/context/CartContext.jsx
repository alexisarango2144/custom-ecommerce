import { createContext } from "react";

export const CartContext = createContext();

//const CartContextProvider = ({...})

const cart = [{price: 1000}, {price: 200}, {price:4500}]


// Total a pagar
const totalPagar = ()=>{
    return cart.reduce((acc, prod)=>(acc += prod.quantity * prod.price))
}

export default CartContext;