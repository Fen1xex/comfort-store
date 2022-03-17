const filter_reducer = (state, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      initial_products: [...action.payload],
      filtered_products: [...action.payload],
    }
  }
  if (action.type === 'SET_GRID_VIEW') {
    return { ...state, grid_view: true }
  }
  if (action.type === 'SET_LIST_VIEW') {
    return { ...state, grid_view: false }
  }
  throw Error(`there is no matching ${action.type}`)
}

export default filter_reducer
