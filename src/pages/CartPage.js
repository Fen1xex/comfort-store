import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cart_context'
import { Link } from 'react-router-dom'
import { PageHero, CartContent } from '../components'

const CartPage = () => {
  const { cart } = useCartContext()
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className='empty'>
          <h3>Your cart is empty</h3>
          <Link to='/products' className='btn'>
            fill it
          </Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <main>
      <PageHero title='cart'></PageHero>
      <MainWrapper>
        <CartContent></CartContent>
      </MainWrapper>
    </main>
  )
}

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 10rem);
  .empty {
    display: grid;
    place-items: center;
    gap: 1.5rem;
  }
  a {
    color: var(--heading);
    cursor: pointer;
    border: 2px solid var(--heading);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    &:hover {
      transition: all 0.1s linear;
      background: var(--heading);
      color: var(--primary1);
    }
  }
`

const MainWrapper = styled.main`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  padding: 5rem 0;
`

export default CartPage
