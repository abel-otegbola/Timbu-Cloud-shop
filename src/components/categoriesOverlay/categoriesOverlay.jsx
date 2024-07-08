import { Link } from "react-router-dom";

export default function CategoriesOverlay() {

    return (
        <div className="md:w-[200px] w-[200px] py-6 px-3 bg-white shadow-lg rounded-[10px] ">
            <h2 className="py-4 mb-2 md:text-[30px] text-[24px] text-center">Categories</h2>
            
            <div className="flex flex-col gap-3 px-4">
                <Link to={"/?cat=Non-Fiction"} className="hover:text-primary">Non-Fiction</Link>
                <Link to={"/?cat=Fiction"} className="hover:text-primary">Fiction</Link>
                <Link to={"/?cat=Business"} className="hover:text-primary">Business</Link>
                <Link to={"/?cat=Poetry"} className="hover:text-primary">Poetry</Link>
                <Link to={"/?cat=Children"} className="hover:text-primary">Children</Link>
                <Link to={"/?cat=Self Help"} className="hover:text-primary">Self Help</Link>
                <Link to={"/?cat=Educational"} className="hover:text-primary">Educational</Link>
                <Link to={"/?cat=Religious"} className="hover:text-primary">Religious</Link>
            </div>
            
        </div>
    )
}