import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <div className='center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque
            minima magnam itaque iure quasi numquam enim mollitia laboriosam ad,
            quo vero illo nostrum quos labore voluptatum odio quis fugiat!
          </p>
          <form
            className='contact-form'
            action='https://formspree.io/f/meqnkboz'
            method='POST'
          >
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
              name='_replyto'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: 10rem 0;
  .center {
    width: 90vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  h3 {
    letter-spacing: 0.15rem;
  }
  p {
    letter-spacing: 0.1rem;
    line-height: 2rem;
  }
  padding: 5rem 0;
  .contact-form {
    display: grid;
    grid-template-columns: 1fr max-content;
    width: 35rem;
    height: 3rem;
    input {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      border: 3px solid black;
      text-transform: capitalize;
      outline: none;
    }
    .submit-btn {
      font-size: 1.5rem;
      border: 3px solid black;
      padding: 0.5rem 1rem;
      border-left: none;
      text-transform: capitalize;
      background: var(--heading);
      letter-spacing: 0.1rem;
    }
  }
`

export default Contact
