import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cart_context'
import { Link } from 'react-router-dom'
import CartTotals from './CartTotals'
import CartItem from './CartItem'
import CartColumns from './CartColumns'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <Wrapper>
      <CartColumns />
      {cart.map((item, index) => {
        return <CartItem key={index} {...item} />
      })}
      <hr />
      <div className='link-container'>
        <Link to='/products'>continue shopping</Link>
        <button onClick={clearCart}>clear cart</button>
      </div>
      <CartTotals />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
`

export default CartContent
