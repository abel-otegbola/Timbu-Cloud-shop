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
        <div className="flex lg:flex-nowrap flex-wrap items-center justify-between px-[5%] py-4 lg:gap-[8%] gap-6 font-semibold border-2 border-transparent border-b-primary">
            <button className="flex items-center gap-1 lg:order-1 order-2">
                <MenuIcon className="w-[40px]"/>
                Categories
            </button>

            <form className="flex items-center border-2 border-primary lg:flex-1 lg:w-auto w-full rounded-[15px] lg:order-1 order-1">
                <input type="search" name="search" onChange={(e) => setQuery(e.target.value)} className="p-3 flex-1 rounded-[15px] outline-none px-[3%]" placeholder="Search Books, Authors, Categories" />
                <button className="flex bg-primary text-white justify-center w-[75px] rounded-r-[10px] rounded-l-[12px] py-[6px]">
                    <SearchIcon className={"w-[25px]"}/>
                </button>
            </form>

            <div className="relative flex items-center gap-8 lg:order-2 order-3">
                <Link className="flex items-center gap-2">
                    <BagIcon className="w-[20px]"/>
                    Wishlist
                </Link>
                <button className="flex items-center gap-2" onClick={() => setOpenCart(!openCart)}>
                    <CartIcon className="w-[20px]"/>
                    My Cart
                </button>

                <div className={`${openCart ? "block" : "hidden"} absolute top-[100%] right-0 md:w-[400px] w-[250px] py-[46px] px-3 bg-white shadow-lg rounded-[10px] z-[3]`}>
                    <CardOverlay />
                </div>
            </div>
        </div>
    )
}