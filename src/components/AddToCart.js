import React, { useState } from 'react'
import styled from 'styled-components'
import { FaCheck } from 'react-icons/fa'

const AddToCart = ({ colors = [], stock }) => {
  const [mainColor, setMainColor] = useState(colors[0])
  return (
    <Wrapper>
      <div className='colors'>
        <h4>
          Color:{' '}
          {colors.map((item, index) => {
            return (
              <button
                key={index}
                style={{ background: item }}
                className={`${mainColor === item ? 'main' : null}`}
                onClick={() => setMainColor(item)}
              >
                {mainColor === item ? <FaCheck /> : null}
              </button>
            )
          })}
        </h4>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h4 {
    display: flex;
    align-items: center;
    button {
      margin-left: 0.5rem;
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      border: none;
      border-radius: 50%;
      background: #000;
      position: relative;
      opacity: 0.5;
      &:hover {
        cursor: pointer;
      }
      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .main {
    opacity: 1;
  }
`

export default AddToCart
