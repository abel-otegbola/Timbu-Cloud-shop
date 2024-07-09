import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";
import ArrowIcon from "../../assets/icons/arrowIcon";
import TimesIcon from "../../assets/icons/timesIcon";

export default function Cart() {
    const { cart, setCart } = useContext(CartContext)

    const handleQuantity = (id, value) => {
        setCart(cart.map(item => {
            if(item.id === id) {
                return { ...item, quantity: value } 
            }
            else {
                return item
            }
        }))
    }
    
    const removeItemFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    return (
        <>
            <Header />
            <h2 className="font-bold mb-3 md:text-[36px] text-[24px] p-6">Cart</h2>
            <div className="flex flex-wrap md:px-8 px-6 py-[5%] md:gap-0 gap-12">
                <div className="md:w-[70%] w-full border border-transparent sm:text-[16px] text-[12px] md:border-r-[#DDD] md:pr-6">

                    <div className="w-full overflow-x-auto">
                        <table className="table-auto text-left w-full min-w-[430px]">
                            <thead>
                                <tr className="font-bold border border-transparent border-b-[#DDD]">
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th className="px-4">Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    cart.length === 0 ?
                                    <p className="italic py-4 text-center font-normal">There's nothing in your Cart</p>
                                    :
                                    cart.map(book => (
                                        <tr key={book.id} className="relative">                                            
                                            <button className="hover:text-red-500 absolute top-0 right-4" onClick={() => removeItemFromCart(book.id)}><TimesIcon className={"w-[24px]"} /></button>
                                            <td className="flex gap-6 justify-between py-4">
                                                <img src={book.img} alt={book.title} className="rounded-[5px] sm:w-[87px] w-[60px]" />
                                                <div className="flex-1 flex flex-col justify-center py-4 gap-2">
                                                    <p className="opacity-[0.7] md:text-[16px] text-[12px]">{book.title}</p>
                                                </div>
                                            </td>
                                            <td className="text-primary sm:text-[16px] text-[12px] font-semibold px-2"># {book.price}</td>
                                            <td className="px-4">
                                                <div className=" flex items-center w-fit text-primary font-semibold items-start border border-[#262626]">
                                                    <button className="sm:text-lg sm:w-[40px] w-[20px] sm:h-[67px] h-[47px] bg-[#DDD] hover:bg-[#DDD]/[0.8]" onClick={() => handleQuantity(book.id, (book.quantity || 1) - 1)}>-</button>
                                                    <input type="number" className="h-full sm:w-[55px] w-[35px] md:text-[16px] text-[12px] text-center bg-white" value={book.quantity || 1} onChange={(e) => handleQuantity(book.id, e.target.value)} />
                                                    <button className="sm:text-lg sm:w-[40px] w-[20px] sm:h-[67px] h-[47px] bg-[#DDD] hover:bg-[#DDD]/[0.8]" onClick={() => handleQuantity(book.id, (book.quantity || 1) + 1)}>+</button>
                                                </div>
                                            </td>
                                            <td className="text-primary font-semibold sm:text-[16px] text-[12px] "># {book.quantity ? book.price * book.quantity : book.price}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between gap-6 border border-transparent border-t-[#DDD] p-6">
                        <Link to={"/"} className="flex items-center gap-2 p-2 px-5 rounded-[10px] border-2 border-secondary hover:bg-primary hover:text-white text-secondary"> <ArrowIcon className={"md:w-[20px] w-[15px]"}/> Back to Shop</Link>
                        <button className="p-2 px-5 rounded-[10px] bg-secondary hover:bg-primary hover:text-white text-[#262626]">Update Cart</button>
                    </div>
                </div>


                <div className="md:w-[30%] w-full md:px-6 sm:text-[16px] text-[14px]">
                    <h2 className="font-bold mb-3 md:text-[20px] text-[18px] border border-transparent border-b-[#DDD]">Cart Totals</h2>

                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Subtotal</p>
                        <p>#{cart.length === 0 ? 0 : cart.map(item => item.price * (item.quantity || 1)).reduce((a, c) => a + c)}</p>
                    </div>
                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Calculate</p>
                        <p>Shipping</p>
                    </div>
                    <div className="flex items-center justify-between py-4 mb-8 border border-transparent border-b-[#DDD]">
                        <p>Total</p>
                        <p>#{cart.length === 0 ? 0 : cart.map(item => item.price * (item.quantity || 1)).reduce((a, c) => a + c)}</p>
                    </div>
                    <input className="border border-[#DDD] p-2 w-full rounded-[10px] text-[#262626] text-center mb-4" placeholder="Coupon code"/>
                    <button className="bg-secondary hover:bg-primary hover:text-white p-2 w-full rounded-[10px] text-[#262626] font-bold mb-4">Apply Coupon</button>
                    <Link to="/checkout" className="block text-center bg-secondary hover:bg-primary hover:text-white p-2 w-full rounded-[10px] text-[#262626] font-bold mb-4">Proceed To Check Out</Link>
                </div>
            </div>
        </>
    )
}