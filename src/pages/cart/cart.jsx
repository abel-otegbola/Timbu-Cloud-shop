import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { StoreContext } from "../../context/storeContext";
import { useContext } from "react";
import ArrowIcon from "../../assets/icons/arrowIcon";
import TimesIcon from "../../assets/icons/timesIcon";
import NairaIcon from "../../assets/icons/nairaIcon";
import CartQuantity from "../../components/cartQuantity/cartQuantity";

export default function Cart() {
    const { cart, setCart } = useContext(StoreContext)

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
            <h2 className="font-bold mb-3 22xl:text-[36px] text-[24px] p-6">Cart</h2>
            <div className="flex flex-wrap md:px-8 px-6 py-[5%] md:gap-0 gap-12">
                <div className="md:w-[70%] w-full border border-transparent sm:text-[16px] text-[12px] md:border-r-[#DDD] md:pr-6">

                    <div className="w-full overflow-x-auto">
                        <table className="table-auto text-left w-full min-w-[380px]">
                            <thead>
                                <tr className="font-bold 2xl:text-[26px] md:text-[20px] border border-transparent border-b-[#DDD]">
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th className="px-4">Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className="2xl:text-[20px]">
                                {
                                    cart.length === 0 ?
                                    <p className="italic py-4 text-center font-normal">There's nothing in your Cart</p>
                                    :
                                    cart.map(book => (
                                        <tr key={book.id} className="">                                            
                                            <td className="flex gap-6 justify-between py-4">
                                                <button className="hover:text-red-500" onClick={() => removeItemFromCart(book.id)}><TimesIcon className={"w-[24px]"} /></button>
                                                <img src={book.img} alt={book.name} className="xl:w-[138px] sm:w-[87px] w-[60px]" />
                                                <div className="flex-1 flex flex-col justify-center py-4 gap-2 pr-6">
                                                    <p className="font-medium md:text-[16px] text-[12px]">{book.name}</p>
                                                </div>
                                            </td>
                                            <td className=" font-semibold min-w-[90px] sm:text-[16px] text-[12px] ">
                                                <p className="flex items-center"><NairaIcon className={"w-[16px]"} /> {book.price}</p>
                                            </td>
                                            <td className="px-4">
                                                <CartQuantity book={book} cart={cart} setCart={setCart}/>
                                            </td>
                                            <td className=" font-semibold min-w-[90px] sm:text-[16px] flex items-center text-[12px] "><NairaIcon className={"w-[16px]"} /> {book.quantity ? book.price * book.quantity : book.price}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className="flex items-center justify-between 2xl:text-[20px] gap-6 border border-transparent border-t-[#DDD] md:p-6 py-6 ">
                        <Link to={"/"} className="flex items-center gap-2 p-2 px-5 rounded-[10px] border-2 border-secondary hover:bg-primary hover:text-white text-secondary"> <ArrowIcon className={"md:w-[20px] w-[15px]"}/> Back to Shop</Link>
                        <button className="p-2 px-5 rounded-[10px] bg-secondary hover:bg-primary hover:text-white text-[#262626]" onClick={() => setCart([])}>Clear Cart</button>
                    </div>
                </div>


                <div className="md:w-[30%] w-full md:px-6 2xl:text-[20px] sm:text-[16px] text-[14px]">
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