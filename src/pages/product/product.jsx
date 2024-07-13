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

export default function Product() {
    const pathname = useLocation().pathname;
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const { cart, setCart } = useContext(StoreContext)

    const id = pathname.replace("/product/", "") || 0

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

    const toggleToCart = (item) => {
        if(cart.map(element => element.id).indexOf(item.id) === -1) {
            setCart([ ...cart, item ])
        }
        else {
            setCart(cart.filter(bookIndex => bookIndex.id !== item.id))
        }
    }

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
                                <button className="flex gap-2 items-center bg-secondary/[0.07] text-secondary border border-secondary w-fit rounded px-4">
                                    <HeartIcon className={"w-[18px]"} /> <span>Add to Wishlist</span>
                                </button>

                                <div className="flex items-center gap-3">
                                    <p className="font-semibold">Share: </p>
                                    <Link className="" to={"https://facebook.com"}><FacebookIcon className={"w-[18px]"} /></Link>
                                    <Link className="" to={"https://x.com"}><TwitterIcon className={"w-[18px]"} /></Link>
                                    <Link className="" to={"https://instagram.com"}><InstagramIcon className={"w-[18px]"} /></Link>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-6 ">
                                <button className="flex gap-2 items-center bg-primary text-white w-fit rounded px-6 py-2" onClick={() => toggleToCart(product)}>
                                    <CartIcon className={"w-[18px]"} /> <span>{ cart.map(element => element.id).indexOf(product.id) !== -1 ? "Remove From Cart" : "Add To Cart" }</span>
                                </button>
                                {
                                    cart.filter(item => item.id === product.id).map(book => (
                                        <div key={book.id} className=" flex items-center w-fit font-semibold items-start border border-[#262626] rounded overflow-hidden duration-700">
                                            <button className="sm:text-lg sm:w-[40px] w-[20px] h-[45px] bg-[#DDD] hover:bg-[#DDD]/[0.8]" onClick={() => handleQuantity(book.id, (book.quantity || 1) - 1)}>-</button>
                                            <input type="number" className="h-full sm:w-[55px] w-[35px] md:text-[16px] text-[12px] text-center bg-white" value={book.quantity || 1} onChange={(e) => handleQuantity(book.id, e.target.value)} />
                                            <button className="sm:text-lg sm:w-[40px] w-[20px] h-[45px] bg-[#DDD] hover:bg-[#DDD]/[0.8]" onClick={() => handleQuantity(book.id, (book.quantity || 1) + 1)}>+</button>
                                        </div>
                                    ))
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