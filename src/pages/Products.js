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
    grid-template-columns: 200px 1fr;
    gap: 5rem;
  }
  @media screen and (max-width: 662px) {
    .grid-wrapper {
      grid-template-columns: 1fr;
    }
  }
`

export default Products
