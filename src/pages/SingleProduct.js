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
  const { name, price, description, stock, company, images, stars, reviews } =
    single_product
  console.log(single_product)
  return (
    <Wrapper>
      <PageHero title={name} products='products' />
      <div className='section-center page'>
        <Link to='/products' className='back-btn'>
          back to products
        </Link>
        <div className='single-wrapper'>
          <ProductImages images={images} />
          <article className='single-product'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
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

const Wrapper = styled.section`
  .page {
    min-height: calc(100vh - (20vh + 10rem));
  }

  .section-center {
    width: 90vw;
    max-width: 1170px;
    margin: 5rem auto;
  }
  .back-btn {
    color: var(--primary1);
    background: var(--heading);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: 2px solid var(--heading);
    &:hover {
      color: var(--heading);
      background: var(--primary1);
      transition: all 0.1s linear;
    }
  }

  .single-wrapper {
    margin-top: 5rem;
    display: grid;
    gap: 4rem;
  }
  @media screen and (min-width: 992px) {
    .single-wrapper {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`

export default SingleProduct
