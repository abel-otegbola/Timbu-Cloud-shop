export const toggleToWishlist = (item, wishlist, setWishlist) => {
    if(wishlist.map(element => element.id).indexOf(item.id) === -1) {
        setWishlist([ ...wishlist, 
            {
                id: item.id, 
                name: item.name, 
                categories: item.categories[0].name,
                img: `${import.meta.env.VITE_API_IMG_URL + "/" + item.photos[0].url}`, 
                price: typeof item.current_price === "number" ? item.current_price : item?.current_price[0].NGN[0], 
                quantity: 1
            } 
        ])
    }
    else {
        setWishlist(wishlist.filter(bookIndex => bookIndex.id !== item.id))
    }

}

export const removeItemFromWishlist = (id, wishlist, setWishlist) => {
    setWishlist(wishlist.filter(item => item.id !== id))
}