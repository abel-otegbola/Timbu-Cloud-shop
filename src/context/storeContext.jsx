import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import axios from "axios"
import { getProducts } from "../helper/axiosFetch"

export const StoreContext = createContext([])

export default function StoreContextProvider({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [products, setProducts] = useLocalStorage("products", [])
    const [error, setError] = useState("")

    const getAllProducts = async () => {
        getProducts()
        .then(response => {
           setProducts(response.data.items)
        })
        .catch(error => setError(error))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <StoreContext.Provider value={{ cart, setCart, error, setError, products }}>
            {children}
        </StoreContext.Provider>
    )
}