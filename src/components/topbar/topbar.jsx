import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Topbar () {
    const [open, setOpen] = useState(false)
    const pathname = useLocation()
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <nav className="flex items-center justify-between w-full px-6 py-3 overflow-hidden border border-transparent border-b-secondary">
            <Link to={"/"}>
                <img src="/Logo.svg" height={80} alt="hybrid logo" className="2xl:w-[230px] w-[150px]" />
            </Link>

            <div className={`flex lg:flex-row flex-col lg:gap-[8%] xl:text-[20px] bg-white lg:justify-end flex-1 lg:shadow-none shadow-lg lg:p-0 p-[5%] lg:static fixed top-0 left-0 w-full h-full lg:items-center gap-8 duration-700 z-[2] ${open ? "translate-x-0" : "lg:translate-x-0 translate-x-[150%]"}`}>
                <div className={`flex lg:flex-row flex-col lg:items-center font-semibold gap-2`}>
                    <Link to={"/"} className="p-4 py-2 hover:text-primary">Home</Link>
                    <Link to={"/"} className="p-4 py-2 hover:text-primary">Shop</Link>
                    <Link to={"/"} className="p-4 py-2 hover:text-primary">About Us</Link>
                    <Link to={"/"} className="p-4 py-2 hover:text-primary">Contact Us</Link>
                </div>

                <Link to={"/"} className="w-fit p-3 px-6 md:mx-0 mx-4 rounded-[20px] border-2 font-medium border-secondary text-secondary hover:bg-primary hover:text-white">Login</Link>
            </div>

            <button className="flex flex-col gap-1 lg:hidden z-[11] h-[50px] py-4" onClick={() => setOpen(!open)}>
                <span className={`w-[16px] h-[2px] bg-black dark:bg-white rounded transition-all duration-700 ${open ? "rotate-[40deg] translate-y-[3px]" : "rotate-x-(0)"}`}></span>
                <span className={`w-[16px] h-[2px] bg-black dark:bg-white rounded ${open ? "hidden" : "block"}`}></span>
                <span className={`w-[16px] h-[2px] bg-black dark:bg-white rounded transition-all duration-700 ${open ? "rotate-[-40deg] translate-y-[-3px]" : "rotate-x-(0)"}`}></span>
            </button>
        </nav>
    )
}