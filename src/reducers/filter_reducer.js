const filter_reducer = (state, action) => {
  if (action.type === 'SET_PRODUCTS') {
    let maxPrice = action.payload.map((product) => product.price)
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      initial_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, price: maxPrice, max_price: maxPrice },
    }
  }
  if (action.type === 'SET_GRID_VIEW') {
    return { ...state, grid_view: true }
  }
  if (action.type === 'SET_LIST_VIEW') {
    return { ...state, grid_view: false }
  }
  if (action.type === 'UPDATE_SORT') {
    return {
      ...state,
      sort: action.payload,
    }
  }
  if (action.type === 'SORT_PRODUCTS') {
    const { sort, filtered_products } = state
    let tempProducts = [...filtered_products]
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return { ...state, filtered_products: tempProducts }
  }
  if (action.type === 'UPDATE_FILTERS') {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === 'FILTER_PRODUCTS') {
    // console.log('filtering products')
    const { initial_products: all_products } = state
    const { text, category, company, color, price, shipping } = state.filters

    let tempProducts = [...all_products]
    //text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text)
      })
    }
    //category
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      )
    }
    //colors
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((item) => item === color)
      })
    }
    //shipping
    if (shipping) {
      tempProducts = tempProducts.filter((product) => product.shipping === true)
    }
    //price
    tempProducts = tempProducts.filter((product) => product.price <= price)
    return {
      ...state,
      filtered_products: tempProducts,
    }
  }
  if (action.type === 'CLEAR_FILTERS') {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        price: state.max_price,
        category: 'all',
        company: 'all',
        color: 'all',
        shipping: false,
      },
    }
  }
  throw Error(`there is no matching ${action.type}`)
}

export default filter_reducer
