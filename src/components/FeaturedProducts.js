import React from 'react'
import { useProductsContext } from '../contexts/products_context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  const { featured_products, products, isLoading } = useProductsContext()
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (!featured_products) {
    return <h2>Loading...</h2>
  }
  return (
    <Wrapper>
      <div className='center'>
        <h2 className='title'>Featured Products</h2>
        <div className='featured-products'>
          {featured_products.map((item) => {
            const { name, price, image } = item
            return (
              <article key={item.id} className='featured-product'>
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <h4>{price}</h4>
                </div>
              </article>
            )
          })}
        </div>
        <div className='link-container'>
          <Link to='/' className='link'>
            All Products
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 15rem 0;
  .title {
    text-align: center;
    margin: 5rem 0;
  }
  .featured-products {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
    margin-bottom: 5rem;
  }
  .featured-product {
    img {
      width: 100%;
      height: 175px;
      object-fit: cover;
    }
    div {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  }
  .link-container {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  .link {
    margin: 0 auto;
    color: var(--text);
    margin-top: 5rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    border: 2px solid var(--heading);
    border-radius: var(--radius);
  }
  .link-container {
    display: grid;
    place-items: center;
  }
`

export default FeaturedProducts
