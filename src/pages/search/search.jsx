import { useSearchParams } from "react-router-dom";
import Header from "../../components/header/header";
import Quotes from "../../components/quotes/quotes";
import BookCard from "../../components/bookCard/bookCard";
import { useEffect, useState } from "react";
import { searchProducts } from "../../helper/axiosFetch";
import Skeleton from "../../components/skeleton/skeleton";

export default function Search () {
    const [searchResult, setSetSearchResult] = useState([])
    const [searchParams, ] = useSearchParams()
    const [loading, setLoading] = useState(false)

    const search = searchParams.get("search") || ""

    useEffect(() => { // Fetch the product from the API using the search query 
        setLoading(true)
        searchProducts(search)
        .then(response => {
            setSetSearchResult(response.data.items)
            setLoading(false)
        })
        .catch(error => {
            setError(error)
            setLoading(false)
        })
    }, [search])

    return (
        <div>
            <Quotes />

            <Header />

            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:px-[7%] p-6 gap-x-8 gap-y-14">
                {
                    loading ?
                    <Skeleton />
                    :
                    searchResult?.filter(item => (item?.name?.indexOf(search) !== -1 )).length === 0 ?
                    <p className="italic py-4 text-center font-normal">No book found</p>
                    :
                    searchResult?.filter(item => ( item?.name?.indexOf(search) !== -1 )).map(book => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </div>

        </div>
    )
}
