import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import CartButtons from './CartButtons'

const Sidebar = () => {
  return (
    <Wrapper>
      <aside className='sidebar show-sidebar'>
        <div className='aside-header'>
          <h3 className='logo'>Comfort</h3>
          <button className='close-btn'>
            <FaTimes />
          </button>
        </div>
        <ul className='aside-links'>
          <a href=''>
            <li>number 1</li>
          </a>
          <a href=''>
            <li>number 2</li>
          </a>
        </ul>
        <CartButtons />
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  width: 80vw;
  max-width: 1170px;
  margin: 0 auto;
  .aside-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--heading);
    cursor: pointer;

    &:hover {
      color: var(--text);
      transition: 0.1s;
    }
  }
  .logo {
    margin-bottom: 0;
  }
  .aside-links {
    margin-bottom: 2rem;
    a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--text);
      letter-spacing: 0.1rem;
      &:hover {
        padding: 1rem 1.5rem;
        padding-left: 2rem;
        background: var(--primary1);
        color: var(--heading);
        transition: 0.1s;
      }
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--background);
    transform: translate(-100%);
    transition: all 0.3s linear;
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-buttons {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
