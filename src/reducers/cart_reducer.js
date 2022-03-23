const cart_reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, color, amount, product } = action.payload
    console.log(product)
    const tempProduct = state.cart.find((item) => item.id === id + color)
    if (tempProduct) {
    } else {
      const newItem = {
        id: id + color,
        image: product.images[0].url,
        color: color,
        name: product.name,
        price: product.price,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }

    return { ...state }
  }
  throw new Error(`there is no matching "${action.type}"`)
}

export default cart_reducer
