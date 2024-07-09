import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import LazyLoad from "react-lazyload";

export default function BookCard({ book }) {
    const { cart, setCart } = useContext(CartContext)

    const toggleToCart = (item) => {
        if(cart.map(element => element.id).indexOf(item.id) === -1) {
            setCart([ ...cart, item ])
        }
        else {
            setCart(cart.filter(bookIndex => bookIndex.id !== item.id))
        }
    }

    return (
        <div className="flex flex-col justify-between gap-2 md:text-[16px] text-[13px]">
            <LazyLoad height={250}>
                <img src={book.img} alt={book.title} width={"100%"} className="rounded-[15px]" />
            </LazyLoad>
            <div className="flex flex-col gap-2">
                <p className="opacity-[0.7]">{book.category}</p>
                <p className="text-primary font-semibold">{book.title}</p>
                <p className="font-semibold">#{book.price}</p>
            </div>
            <button className="bg-secondary hover:bg-primary hover:text-white p-3 w-full rounded-[10px] text-[#262626] font-bold" onClick={() => toggleToCart(book)}>
                { cart.map(element => element.id).indexOf(book.id) !== -1 ? "Remove From Cart" : "Add To Cart" }
            </button>
        </div>
    )
}