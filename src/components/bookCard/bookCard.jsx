import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import NairaIcon from "../../assets/icons/nairaIcon";
import { toggleToCart } from "../../helper/cartActions";
import TimesIcon from "../../assets/icons/timesIcon";

export default function BookCard({ book }) {
    const { cart, setCart } = useContext(StoreContext)

    const isBookInCart = cart.map(element => element.id).indexOf(book.id) !== -1

    return (
        <div className="flex flex-col justify-between gap-2 md:text-[16px] text-[13px]">
            <Link to={`/product/${book.id}`}>
                    <div style={{ backgroundImage: `url("${import.meta.env.VITE_API_IMG_URL + "/" +  book?.photos[0].url}")` }} className={`bg-cover bg-center rounded-[15px] w-full md:h-[350px] h-[300px] max-[450px]:h-[200px]`} >
                    </div>
            </Link>
                <p className="text-primary font-semibold flex-1">{book.name}</p>
            <div className="flex flex-col gap-2">
                <p className="font-semibold flex items-center gap-1 text-[16px]"><NairaIcon className={"md:w-[16px] w-[14px]"}/> {book?.current_price[0].NGN[0]}</p>
            </div>
            <div className="flex items-center gap-2">
                <button className={`flex justify-center bg-secondary hover:bg-primary hover:text-white rounded-[10px] text-[#262626] font-bold ${isBookInCart ? "w-[60px] md:p-2 p-[5px]" : "w-full p-3"}`} onClick={() => toggleToCart(book, cart, setCart)}>
                    { isBookInCart ? <TimesIcon className={"md:w-[18px] w-[14px]"} /> : "Add To Cart" }
                </button>
                {
                    isBookInCart ?
                    <Link to={"/cart"} className="flex flex-1 gap-2 items-center justify-center bg-primary text-white rounded-[10px] px-6 py-3">View Cart</Link>
                    : ""
                }
            </div>
        </div>
    )
}