import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"
import { getCategories, getProducts } from "../helper/axiosFetch"

export const StoreContext = createContext([])

export default function StoreContextProvider({ children }) {
    const [cart, setCart] = useLocalStorage("cart", [])
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])
    const [products, setProducts] = useLocalStorage("products", [])
    const [categories, setCategories] = useLocalStorage("categories", [])
    const [error, setError] = useState("")
    const [page, setPage] = useState({ currentPage: 1, total: 12 })
    const [cat, setCat] = useState("")

    const getAllProducts = async () => {
        getProducts(page.currentPage, cat)
        .then(response => {
           setProducts(response.data.items)
           setPage({ ...page, total: response.data.total })
        })
        .catch(error => setError(error))
    }

    const getAllCategories = async () => {
        getCategories()
        .then(response => {
           setCategories(response.data.items)
           setPage({ ...page, total: response.data.total })
        })
        .catch(error => setError(error))
    }

    useEffect(() => {
        getAllProducts()
        getAllCategories()
    }, [page.currentPage, cat])

    return (
        <StoreContext.Provider value={{ cart, setCart, error, setError, products, page, setPage, categories, cat, setCat, wishlist, setWishlist }}>
            {children}
        </StoreContext.Provider>
    )
}