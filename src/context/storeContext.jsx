import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import axios from "axios"
import { getCategories, getProducts } from "../helper/axiosFetch"

export const StoreContext = createContext([])

export default function StoreContextProvider({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [products, setProducts] = useLocalStorage("products", [])
    const [categories, setCategories] = useLocalStorage("categories", [])
    const [error, setError] = useState("")
    const [page, setPage] = useState(1)
    const [cat, setCat] = useState("")

    const getAllProducts = async () => {
        getProducts(page, cat)
        .then(response => {
           setProducts(response.data.items)
        })
        .catch(error => setError(error))
    }

    const getAllCategories = async () => {
        getCategories()
        .then(response => {
           setCategories(response.data.items)
        })
        .catch(error => setError(error))
    }

    useEffect(() => {
        getAllProducts()
        getAllCategories()
    }, [page, cat])

    return (
        <StoreContext.Provider value={{ cart, setCart, error, setError, products, page, setPage, categories, cat, setCat }}>
            {children}
        </StoreContext.Provider>
    )
}