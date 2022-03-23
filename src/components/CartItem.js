import React from 'react'
import styled from 'styled-components'
import { format_price } from '../utils/helpres'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../contexts/cart_context'

const CartItem = ({ id, image, color, name, price, amount }) => {
  const { removeItems, toggleAmount } = useCartContext()
  return (
    <Wrapper>
      <div className='title'>
        <img src={image} alt={name} />
        <div>
          <h5 className='name'>{name}</h5>
          <p className='color'>
            color: <span style={{ background: color }} />
          </p>
        </div>
      </div>
      <h5 className='price'>{format_price(price)}</h5>
      <h5 className='subtotal'>{format_price(price * amount)}</h5>
      <div className='amount'>
        <button>+</button>
        <span>10</span>
        <button>-</button>
      </div>
      <button className='btn-trash'>
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  /* grid-template-rows: 75px; */
  gap: 3rem 1rem;
  justify-items: center;
  align-items: center;
  .btn-trash {
    font-size: 2rem;
    background: transparent;
    border: none;
  }
  .title {
    display: grid;
    grid-template-columns: 75px 125px;
    grid-template-rows: 75px;
    align-items: center;
    text-align: left;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .btn-trash {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  .color {
    span {
      display: inline-block;
      width: 0.75rem;
      height: 0.75rem;
      margin-left: 0.5rem;
      border-radius: 5px;
    }
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default CartItem
