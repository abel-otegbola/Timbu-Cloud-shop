import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { getSingleProduct } from "../../helper/axiosFetch";
import LazyLoad from "react-lazyload";
import NairaIcon from "../../assets/icons/nairaIcon";
import HeartIcon from "../../assets/icons/heartIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";
import TwitterIcon from "../../assets/icons/twitterIcon";
import InstagramIcon from "../../assets/icons/instagramIcon";
import CartIcon from "../../assets/icons/cartIcon";
import { StoreContext } from "../../context/storeContext";
import { toggleToCart } from "../../helper/cartActions";
import CartQuantity from "../../components/cartQuantity/cartQuantity";
import { toggleToWishlist } from "../../helper/wishlistActions";

export default function Product() {
    const pathname = useLocation().pathname;
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { cart, setCart, wishlist, setWishlist } = useContext(StoreContext)

    const id = pathname.replace("/product/", "") || 0
    
    const isBookInWishlist = wishlist.map(element => element.id).indexOf(id) !== -1
    

    useEffect(() => { // Fetch the product using the id from the API
        setLoading(true)
        getSingleProduct(id)
        .then(response => {
            setProduct(response.data)
            setLoading(false)
        })
        .catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [id])


    return (
        <div className="md:p-[5%] p-6">
            <div className="mb-6">
                {
                !loading ? 
                    <div className="flex flex-wrap gap-6 ">
                        <div className="sm:w-[40%] md:px-[5%]">
                            <LazyLoad height={400}>
                                {
                                    product.photos ?
                                    <img src={import.meta.env.VITE_API_IMG_URL + "/" +  product?.photos[0].url} alt={product?.title} width={"100%"} className="rounded-[15px]" />
                                    : ""
                                }
                            </LazyLoad>
                        </div>

                        <div className="sm:w-[50%] w-full md:px-[5%] sm:py-0 py-6 sm:px-6">
                            <h1 className="text-primary md:text-[36px] text-[20px] font-semibold pb-2">{product?.name}</h1>
                            <h2 className="text-[18px] font-semibold flex items-center gap-1 p-1 px-2"><NairaIcon className={"w-[16px]"}/> {product?.current_price}</h2>

                            <div className="flex items-center justify-between border border-transparent border-b-gray-500/[0.3]">
                                <p className="font-semibold pt-6 pb-2 text-primary"><span className="font-semibold"></span> {product?.extra_infos?.map(info => (
                                    <span key={info.id}>{info.key}: {info.value}</span>
                                ))}</p>
                                <p className="font-semibold pt-6 pb-2 text-primary "><span className="font-semibold">Categories: </span> {product?.categories?.map(cat => (
                                    <span key={cat.id}>{cat.name}</span>
                                ))}</p>
                            </div>

                            <div className="flex items-center justify-between py-6 border border-transparent border-b-gray-500/[0.3]">
                                <button 
                                    className={`flex gap-2 items-center bg-secondary/[0.07] text-secondary border border-secondary bg-secondary/[0.07]  w-fit rounded-[10px] px-4`}
                                    onClick={() => toggleToWishlist(product, wishlist, setWishlist)}>
                                    <HeartIcon className={"w-[18px]"} /> <span>{isBookInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
                                </button>

                                <div className="flex items-center gap-3">
                                    <p className="font-semibold">Share: </p>
                                    <Link className="" to={"https://facebook.com"}><FacebookIcon className={"w-[18px]"} /></Link>
                                    <Link className="" to={"https://x.com"}><TwitterIcon className={"w-[18px]"} /></Link>
                                    <Link className="" to={"https://instagram.com"}><InstagramIcon className={"w-[18px]"} /></Link>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between py-6 gap-6">
                                <button className="flex gap-2 items-center bg-primary text-white w-fit rounded-[10px] px-6 py-2" onClick={() => toggleToCart(product, cart, setCart)}>
                                    <CartIcon className={"w-[18px]"} /> <span>{ cart.map(element => element.id).indexOf(product?.id) !== -1 ? "Remove From Cart" : "Add To Cart" }</span>
                                </button>
                                {
                                    cart.map(element => element.id).indexOf(product?.id) !== -1 ?
                                        <>
                                            <CartQuantity book={cart.filter(item => item.id === product?.id)[0]} cart={cart} setCart={setCart} />
                                            <Link to={"/cart"} className="w-full block text-center border border-primary/[0.3] text-primary rounded-[10px] px-6 py-3">View Cart</Link>
                                        </>
                                        : 
                                        "" 
                                }
                            </div>

                        </div>
                    </div>
                    :
                    ""
                }
            </div>

            <div className="flex flex-col gap-6 md:p-[5%]">
                <h2 className="font-semibold text-[18px] border border-transparent border-b-gray-500/[0.3]">Description</h2>
                {product?.description}
            </div>
        </div>
    )
}