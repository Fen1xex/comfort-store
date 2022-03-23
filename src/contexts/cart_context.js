import React, { useContext, useEffect, useReducer } from 'react'
import cart_reducer from '../reducers/cart_reducer'

const CartContext = React.createContext()

const getFromLocalStorage = () => {
  let localCart = localStorage.getItem('cart')
  if (localCart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: getFromLocalStorage(),
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

  //add to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  //remove items from cart
  const removeItems = (id) => {
    dispatch({ type: 'REMOVE_ITEMS', payload: id })
  }

  //clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR' })
  }
  //toggle amount
  const toggleAmount = () => {}
  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeItems, clearCart, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider }
