import { Link, useLocation } from "react-router-dom";
import BagIcon from "../../assets/icons/bagIcon";
import CartIcon from "../../assets/icons/cartIcon";
import MenuIcon from "../../assets/icons/menuIcon";
import SearchIcon from "../../assets/icons/searchIcon";
import { useState } from "react";
import CartOverlay from "../cartOverlay/cartOverlay";
import CategoriesOverlay from "../categoriesOverlay/categoriesOverlay";
import WishlistOverlay from "../wishlistOverlay/wishlistOverlay";
import { useOutsideClick } from "../../customHooks/useClickOutside";

export default function Header() {
    const [openCart, setOpenCart] = useState(false)
    const [openWishlist, setOpenWishlist] = useState(false)
    const [openCategories, setOpenCategories] = useState(false)
    const pathname = useLocation().pathname;

    const cartRef = useOutsideClick(setOpenCart)
    const categoriesRef = useOutsideClick(setOpenCategories)

    return (
        <div ref={categoriesRef} className="relative flex items-center justify-between w-full px-[7%] py-4 lg:gap-[8%] sm:gap-6 gap-2 font-semibold border-2 border-transparent border-b-primary">
            <button className="flex items-center gap-1 hover:text-primary" onClick={() => setOpenCategories(!openCategories)}>
                <MenuIcon className="sm:w-[40px] w-[30px]"/>
                <span className="sm:block hidden">Categories</span>
            </button>

            <div className={`${openCategories ? "block" : "hidden"} absolute top-[100%] leftt-0 z-[1]`}>
                <CategoriesOverlay />
            </div>

            <form className="flex items-center md:text-[16px] text-[12px] border-2 border-primary lg:flex-1 min-[400px]:w-[60%] rounded-[15px]">
                <input type="search" name="search" className="sm:p-3 p-2 max-[400px]:w-[75%] max-[400px]:p-1 flex-1 w-[75%] rounded-[15px] outline-none px-[3%]" placeholder="Search Books, Authors, Categories" />
                <button className="flex bg-primary hover:bg-primary/[0.8] text-white justify-center sm:w-[75px] w-[60px] rounded-r-[10px] rounded-l-[12px] md:py-[6px] py-[4px]">
                    <SearchIcon className={"sm:w-[25px] w-[18px]"}/>
                </button>
            </form>

            <div ref={cartRef} className="relative flex items-center gap-8">
                <button className="flex items-center gap-2 hover:text-primary" onClick={() => setOpenWishlist(!openWishlist)}>
                    <BagIcon className="w-[20px]"/>
                    <span className="md:block hidden">Wishlist</span>
                </button>
                <div className={`${openWishlist ? "block" : "hidden"} absolute top-[100%] right-0 z-[1]`}>
                    <WishlistOverlay />
                </div>

                <button disabled={pathname === "/cart"} className={`flex items-center gap-2 ${pathname === "/cart" ? "text-primary" : "hover:text-primary"}`} onClick={() => setOpenCart(!openCart)}>
                    <CartIcon className="w-[20px]"/>
                    <span className="md:block hidden">My Cart</span>
                </button>
                <div className={`${openCart ? "block" : "hidden"} absolute top-[100%] right-0 z-[1]`}>
                    <CartOverlay />
                </div>
            </div>
        </div>
    )
}