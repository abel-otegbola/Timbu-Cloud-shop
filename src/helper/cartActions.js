export const toggleToCart = (item, cart, setCart) => {
    if(cart.map(element => element.id).indexOf(item.id) === -1) {
        setCart([ ...cart, 
            {
                id: item.id, 
                name: item.name, 
                img: typeof item.img === "string" ? item.img : `${import.meta.env.VITE_API_IMG_URL + "/" + item.photos[0].url}`, 
                price: typeof item.price === "number" ? item.price : typeof item.current_price === "number" ? item.current_price : item?.current_price[0].NGN[0], 
                quantity: 1
            } 
        ])
    }
    else {
        setCart(cart.filter(bookIndex => bookIndex.id !== item.id))
    }

}
export const handleQuantity = (id, value, cart, setCart) => {
    setCart(cart.map(item => {
        if(item.id === id) {
            return { ...item, quantity: value } 
        }
        else {
            return item
        }
    }))
}
export const removeItemFromCart = (id, cart, setCart) => {
    setCart(cart.filter(item => item.id !== id))
}