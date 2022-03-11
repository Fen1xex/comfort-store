import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <div className='footer-center'>
        &copy; all rigths reserved
        <br />
        <span>{new Date().getFullYear()}</span>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--heading);
  .footer-center {
    display: grid;
    place-items: center;
  }
`

export default Footer
