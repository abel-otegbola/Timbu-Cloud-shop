import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { getSingleProduct } from "../../helper/axiosFetch";
import LazyLoad from "react-lazyload";

export default function Product() {
    const pathname = useLocation().pathname;
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const id = pathname.replace("/product/", "") || 0

    useEffect(() => {
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
            <div>
                {
                !loading ? 
                    <div className="flex flex-wrap gap-6 ">
                        <div className="md:w-[40%] md:px-[5%]">
                            <LazyLoad height={400}>
                                {
                                    product.photos ?
                                    <img src={import.meta.env.VITE_API_IMG_URL + "/" +  product?.photos[0].url} alt={product?.title} width={"100%"} className="rounded-[15px]" />
                                    : ""
                                }
                            </LazyLoad>
                        </div>

                        <div className="md:w-[50%] md:px-[5%] px-6">
                            <h1 className="text-primary md:text-[36px] text-[20px] font-semibold">{product?.name}</h1>
                            <h1 className="text-primary md:text-[36px] text-[20px] font-semibold">{product?.selling_price}</h1>

                        </div>
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    )
}