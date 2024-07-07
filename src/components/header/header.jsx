import { Link } from "react-router-dom";
import BagIcon from "../../assets/icons/bagIcon";
import CartIcon from "../../assets/icons/cartIcon";
import MenuIcon from "../../assets/icons/menuIcon";
import SearchIcon from "../../assets/icons/searchIcon";

export default function Header() {
    return (
        <div className="flex lg:flex-nowrap flex-wrap items-center justify-between px-[5%] py-4 lg:gap-[8%] gap-6 font-semibold border-2 border-transparent border-b-primary">
            <button className="flex items-center gap-1 lg:order-1 order-2">
                <MenuIcon className="w-[40px]"/>
                Categories
            </button>

            <div className="flex items-center border-2 border-primary lg:flex-1 lg:w-auto w-full rounded-[15px] lg:order-1 order-1">
                <input type="search" className="p-3 flex-1 rounded-[15px] outline-none px-[3%]" placeholder="Search Books, Authors, Categories" />
                <button className="flex bg-primary text-white justify-center w-[75px] rounded-r-[10px] rounded-l-[12px] py-1">
                    <SearchIcon className={"w-[25px]"}/>
                </button>
            </div>

            <div className="flex items-center gap-8 lg:order-2 order-3">
                <Link className="flex items-center gap-2">
                    <BagIcon className="w-[20px]"/>
                    Wishlist
                </Link>
                <Link className="flex items-center gap-2">
                    <CartIcon className="w-[20px]"/>
                    My Cart
                </Link>
            </div>
        </div>
    )
}