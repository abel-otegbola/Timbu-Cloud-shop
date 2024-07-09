import { Link } from "react-router-dom";

export default function WishlistOverlay() {

    return (
        <div className="md:w-[400px] w-[300px] py-6 px-3 bg-white shadow-lg rounded-[10px] text-center md:text-[16px] text-[12px]">
            <h2 className="py-4 mb-2 text-[24px] text-center">Wishlist</h2>
        
            <p className="italic py-8">There's nothing in your Wishlist</p>

            <Link to={"/"} className="block text-center bg-secondary p-2 w-[60%] mx-auto hover:bg-primary hover:text-white rounded-[10px] text-[#262626] font-bold" >
                Back to shop
            </Link>
            
        </div>
    )
}