import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/cart_context'

const AddToCart = ({ colors = [], stock, product }) => {
  const { addToCart } = useCartContext()
  const { id, color } = product

  const [mainColor, setMainColor] = useState(colors[0])
  const [value, setValue] = useState(1)

  const increase = () => {
    setValue((oldValue) => {
      let newValue = oldValue + 1
      if (newValue > stock) {
        newValue = stock
      }
      return newValue
    })
  }
  const decrease = () => {
    setValue((oldValue) => {
      let newValue = oldValue - 1
      if (newValue < 1) {
        newValue = 1
      }
      return newValue
    })
  }

  return (
    <Wrapper>
      <div className='colors'>
        <h3>
          Color:{' '}
          {colors.map((item, index) => {
            return (
              <button
                key={index}
                className={`${
                  mainColor === item ? 'color-btn active' : 'color-btn'
                }`}
                style={{ background: item }}
                onClick={() => setMainColor(item)}
              >
                {mainColor === item ? <FaCheck /> : null}
              </button>
            )
          })}
        </h3>
      </div>
      <div className='amount'>
        <button onClick={increase}>+</button>
        <span>{value}</span>
        <button onClick={decrease}>-</button>
        <div>
          <Link
            to='/cart'
            onClick={() => addToCart(id, mainColor, value, product)}
          >
            add to cart
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h3 {
    display: flex;
    align-items: center;
  }

  .color-btn {
    margin-left: 0.5rem;
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 50%;
    background: #000;
    position: relative;
    opacity: 0.5;
    cursor: pointer;
  }
  .active {
    opacity: 1;
  }
  svg {
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .amount {
    span {
      font-size: 2rem;
      color: var(--heading);
      margin: 0 1rem;
    }
    button {
      font-size: 2rem;
      background: transparent;
      border: none;
      padding: 0.25rem 0.5rem;
      cursor: pointer;
    }
    a {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      margin-top: 1rem;
      border: 3px solid var(--heading);
      color: var(--heading);
      &:hover {
        background: var(--heading);
        color: var(--primary1);
        transition: all 0.1s linear;
      }
    }
  }
`

export default AddToCart
