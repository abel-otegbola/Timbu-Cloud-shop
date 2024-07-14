import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import { Link } from "react-router-dom";

export default function CategoriesOverlay() {
    const { categories, cat } = useContext(StoreContext)

    return (
        <div className="md:w-[200px] w-[200px] py-6 px-3 bg-white shadow-lg rounded-[10px] md:text-[16px] text-[14px]">
            <h2 className="py-4 mb-2 text-[24px] text-center">Categories</h2>
            
            <div className="flex flex-col gap-3 px-7">
                {
                    categories?.map(item => (
                        <Link
                            key={item.id} 
                            to={"/?category=" + item.id}
                            className={`flex justify-start w-full hover:text-primary capitalize ${ cat === item.id ? "text-secondary" : "" }`}
                        >
                            {item.name}
                        </Link>
                    ))
                }
            </div>
            
        </div>
    )
}