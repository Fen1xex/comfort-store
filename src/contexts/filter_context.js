import React, { useContext, useEffect, useReducer } from 'react'
import { useProductsContext } from './products_context'
import filter_reducer from '../reducers/filter_reducer'

const FilterContext = React.createContext()

const initialState = {
  initial_products: [],
  filtered_products: [],
}

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)
  const { products } = useProductsContext()

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products })
  }, [products])

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
