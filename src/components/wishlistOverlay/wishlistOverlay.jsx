import { Link } from "react-router-dom";
import NairaIcon from "../../assets/icons/nairaIcon";
import TimesIcon from "../../assets/icons/timesIcon";
import { removeItemFromWishlist } from "../../helper/wishlistActions";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export default function WishlistOverlay() {
    const { wishlist, setWishlist } = useContext(StoreContext)

    return (
        <div className="md:w-[400px] w-[300px] py-6 px-3 bg-white shadow-lg rounded-[10px] text-center md:text-[16px] text-[12px]">
            <h2 className="py-4 mb-2 text-[24px] text-center">Wishlist</h2>

            <div className="flex flex-col gap-2">
                {
                    wishlist?.length === 0 ?
                    <p className="italic py-4 text-center font-normal">There's nothing in your Wishlist</p>
                    :
                    wishlist.map(book => (
                        <div key={book.id} className="flex gap-6 justify-between">
                            <Link to={"/product/"+book.id}>
                                <img src={book.img} alt={book.name} width={87} className="rounded-[5px]" />
                            </Link>
                            <div className="flex-1 flex flex-col justify-betwween py-4 gap-2">
                                <Link to={"/product/"+book.id} className="opacity-[0.7] text-start">{book.name}</Link>
                                <p className="text-primary font-semibold flex gap-1 items-center">{book.quantity || 1} x <NairaIcon className={"md:w-[14px] w-[10px]"} /> {book.price}.00</p>
                            </div>
                            <button className="hover:text-red-500" onClick={() => removeItemFromWishlist(book.id, wishlist, setWishlist)}><TimesIcon className={"w-[24px]"} /></button>
                        </div>
                    ))
                }
            </div>
            <Link to={"/wishlist"} className="block text-center bg-secondary p-2 mt-8 w-[60%] mx-auto hover:bg-primary hover:text-white rounded-[10px] text-[#262626] font-bold" >
                View Wishlist
            </Link>
            
        </div>
    )
}