import { createContext } from "react"
import { useLocalStorage } from "../customHooks/useLocalStorage"

export const WishlistContext = createContext([])

export default function WishlistContextProvider({ children }) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}