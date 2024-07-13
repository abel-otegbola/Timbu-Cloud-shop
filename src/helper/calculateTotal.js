export const calculateTotal = (cart) => {
    return cart.length === 0 ? 0 : cart
            .map(item => item.price * (item.quantity || 1))
            .reduce((a, c) => a + c)
}