import React from 'react'
import { useProductsContext } from '../contexts/products_context'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { format_price } from '../utils/helpres'

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
          {featured_products.slice(0, 3).map((item) => {
            const { name, price, image } = item
            return (
              <article key={item.id} className='featured-product'>
                <div className='img-wrapper'>
                  <img src={image} alt={name} />
                  <Link to={`/products/${item.id}`}>
                    <AiOutlineSearch className='icon' />
                  </Link>
                </div>

                <div>
                  <h4>{name}</h4>
                  <h4>{format_price(price)}</h4>
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
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
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
  .img-wrapper {
    position: relative;
    &:hover {
      .icon {
        display: block;
      }
    }
  }
  .img-wrapper::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
    opacity: 0;
    transition: all 0.3s linear;
  }
  .img-wrapper:hover:before {
    opacity: 0.5;
  }
  .icon {
    color: var(--heading);
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    padding: 10px;
    background: var(--primary1);
    transition: all 0.2s linear;
    display: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-size: 2rem;
    z-index: 10;
  }
`

export default FeaturedProducts
