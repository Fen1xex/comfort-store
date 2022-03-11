import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h3>404</h3>
        <p>Sorry, there no page matched your search</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 10rem);
  div {
    display: grid;
    place-items: center;
  }
  h3 {
    font-size: 5rem;
  }
  p {
    color: var(--heading);
  }
  a {
    color: var(--heading);
    background: var(--background);
    padding: 0.5rem 1rem;
    border-radius: var(--radius);
    &:hover {
      transition: all 0.1s linear;
      color: var(--primary1);
    }
  }
`

export default Error
