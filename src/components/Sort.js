import React, { useState } from 'react'
import { BsGridFill, BsList } from 'react-icons/bs'
import styled from 'styled-components'
import { useFilterContext } from '../contexts/filter_context'

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
    sortProducts,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          className={`${grid_view ? 'grid-view active' : 'grid-view'}`}
          onClick={() => setGridView()}
        >
          <BsGridFill />
        </button>
        <button
          className={`${!grid_view ? 'list-view active' : 'grid-view'}`}
          onClick={() => setListView()}
        >
          <BsList />
        </button>
        <span>{products.length} products found</span>
      </div>
      <hr />
      <div>
        <form>
          <label htmlFor='sort'>sort by</label>
          <select
            name='sort'
            id='sort'
            className='sort-input'
            value={sort}
            onChange={updateSort}
          >
            <option value='price-lowest'>price (lowest)</option>
            <option value='price-highest'>price (highest)</option>
            <option value='name-a'>price (a-z)</option>
            <option value='name-z'>price (z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
  hr {
    display: flex;
    align-self: center;
    height: 0;
  }
  .grid-view,
  .list-view {
    cursor: pointer;
    background: transparent;
    border: none;
    margin-right: 1rem;
    font-size: 1rem;
    padding: 5px;
    border-radius: 3px;
  }
  .active {
    background: var(--heading);
  }
  label {
    margin-right: 0.5rem;
  }
  select {
    cursor: pointer;
    font-size: 1rem;
    border: transparent;
    padding: 0.25rem 0.5rem;
  }
`

export default Sort
