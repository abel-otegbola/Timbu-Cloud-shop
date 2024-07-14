import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

export default function CategoriesOverlay() {
    const { categories } = useContext(StoreContext)

    return (
        <div className="md:w-[200px] w-[200px] py-6 px-3 bg-white shadow-lg rounded-[10px] md:text-[16px] text-[14px]">
            <h2 className="py-4 mb-2 text-[24px] text-center">Categories</h2>
            
            <div className="flex flex-col gap-3 px-7">
                {
                    categories?.map(cat => (
                        <Link key={cat.id} to={"/?cat=" + cat.name} className="hover:text-primary capitalize">{cat.name}</Link>
                    ))
                }
            </div>
            
        </div>
    )
}