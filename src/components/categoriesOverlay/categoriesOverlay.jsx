import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export default function CategoriesOverlay() {
    const { categories, cat, setCat } = useContext(StoreContext)

    return (
        <div className="md:w-[200px] w-[200px] py-6 px-3 bg-white shadow-lg rounded-[10px] md:text-[16px] text-[14px]">
            <h2 className="py-4 mb-2 text-[24px] text-center">Categories</h2>
            
            <div className="flex flex-col gap-3 px-7">
                {
                    categories?.map(item => (
                        <button key={item.id} onClick={() => setCat(item.id)} className={`flex justify-start w-full hover:text-primary capitalize ${ cat === item.id ? "text-secondary" : "" }`}>{item.name}</button>
                    ))
                }
            </div>
            
        </div>
    )
}