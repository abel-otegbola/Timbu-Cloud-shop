import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import { StoreContext } from "../../context/storeContext";
import { useContext, useState } from "react";
import CheckoutForm from "../../components/checkoutForm/checkoutForm";
import { calculateTotal } from "../../helper/calculateTotal";
import { PaystackButton } from "react-paystack";
import NairaIcon from "../../assets/icons/nairaIcon";

export default function Checkout() {
    const { cart } = useContext(StoreContext)
    const [ paymentType, setPaymentType ] = useState("")
    const [userData, setUserData] = useState({})
    const navigate = useNavigate()

    const componentProps = {
        email: userData?.email,
        amount: (calculateTotal(cart) + 3000) * 100,
        metadata: {
          custom_fields: [],
          name: userData?.firstname,
          phone: userData?.phone,
        },
        publicKey: import.meta.env.VITE_PAYSTACK_API_KEY || "",
        text: "Pay Now",
        onSuccess: (res) => {
            navigate("/payment-successful")
        },
        onClose: () => console.log("error"),
      };

      const submitForm = (data) => {
        setUserData(data)
      }

    return (
        <>
            <Header />
            <h2 className="font-bold mb-3 2xl:text-[36px] text-[24px] p-6">Checkout</h2>

            <div className="flex flex-wrap md:px-8 px-6 py-[3%] md:gap-0 gap-12">

                <div className="md:w-[60%] w-full border border-transparent 2xl:text-[20px] sm:text-[16px] text-[14px] md:border-r-[#DDD] md:px-[5%]">

                    <p>Are you a returning customer? <Link className="text-secondary" to={"/"}>Login</Link></p>

                    <h3 className="font-semibold 2xl:text-[20px] mt-10 mb-6">Billing Details</h3>

                    <CheckoutForm submitForm={submitForm}/>
                </div>


                <div className="md:w-[40%] w-full md:px-6 2xl:text-[20px] sm:text-[16px] text-[14px]">
                    <h2 className="mb-3 md:text-[20px] text-[18px]">Your Order</h2>

                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Product</p>
                        <p>Subtotal</p>
                    </div>

                    {
                        cart.map(book => (
                            <div key={book.id} className="flex items-center justify-between py-4 ">
                                <p>{book.name} <span className="ml-2">X{book.quantity || 1}</span></p>
                                <p className="flex items-center gap-1"><NairaIcon className={"w-[14px]"} />{book.price * (book.quantity || 1)}</p>
                            </div>
                        ))
                    }

                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Subtotal</p>
                        <p className="flex items-center gap-1"><NairaIcon className={"w-[14px]"} /> {calculateTotal(cart)}</p>
                    </div>
                    <div className="flex items-center justify-between py-4 border border-transparent border-b-[#DDD]">
                        <p>Shipping</p>
                        <p className="flex items-center gap-1"><NairaIcon className={"w-[14px]"} /> 3000</p>
                    </div>
                    <div className="flex items-center justify-between py-4 mb-8 border border-transparent border-b-[#DDD] font-medium">
                        <p>Total</p>
                        <p className="flex items-center gap-1"><NairaIcon className={"w-[14px]"} /> {calculateTotal(cart) + 3000}</p>
                    </div>
                            
                    <h3 className="font-semibold mt-10 mb-2">Have a coupon code?</h3>
                    <input className="border-2 border-[#DDD] p-3 w-full rounded-[10px] text-[#262626] mb-4 focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" placeholder="Coupon code"/>
                    <button className="bg-secondary hover:bg-primary hover:text-white p-3 w-full rounded-[10px] text-[#262626] font-bold mb-4">Apply Coupon</button>


                    <div className="flex items-center gap-2 py-6">
                        <input type="radio" onChange={(e) => setPaymentType("Paystack")} name="payment" id="paystack" className="w-5 h-5 rounded-[20px] border border-[#DDD] focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                        <label htmlFor="paystack">Paystack</label>
                    </div>
                    <div className="border border-[#DDD] mb-2 rounded-[8px]">
                        <legend className="-mt-5 bg-white w-fit mx-auto p-2 px-10 text-center">Secured by <span className="font-semibold">Paystack</span></legend>
                        <img src="/paystack.png" alt="paystack" width={280} height={40} className="p-8 mx-auto" />
                    </div>
                    
                    <div className="flex items-center gap-2 py-6">
                        <input type="radio" onChange={(e) => setPaymentType("Flutterwave")} name="payment" id="flutterwave" className="w-5 h-5 rounded-[20px] border border-[#DDD] focus:outline focus:outline-secondary/[0.3] outline-offset-2 focus:border-primary" />
                        <label htmlFor="flutterwave">Flutterwave</label>
                    </div>
                    <div className="border border-[#DDD] mb-2 rounded-[8px]">
                        <legend className="-mt-5 bg-white w-fit mx-auto p-2 px-10 text-center">Secured by <span className="font-semibold">Flutterwave</span></legend>
                        <img src="/flutterwave.png" alt="paystack" width={280} height={40} className="p-8 mx-auto" />
                    </div>
                    {
                        paymentType === "Paystack" 
                        ? 
                            <PaystackButton 
                                className="paystack-button w-full text-[15px] font-bold px-[20px] mb-4 mt-4 lg:py-[20px] py-[18px] rounded bg-[#68C3D4]  hover:bg-[#088399] active:bg-[#088399] text-white" 
                                {...componentProps} 
                            />
                        :
                        ""
                    }

                    <p className="py-4">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link to={"/"} className="text-secondary">privacy policy</Link>.</p>
                    <Link to="/checkout" className="block text-center bg-secondary hover:bg-primary hover:text-white p-3 w-full rounded-[10px] text-[#262626] font-bold mb-4">Place Order</Link>
                </div>
            </div>
        </>
    )
}