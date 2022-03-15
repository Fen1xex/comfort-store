export const products_reducer = (state, action) => {
  if (action.type === 'OPEN_SIDEBAR') {
    return { ...state, isSidebarOpen: true }
  }
  if (action.type === 'CLOSE_SIDEBAR') {
    return { ...state, isSidebarOpen: false }
  }
  if (action.type === 'IS_LOADING') {
    return { ...state, isLoading: true }
  }
  if (action.type === 'FETCH_PRODUCTS') {
    const featured = action.payload.filter(
      (product) => product.featured !== action.payload.featured
    )
    return {
      ...state,
      isLoading: false,
      products: action.payload,
      featured_products: featured,
    }
  }
  if (action.type === 'SINGLE_IS_LOADING') {
    return { ...state, single_product_loading: true }
  }
  if (action.type === 'FETCH_SINGLE_PRODUCT') {
    return {
      ...state,
      single_product: action.payload,
      single_product_loading: false,
    }
  }
  throw Error(`there is no matching ${action.type}`)
}
