import { useSearchParams } from "react-router-dom";
import Header from "../../components/header/header";
import Quotes from "../../components/quotes/quotes";
import BookCard from "../../components/bookCard/bookCard";
import { useContext, useEffect } from "react";
import { StoreContext } from "../../context/storeContext";
import Skeleton from "../../components/skeleton/skeleton";

export default function Home () {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const { products, page, setPage, loading, categories, cat, setCat } = useContext(StoreContext) 

    const search = searchParams.get("search") || ""
    const catQuery = searchParams.get("category")

    useEffect(() => {
        setCat(catQuery); setPage({ ...page, currentPage: 1})
    }, [catQuery])

    return (
        <div>
            <Quotes />

            <Header />

            <div className="overflow-x-auto px-[5%] md:block hidden">   
                <div className="flex items-center md:justify-between 2xl:text-[28px] md:text-[18px] text-[16px] flex-nowrap gap-6 font-medium py-8 min-w-[800px] text-nowrap">

                    <button onClick={() => setSearchParams("category", "")} className={` ${ cat === "" ? "bg-secondary/[0.07] text-secondary border border-secondary w-fit rounded-[10px] py-1 px-4" : "" }`}>All</button>

                    {
                        [categories.map(item => (
                            <button key={item.id} onClick={() =>  setSearchParams({category: item.id})} className={`capitalize ${ cat === item.id ? "bg-secondary/[0.07] text-secondary border border-secondary w-fit rounded-[10px] py-1 px-4" : "" }`}>{item.name}</button>
                        ))]
                    }
                </div>
            </div>

            
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:px-[7%] p-6 gap-x-8 gap-y-14">
                {
                    loading ?
                    <>
                        <Skeleton /><Skeleton /><Skeleton /><Skeleton />
                    </>
                    
                    :
                    products?.filter(item => (item?.name?.indexOf(search) !== -1 )).length === 0 ?
                    <p className="italic py-4 text-center font-normal">No book found</p>
                    :
                    products?.filter(item => ( item?.name?.indexOf(search) !== -1 )).map(book => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </div>

            <div className="flex items-center justify-center gap-4 py-8">
                {
                    [...Array(Math.round(page.total/12)).keys()].map(position => (
                        <button key={position} className={`p-2 px-5 rounded-[15px] ${ page.currentPage === position + 1 ? "bg-primary hover:bg-primary/[0.8] text-white" : "bg-[#DDD] text-black hover:bg-primary hover:text-white" }`} onClick={() => setPage({ ...page, currentPage: position + 1})}>{position + 1}</button>
                    ))
                }
                {
                    products?.length < 12 
                    ?
                    ""
                    :
                    <button className="font-semibold hover:text-primary" onClick={() => setPage({ ...page, currentPage: page.currentPage + 1})}>Next</button>
                }
            </div>
        </div>
    )
}
