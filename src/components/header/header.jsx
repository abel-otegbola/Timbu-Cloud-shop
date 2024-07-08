import { Link } from "react-router-dom";
import BagIcon from "../../assets/icons/bagIcon";
import CartIcon from "../../assets/icons/cartIcon";
import MenuIcon from "../../assets/icons/menuIcon";
import SearchIcon from "../../assets/icons/searchIcon";
import { useState } from "react";
import CardOverlay from "../cardOverlay/cardOverlay";

export default function Header() {
    const [query, setQuery] = useState("")
    const [openCart, setOpenCart] = useState(false)

    return (
        <div className="flex items-center justify-between w-full px-[5%] py-4 lg:gap-[8%] sm:gap-6 gap-2 font-semibold border-2 border-transparent border-b-primary">
            <button className="flex items-center gap-1">
                <MenuIcon className="sm:w-[40px] w-[30px]"/>
                <span className="sm:block hidden">Categories</span>
            </button>

            <form className="flex items-center md:text-[16px] text-[12px] border-2 border-primary lg:flex-1 min-[400px]:w-[60%] rounded-[15px]">
                <input type="search" name="search" onChange={(e) => setQuery(e.target.value)} className="sm:p-3 p-2 max-[400px]:w-[75%] flex-1 w-[75%] rounded-[15px] outline-none px-[3%]" placeholder="Search Books, Authors, Categories" />
                <button className="flex bg-primary text-white justify-center sm:w-[75px] w-[59px] rounded-r-[10px] rounded-l-[12px] md:py-[6px] py-[2px]">
                    <SearchIcon className={"sm:w-[25px] w-[18px]"}/>
                </button>
            </form>

            <div className="relative flex items-center gap-8">
                <Link className="flex items-center gap-2">
                    <BagIcon className="w-[20px]"/>
                    <span className="sm:block hidden">Wishlist</span>
                </Link>
                <button className="flex items-center gap-2" onClick={() => setOpenCart(!openCart)}>
                    <CartIcon className="w-[20px]"/>
                    <span className="sm:block hidden">Cart</span>
                </button>

                <div className={`${openCart ? "block" : "hidden"} absolute top-[100%] right-0 md:w-[400px] w-[300px] py-[46px] px-3 bg-white shadow-lg rounded-[10px] z-[1]`}>
                    <CardOverlay />
                </div>
            </div>
        </div>
    )
}