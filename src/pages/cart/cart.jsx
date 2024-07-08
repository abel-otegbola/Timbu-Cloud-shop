import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

export default function Cart() {
    const { cart, setCart } = useContext(CartContext)

    return (
        <>
            <Header />
            <div className="flex flex-wrap px-8 py-[5%]">
                <div className="md:w-[60%] w-full">
                    <h2 className="font-bold mb-3 md:text-[36px] text-[24px]">Cart</h2>

                    <table className="table-auto text-left w-full min-w-[600px]">
                        <thead>
                            <tr className="font-bold border border-transparent border-b-[#DDD]">
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                cart.map(book => (
                                    <tr key={book.id} className="">
                                        <td className="flex gap-6 justify-between py-4">
                                            <img src={book.img} alt={book.title} width={87} className="rounded-[5px]" />
                                            <div className="flex-1 flex flex-col justify-center py-4 gap-2">
                                                <p className="opacity-[0.7]">{book.title}</p>
                                            </div>
                                        </td>
                                        <td className="text-primary font-semibold">#{book.price}</td>
                                        <td className="text-primary font-semibold items-start">
                                            <button className="text-lg w-[40px] h-[67px] bg-[#DDD]">-</button>
                                            <input type="text" className="h-full w-[55px] text-center bg-white" defaultValue={book.quantity || 1} />
                                            <button className="text-lg w-[40px] h-[67px] bg-[#DDD]">+</button>
                                        </td>
                                        <td className="text-primary font-semibold">#{book.quantity ? book.price * book.quantity : book.price}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}