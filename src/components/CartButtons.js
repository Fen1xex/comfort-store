import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartButtons = () => {
  return (
    <Wrapper className='cart-buttons'>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>12</span>
        </span>
      </Link>
      <button className='auth-btn'>
        Login <FaUserPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    display: flex;
    align-items: center;
    color: var(--heading);
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    color: var(--primary1);
    background: var(--text);
    border-radius: 50%;
    top: -10px;
    right: -10px;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--heading);
    letter-spacing: 0.1rem;
    svg {
      margin-left: 5px;
      height: 1.6rem;
    }
  }
`

export default CartButtons
