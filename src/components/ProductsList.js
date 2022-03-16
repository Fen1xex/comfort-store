import React from 'react'
import { useFilterContext } from '../contexts/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductsList = () => {
  const { filtered_products: products } = useFilterContext()
  return <GridView products={products}>product list</GridView>
}

export default ProductsList
