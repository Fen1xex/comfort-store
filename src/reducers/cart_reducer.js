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
  if (action.type === 'REMOVE_ITEMS') {
    let tempItems = state.cart.filter((item) => item.id !== action.payload)
    return { ...state, cart: tempItems }
  }
  if (action.type === 'CLEAR') {
    return { ...state, cart: [] }
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, value } = action.payload
    let tempCart = state.cart.map((product) => {
      if (product.id === id) {
        if (value === 'inc') {
          let newAmount = product.amount + 1
          if (newAmount > product.max) {
            newAmount = product.max
          }
          return { ...product, amount: newAmount }
        }
        if (value === 'dec') {
          let newAmount = product.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...product, amount: newAmount }
        }
      }
      return product
    })
    return { ...state, cart: tempCart }
  }
  throw new Error(`there is no matching action type "${action.type}"`)
}

export default cart_reducer
