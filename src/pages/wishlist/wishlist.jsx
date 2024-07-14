import { Link, useSearchParams } from "react-router-dom";
import Header from "../../components/header/header";
import Quotes from "../../components/quotes/quotes";
import BookCard from "../../components/bookCard/bookCard";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import { toggleToCart } from "../../helper/cartActions";
import TimesIcon from "../../assets/icons/timesIcon";
import NairaIcon from "../../assets/icons/nairaIcon";
import { removeItemFromWishlist } from "../../helper/wishlistActions";

export default function Wishlist () {
    const { wishlist, setWishlist, cart, setCart } = useContext(StoreContext) 
    const [searchParams, ] = useSearchParams()

    const search = searchParams.get("search") || ""

    return (
        <div>
            <Quotes />

            <Header />

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:px-[7%] p-6 gap-x-8 gap-y-14">
                {
                    wishlist?.filter(item => (item?.name?.indexOf(search) !== -1 )).length === 0 ?
                    <p className="italic py-4 text-center font-normal">No book found</p>
                    :
                    wishlist?.filter(item => ( item?.name?.indexOf(search) !== -1 )).map(book => (
                        <div key={book.id} className="flex flex-col justify-between gap-2 relative md:text-[16px] text-[13px]">
                            <Link to={`/product/${book.id}`}>
                                    <div style={{ backgroundImage: `url("${book.img}")` }} className={`bg-cover bg-center rounded-[15px] w-full md:h-[350px] h-[300px] max-[450px]:h-[200px]`} >
                                    </div>
                            </Link>
                                <p className="text-primary font-semibold flex-1">{book.name}</p>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold flex items-center gap-1 text-[16px]"><NairaIcon className={"md:w-[16px] w-[14px]"}/> {book?.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className={`flex justify-center bg-secondary hover:bg-primary hover:text-white rounded-[10px] text-[#262626] font-bold 
                                                    ${cart.map(element => element.id).indexOf(book.id) !== -1 ? "w-[60px] md:p-2 p-[5px]" : "w-full p-3"}`} 
                                        onClick={() => toggleToCart(book, cart, setCart)}
                                >
                                    { cart.map(element => element.id).indexOf(book.id) !== -1 ? <TimesIcon className={"md:w-[18px] w-[14px]"} /> : "Add To Cart" }
                                </button>
                                <button onClick={() => removeItemFromWishlist(book.id, wishlist, setWishlist)} className="flex flex-1 gap-2 items-center justify-center bg-primary text-white rounded-[10px] px-6 py-3">Remove</button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
