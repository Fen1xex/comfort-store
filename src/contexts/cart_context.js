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
  //add to cart
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } })
  }

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider }
