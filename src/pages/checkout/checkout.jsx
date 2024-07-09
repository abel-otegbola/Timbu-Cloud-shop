import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

export default function Checkout() {
    const { cart } = useContext(CartContext)

    return (
        <>
            <Header />
            <h2 className="font-bold mb-3 md:text-[36px] text-[24px] p-6">Checkout</h2>


            <div className="flex flex-wrap md:px-8 px-6 py-[3%] md:gap-0 gap-12">

                <div className="md:w-[70%] w-full border border-transparent sm:text-[16px] text-[14px] md:border-r-[#DDD] md:px-[5%]">

                    <p>Are you a returning customer? <Link className="text-secondary" to={"/"}>Login</Link></p>

                    <h3 className="font-semibold text-[20px] mt-10 mb-6">Billing Details</h3>

                    <div >
                        <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="firstname">First Name <span className="text-red-500">*</span></label>
                                <input type="text" name="firstname" id="firstname" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="lastname">Last Name <span className="text-red-500">*</span></label>
                                <input type="text" name="lastname" id="lastname" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-6">
                            <label htmlFor="country">Country <span className="text-red-500">*</span></label>
                            <input type="text" name="country" id="country" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                        </div>

                        <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6 mt-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="state">State <span className="text-red-500">*</span></label>
                                <input type="text" name="state" id="state" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="city">City <span className="text-red-500">*</span></label>
                                <input type="text" name="city" id="city" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2 mt-6">
                            <label htmlFor="address">Residential Address <span className="text-red-500">*</span></label>
                            <input type="text" name="address" id="address" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                        </div>

                        <div className="grid md:grid-cols-2 items-center md:gap-10 gap-6 mt-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="phone">Phone No <span className="text-red-500">*</span></label>
                                <input type="tel" name="phone" id="phone" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email Address <span className="text-red-500">*</span></label>
                                <input type="email" name="email" id="email" className="p-4 rounded-[8px] border-2 border-[#DDD] w-full focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 py-6">
                            <input type="checkbox" name="signup" id="signup" className="w-5 h-5 rounded border border-[#DDD] focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                            <label htmlFor="signup">Create an Account?</label>
                        </div>

                        <div className="flex flex-col gap-2 border-2 border-[#DDD] px-[5%] py-[2%] rounded-[8px]">
                            <h3 className="font-semibold text-[20px] mt-10 mb-6">Additional Information</h3>
                            <textarea name="info" id="info" cols="2" rows="4" className=" focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" placeholder="Add notes about your order (e.g special notes about your delivery)"></textarea>
                        </div>
                    </div>
                </div>


                <div className="md:w-[30%] w-full md:px-6 sm:text-[16px] text-[14px]">
                    <h2 className="mb-3 md:text-[20px] text-[18px]">Your Order</h2>

                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Product</p>
                        <p>Subtotal</p>
                    </div>

                    {
                        cart.map(book => (
                            <div key={book.id} className="flex items-center justify-between py-4 ">
                                <p>{book.title} <span className="ml-2">X{book.quantity || 1}</span></p>
                                <p>#{book.price * (book.quantity || 1)}</p>
                            </div>
                        ))
                    }

                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Subtotal</p>
                        <p>#{cart.length === 0 ? 0 : cart.map(item => item.price * (item.quantity || 1)).reduce((a, c) => a + c)}</p>
                    </div>
                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Shipping</p>
                        <p>#3000</p>
                    </div>
                    <div className="flex items-center justify-between py-4 mb-8 border border-transparent border-b-[#DDD] font-medium">
                        <p>Total</p>
                        <p>#{cart.length === 0 ? 0 : cart.map(item => item.price * (item.quantity || 1)).reduce((a, c) => a + c) + 3000}</p>
                    </div>
                            
                    <h3 className="font-semibold mt-10 mb-2">Have a coupon code?</h3>
                    <input className="border-2 border-[#DDD] p-3 w-full rounded-[10px] text-[#262626] mb-4 focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" placeholder="Coupon code"/>
                    <button className="bg-secondary hover:bg-primary hover:text-white p-3 w-full rounded-[10px] text-[#262626] font-bold mb-4">Apply Coupon</button>


                    <div className="flex items-center gap-2 py-6">
                        <input type="radio" name="payment" id="paystack" className="w-5 h-5 rounded-[20px] border border-[#DDD] focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                        <label htmlFor="paystack">Paystack</label>
                    </div>
                    <div className="border border-[#DDD] mb-2 rounded-[8px]">
                        <legend className="-mt-5 bg-white w-fit mx-auto p-2 px-10 text-center">Secured by <span className="font-semibold">Paystack</span></legend>
                        <img src="/paystack.png" alt="paystack" width={280} height={40} className="p-8 mx-auto" />
                    </div>
                    
                    <div className="flex items-center gap-2 py-6">
                        <input type="radio" name="payment" id="flutterwave" className="w-5 h-5 rounded-[20px] border border-[#DDD] focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                        <label htmlFor="flutterwave">Flutterwave</label>
                    </div>
                    <div className="border border-[#DDD] mb-2 rounded-[8px]">
                        <legend className="-mt-5 bg-white w-fit mx-auto p-2 px-10 text-center">Secured by <span className="font-semibold">Flutterwave</span></legend>
                        <img src="/flutterwave.png" alt="paystack" width={280} height={40} className="p-8 mx-auto" />
                    </div>

                    <p className="py-4">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to={"/"} className="text-secondary">privacy policy</Link>.</p>
                    <Link to="/checkout" className="block text-center bg-secondary hover:bg-primary hover:text-white p-3 w-full rounded-[10px] text-[#262626] font-bold mb-4">Place Order</Link>
                </div>
            </div>
        </>
    )
}