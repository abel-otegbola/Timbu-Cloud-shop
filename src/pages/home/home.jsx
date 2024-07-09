import { Link, useSearchParams } from "react-router-dom";
import Header from "../../components/header/header";
import Quotes from "../../components/quotes/quotes";
import { books } from "../../data/books";
import BookCard from "../../components/bookCard/bookCard";
import { useState } from "react";

export default function Home () {
    const [ searchParams ] = useSearchParams()
    const [page, setPage] = useState(1)

    const cat = searchParams.get("cat") || "Non-Fiction"
    const search = searchParams.get("search") || ""

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

            <div className="overflow-x-auto px-[7%] md:block hidden">   
                <div className="flex items-center md:justify-between flex-nowrap gap-6 font-medium py-8 min-w-[800px] text-nowrap">
                    {
                        [categories.map(item => (
                            <Link key={item.id} to={"/?cat="+ item.title} className={` ${ cat === item.title ? "underline font-bold" : "" }`}>{item.title}</Link>
                        ))]
                    }
                </div>
            </div>

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:px-[7%] p-6 sm:gap-4 gap-12">
                {
                    books.filter(item => item.title.indexOf(search) !== -1).map(book => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </div>

            <div className="flex items-center justify-center gap-4 py-8">
                <button className={`p-2 px-5 rounded-[15px] ${ page === 1 ? "bg-primary hover:bg-primary/[0.8] text-white" : "bg-[#DDD] text-black hover:bg-primary hover:text-white" }`} onClick={() => setPage(1)}>1</button>
                <button className={`p-2 px-5 rounded-[15px] ${ page === 2 ? "bg-primary hover:bg-primary/[0.8] text-white" : "bg-[#DDD] text-black hover:bg-primary hover:text-white" }`} onClick={() => setPage(2)}>2</button>
                <button className="font-semibold hover:text-primary" onClick={() => setPage(2)}>Next</button>
            </div>
        </div>
    )
}