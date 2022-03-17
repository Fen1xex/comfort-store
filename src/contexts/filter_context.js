import React, { useContext, useEffect, useReducer } from 'react'
import { useProductsContext } from './products_context'
import filter_reducer from '../reducers/filter_reducer'

const FilterContext = React.createContext()

const initialState = {
  initial_products: [],
  filtered_products: [],
  grid_view: false,
  sort: 'price-lowest',
  filters: {
    price: 0,
    max_price: 0,
    min_price: 0,
    category: 'all',
    company: 'all',
    color: 'all',
    shipping: false,
  },
}

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filter_reducer, initialState)
  const { products } = useProductsContext()

  useEffect(() => {
    dispatch({ type: 'SET_PRODUCTS', payload: products })
  }, [products])

  useEffect(() => {
    dispatch({ type: 'SORT_PRODUCTS' })
  }, [products, state.sort])

  const setGridView = () => {
    dispatch({ type: 'SET_GRID_VIEW' })
  }

  const setListView = () => {
    dispatch({ type: 'SET_LIST_VIEW' })
  }

  const updateSort = (event) => {
    const value = event.target.value
    dispatch({ type: 'UPDATE_SORT', payload: value })
  }

  const updateFilters = (event) => {
    const value = event.target.value
    dispatch({ type: 'UPDATE_FILTERS', payload: value })
  }

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, updateSort, updateFilters }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
