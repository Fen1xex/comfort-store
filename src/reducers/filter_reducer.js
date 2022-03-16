const filter_reducer = (state, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      initial_products: [...action.payload],
      filter_products: [...action.payload],
    }
  }
  throw Error(`there is no matching ${action.type}`)
}

export default filter_reducer
