import React, { useContext, useReducer } from 'react'
import cart_reducer from '../reducers/cart_reducer'

const CartContext = React.createContext()

const initialState = {
  cart: [],
  items_amount: 0,
  money_amount: 0,
  shipping_fee: 322,
}

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cart_reducer, initialState)

  return <CartContext.Provider value='hello'>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider }
