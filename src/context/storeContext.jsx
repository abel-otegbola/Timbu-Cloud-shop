import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import axios from "axios"

export const StoreContext = createContext([])

export default function StoreContextProvider({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [products, setProducts] = useLocalStorage("products", [])
    const [error, setError] = useState("")

    const getAllProducts = async () => {
        await axios.get(`/api/products?organization_id=${import.meta.env.VITE_ORG_ID}&reverse_sort=false&page=1&size=10&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${import.meta.env.VITE_API_KEY}`)
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