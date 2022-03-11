import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CartButtons from './CartButtons'
import { links } from '../utils/constants'
import { useProductsContext } from '../contexts/products_context'

const Navbar = () => {
  const { openSidebar } = useProductsContext()
  return (
    <Nav>
      <div className='nav-center'>
        <div className='logo'>
          <Link to='/'>
            <h3>comfort</h3>
          </Link>
          <button className='nav-toggle' onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { url, id, name } = link
            return (
              <Link to={url} key={id}>
                {name}
              </Link>
            )
          })}
          <Link to='/checkout'>checkout</Link>
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
  .nav-toggle {
    font-size: 1.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--heading);
    &:hover {
      color: var(--primary1);
      transition: all 0.1s linear;
      cursor: pointer;
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
      a {
        margin: 0 0.5rem;
        color: var(--heading);
        &:hover {
          transition: all 0.1s linear;
          color: var(--primary1);
        }
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
