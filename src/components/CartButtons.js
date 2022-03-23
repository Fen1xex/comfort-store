import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart, FaUserPlus, FaUserMinus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/auth_context'

const CartButtons = () => {
  const { user, signOut, signInWithGithub } = useAuthContext()
  return (
    <Wrapper className='cart-buttons'>
      <Link to='/cart' className='cart-btn'>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
        </span>
      </Link>
      {!user ? (
        <button className='auth-btn' onClick={signInWithGithub}>
          Login <FaUserPlus />
        </button>
      ) : (
        <button className='auth-btn' onClick={signOut}>
          Logout <FaUserMinus />
        </button>
      )}
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
    font-size: 1.35rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
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
    text-transform: uppercase;
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
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
