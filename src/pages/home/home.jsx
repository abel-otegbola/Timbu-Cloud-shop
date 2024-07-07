import { Link, useSearchParams } from "react-router-dom";
import Header from "../../components/header/header";
import Quotes from "../../components/quotes/quotes";
import { books } from "../../data/books";

export default function Home () {
    const [ searchParams ] = useSearchParams()

    const cat = searchParams.get("cat") || "Non-Fiction"

    const categories = [
        { id: 0, title: "Non-Fiction" },
        { id: 1, title: "Fiction" },
        { id: 2, title: "Children" },
        { id: 3, title: "Business" },
        { id: 4, title: "Poetry" },
        { id: 5, title: "Self Help" },
        { id: 6, title: "Educational" },
        { id: 7, title: "Religious" }
    ]

    return (
        <div>
            <Quotes />

            <Header />

            <div className="flex items-center md:justify-between md:flex-nowrap flex-wrap gap-6 px-[5%] font-medium py-8">
                {
                    [categories.map(item => (
                        <Link key={item.id} to={"/?cat="+ item.title} className={`${ cat === item.title ? "underline font-bold" : "" }`}>{item.title}</Link>
                    ))]
                }
            </div>

            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 p-6 gap-4">
                {
                    books.map(book => (
                        <Link key={book.id} className="flex flex-col gap-2" to={"/book/"+ book.title}>
                            <img src={book.img} alt={book.title} width={"100%"} className="rounded-[15px]" />
                            <p className="opacity-[0.7]">{book.category}</p>
                            <p className="text-primary font-semibold">{book.title}</p>
                            <p className="font-semibold">#{book.price}</p>
                            <button className="bg-secondary p-2 w-full rounded-[10px] text-[#262626] font-bold">Add To Cart</button>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}