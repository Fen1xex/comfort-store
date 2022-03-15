import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../contexts/products_context'
import { useParams, Link } from 'react-router-dom'
import { single_product_url as url } from '../utils/constants'
import { format_price as format } from '../utils/helpres'
import {
  PageHero,
  ProductImages,
  Stars,
  Colors,
  AddToCart,
} from '../components'

const SingleProduct = () => {
  const { fetchSingleProduct, single_product, single_product_loading } =
    useProductsContext()
  const { id } = useParams()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [id])

  if (single_product_loading) {
    return <h2>Loading...</h2>
  }
  if (!single_product) {
    return <h2>Loading...</h2>
  }
  const { name, price, description, stock, sku, company } = single_product
  return (
    <Wrapper>
      <div className='section-center'>
        <PageHero title={name} products='products' />
        <Link to='/products'>back to products</Link>
        <div className='single-wrapper'>
          <ProductImages />
          <article className='single-product'>
            <h2>{name}</h2>
            <Stars />
            <h3>{format(price)}</h3>
            <p>{description}</p>
            <div className='info'>
              <h4>
                Available: <span>{stock ? 'In stock' : 'Out of stock'}</span>
              </h4>
              <h4>
                SKU: <span>{id}</span>
              </h4>
              <h4>
                Brand: <span>{company}</span>
              </h4>
            </div>
            <Colors />
            <AddToCart />
          </article>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default SingleProduct
