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
                  key={index}
                  onClick={updateFilters}
                >
                  {item}
                </button>
              )
            })}
          </div>
          {/* end of categories */}
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Filters
