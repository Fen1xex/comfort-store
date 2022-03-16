import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../contexts/filter_context'
import { format_price } from '../utils/helpres'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Products = () => {
  const { initial_products } = useFilterContext()

  return (
    <Wrapper>
      <div className='section-center grid-wrapper'>
        <div>
          <h3>List</h3>
        </div>
        <div className='products'>
          {initial_products.map((product) => {
            const { image, id, price, name } = product
            return (
              <article key={id}>
                <div className='img-container'>
                  <img src={image} alt={name} />
                  <Link to={`/products/${id}`} className='link'>
                    <AiOutlineSearch />
                  </Link>
                </div>

                <div className='products-info'>
                  <h4>{name}</h4>
                  <h4>{format_price(price)}</h4>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  .grid-wrapper {
    display: grid;
    grid-template-columns: 1fr 5fr;
    gap: 5rem;
  }
  article {
    margin: 2.5rem 0;
  }
  .img-container {
    position: relative;
    background: black;
  }
  .img-container:hover svg {
    opacity: 1;
  }
  .img-container:hover img {
    opacity: 0.5;
  }
  svg {
    opacity: 0;
    transition: all 0.1s linear;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
  }
  .link {
    color: var(--heading);
  }
  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
  }
  .products-info {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
  }
`

export default Products
