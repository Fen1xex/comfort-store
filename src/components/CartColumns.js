import React from 'react'
import styled from 'styled-components'

const CartColumns = () => {
  return (
    <Wrapper>
      <div className='column-center'>
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: none;
  @media screen and (min-width: 777px) {
    display: block;
    .column-center {
      display: grid;
      grid-template-columns: 300px 1fr 1fr 1fr;
      justify-items: center;
      column-gap: 1rem;
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`

export default CartColumns
