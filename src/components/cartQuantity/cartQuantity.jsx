import { handleQuantity } from "../../helper/cartActions";

export default function CartQuantity({ book, cart, setCart }) {
    return (
        <div className=" flex items-center w-fit font-semibold items-start border border-[#262626] rounded overflow-hidden duration-700">
            <button className="sm:text-lg sm:w-[40px] w-[20px] h-[45px] bg-[#DDD] hover:bg-[#DDD]/[0.8]" onClick={() => handleQuantity(book.id, (book.quantity || 1) - 1, cart, setCart)}>-</button>
            <input type="number" className="h-full sm:w-[55px] w-[35px] md:text-[16px] text-[12px] text-center bg-white" value={book?.quantity || 1} onChange={(e) => handleQuantity(book.id, e.target.value, cart, setCart)} />
            <button className="sm:text-lg sm:w-[40px] w-[20px] h-[45px] bg-[#DDD] hover:bg-[#DDD]/[0.8]" onClick={() => handleQuantity(book.id, (book.quantity || 1) + 1, cart, setCart)}>+</button>
        </div>
    )
}