import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../contexts/filter_context'
import { format_price } from '../utils/helpres'
import { AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { PageHero, Filters, Sort, ProductsList } from '../components'

const Products = () => {
  return (
    <main>
      <PageHero title='products' />
      <Wrapper>
        <div className='section-center grid-wrapper'>
          <Filters />
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </Wrapper>
    </main>
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
