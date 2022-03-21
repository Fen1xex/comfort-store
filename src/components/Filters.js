import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../contexts/filter_context'
import { getUniqueValues } from '../utils/helpres'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    initial_products,
  } = useFilterContext()

  const categories = getUniqueValues(initial_products, 'category')
  const companies = getUniqueValues(initial_products, 'company')
  const colors = getUniqueValues(initial_products, 'colors')

  return (
    <Wrapper>
      <div className='content'>
        <form
          onSubmit={(event) => {
            event.preventDefault()
          }}
        >
          {/* search input */}
          <input
            type='text'
            name='text'
            placeholder='search'
            className='search-input'
            value={text}
            onChange={updateFilters}
          />
          {/* end of search input */}
          {/* categories */}
          <div className='categories'>
            <h5>category</h5>
            {categories.map((item, index) => {
              return (
                <button
                  name='category'
                  type='button'
                  className={`${
                    category === item.toLowerCase() ? 'active' : null
                  }`}
                  key={index}
                  onClick={updateFilters}
                >
                  {item}
                </button>
              )
            })}
          </div>
          {/* end of categories */}
          {/* colors */}
          <div className='colors'>
            <h5>colors</h5>
          </div>
          {/* end of colors */}
          {/* clear */}
          <button onClick={clearFilters} className='clear'>
            clear filters
          </button>
          {/* end of clear */}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .categories {
    display: grid;
    height: 300px;
    h5 {
      margin: 1rem 0;
    }
    button {
      background: transparent;
      border: none;
      margin: 0.5rem 0;
      text-align: start;
      color: var(--heading);
      transition: all 0.1s linear;
      cursor: pointer;
    }
    .active {
      border-bottom: 2px solid var(--heading);
    }
  }
  .clear {
    padding: 0.25rem 0.5rem;
    border: none;
    background: var(--primary1);
    color: var(--heading);

    text-transform: capitalize;
    &:hover {
      transition: all 0.1s linear;

      background: var(--heading);
      color: white;
      cursor: pointer;
    }
  }
`

export default Filters
