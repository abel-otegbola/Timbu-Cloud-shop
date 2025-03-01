import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
import { useContext } from "react";
import TimesIcon from "../../assets/icons/timesIcon";
import NairaIcon from "../../assets/icons/nairaIcon";

export default function CartOverlay() {
    const { cart, setCart } = useContext(StoreContext)

    const removeItemFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    return (
        <div className="md:w-[400px] w-[300px] py-6 px-3 bg-white sm:text-[16px] text-[12px] shadow-lg rounded-[10px] ">
            <h2 className="py-4 md:text-[30px] text-[24px] text-center">My Cart</h2>

            <div className="flex flex-col gap-2">
                {
                    cart?.length === 0 ?
                    <p className="italic py-4 text-center font-normal">There's nothing in your Cart</p>
                    :
                    cart.map(book => (
                        <div key={book.id} className="flex gap-6 justify-between">
                            <Link to={"/product/"+book.id}>
                                <img src={book.img} alt={book.name} width={87} className="rounded-[5px]" />
                            </Link>
                            <div className="flex-1 flex flex-col justify-betwween py-4 gap-2">
                                <Link to={"/product/"+book.id} className="opacity-[0.7]">{book.name}</Link>
                                <p className="text-primary font-semibold flex gap-1 items-center">{book.quantity || 1} x <NairaIcon className={"md:w-[14px] w-[10px]"} /> {book.price}.00</p>
                            </div>
                            <button className="hover:text-red-500" onClick={() => removeItemFromCart(book.id)}><TimesIcon className={"w-[24px]"} /></button>
                        </div>
                    ))
                }
            </div>

            <div className="flex items-center justify-between p-6 my-4 border border-transparent border-y-[#DDD]">
                <p>Subtotal:</p>
                <p>#{cart.length === 0 ? 0 : cart.map(item => item.price).reduce((a, c) => a + c)}</p>
            </div>
            
            <button className="bg-secondary hover:bg-primary p-2 w-full rounded-[10px] text-[#262626] font-bold mb-4" onClick={() => setCart([])}>
                Remove Items
            </button>
            <Link to={"/cart"} className="block mb-4 text-center bg-secondary hover:bg-primary p-2 w-full rounded-[10px] text-[#262626] font-bold" >
                View Cart
            </Link>
            <Link to={"/checkout"} className="block text-center bg-secondary hover:bg-primary p-2 w-full rounded-[10px] text-[#262626] font-bold" >
                Check Out
            </Link>
        </div>
    )
}