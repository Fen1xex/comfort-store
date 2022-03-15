import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({ title, products }) => {
  return (
    <Wrapper>
      <div>
        <Link to='/'>Home</Link> /
        {products ? <Link to='/products'>{products}</Link> : null} /
        <span>{title} </span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 1.5rem;
  width: 100%;
  height: 5rem;
  background: var(--text);
  color: var(--heading);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  div {
    width: 80vw;
    max-width: 1170px;
    margin: 0 auto;
  }
  a {
    color: var(--heading);
  }
  span {
    text-transform: capitalize;
  }
`

export default PageHero
