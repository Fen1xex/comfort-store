import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../contexts/filter_context'
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
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section``

export default Filters
