import { createContext } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"

export const CartContext = createContext([])

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}