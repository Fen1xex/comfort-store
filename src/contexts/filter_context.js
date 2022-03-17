import React, { useContext, useEffect, useReducer } from 'react'
import { useProductsContext } from './products_context'
import filter_reducer from '../reducers/filter_reducer'

const FilterContext = React.createContext()

const initialState = {
  initial_products: [],
  filtered_products: [],
  grid_view: false,
}

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)
  const { products } = useProductsContext()

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products })
  }, [products])

  const setGridView = () => {
    dispatch({ type: 'SET_GRID_VIEW' })
  }

  const setListView = () => {
    dispatch({ type: 'SET_LIST_VIEW' })
  }

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
