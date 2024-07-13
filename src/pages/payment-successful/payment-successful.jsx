import { Link } from "react-router-dom";

export default function PaymentSuccesful() {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center gap-8">
            <h1 className="md:text-[36px] text-[24px]">Your Order was placed successfully</h1>
            <Link to={"/"} className="flex items-center gap-2 p-2 px-5 rounded-[10px] border-2 border-secondary hover:bg-primary hover:text-white text-secondary">Continue Shopping</Link>
        </div>
    )
}