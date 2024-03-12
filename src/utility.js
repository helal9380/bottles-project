const storedLocalStorage = () => {
    const storedData = localStorage.getItem('cart');
    if(storedData) {
        return JSON.parse(storedData)
    }
    return []
}
const saveLC = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}
const addLC = (id) => {
    const cart = storedLocalStorage();
    cart.push(id)
    saveLC(cart);
}

export {addLC, storedLocalStorage}