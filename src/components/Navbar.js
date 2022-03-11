import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'

const Navbar = () => {
  return (
    <Nav>
      <div className='nav-center'>
        <div className='logo'>
          <Link to='/'>
            <h3>comfort</h3>
          </Link>
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>number1</li>
          <li>number2</li>
        </ul>
        <CartButtons />
      </div>
    </Nav>
  )
}

const Nav = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);
  .nav-links {
    display: none;
  }
  .cart-buttons {
    display: none;
  }
  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      margin-bottom: 0;
    }
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 0 0.5rem;
        color: var(--heading);
      }
    }
    .cart-buttons {
      display: grid;
    }
  }
  .nav-center {
    width: 80vw;
    max-width: 1170px;
    margin: 0 auto;
  }
`

export default Navbar
