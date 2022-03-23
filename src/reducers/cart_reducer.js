const cart_reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const { id, color, amount, product } = action.payload
    const tempProduct = state.cart.find((item) => item.id === id + color)
    if (tempProduct) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })

      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id + color,
        image: product.images[0].url,
        color,
        name: product.name,
        price: product.price,
        amount,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  throw new Error(`there is no matching "${action.type}"`)
}

export default cart_reducer
