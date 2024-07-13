import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import axios from "axios"
import { getProducts } from "../helper/axiosFetch"

export const StoreContext = createContext([])

export default function StoreContextProvider({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [products, setProducts] = useLocalStorage("products", [])
    const [error, setError] = useState("")
    const [page, setPage] = useState(1)

    const getAllProducts = async () => {
        getProducts(page)
        .then(response => {
           setProducts(response.data.items)
        })
        .catch(error => setError(error))
    }

    useEffect(() => {
        getAllProducts()
    }, [page])

    return (
        <StoreContext.Provider value={{ cart, setCart, error, setError, products, page, setPage }}>
            {children}
        </StoreContext.Provider>
    )
}