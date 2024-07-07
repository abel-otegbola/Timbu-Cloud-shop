import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

export default function CardOverlay() {
    const { cart, setCart } = useContext(CartContext)

    return (
        <div className="">
            <h2 className="py-4 md:text-[30px] text-[24px] text-center">My Cart</h2>

            <div className="flex flex-col gap-2">
                {
                    cart.map(book => (
                        <Link key={book.id} className="flex gap-6 justify-between">
                            <img src={book.img} alt={book.title} width={87} className="rounded-[5px]" />
                            <div className="flex-1 flex flex-col justify-betwween py-4 gap-2">
                                <p className="opacity-[0.7]">{book.title}</p>
                                <p className="text-primary font-semibold">1 x #{book.price}.00</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className="flex items-center justify-between p-6 my-4 border border-transparent border-y-[#DDD]">
                <p>Subtotal:</p>
                <p>#{cart.length === 0 ? 0 : cart.map(item => item.price).reduce((a, c) => a + c)}</p>
            </div>
            
            <button className="bg-secondary p-2 w-full rounded-[10px] text-[#262626] font-bold mb-4" onClick={() => setCart([])}>
                Remove Items
            </button>
            <button className="bg-secondary p-2 w-full rounded-[10px] text-[#262626] font-bold" >
                Check Out
            </button>
        </div>
    )
}