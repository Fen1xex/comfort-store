import React, { useEffect, useContext, useReducer } from 'react'
import { products_reducer } from '../reducers/products_reducer'

const ProductsContext = React.createContext()

const initialState = {
  isSidebarOpen: false,
}

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(products_reducer, initialState)

  const closeSidebar = () => {
    dispatch({ type: 'CLOSE_SIDEBAR' })
  }
  const openSidebar = () => {
    dispatch({ type: 'OPEN_SIDEBAR' })
  }

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
