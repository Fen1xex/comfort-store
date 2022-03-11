import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import heroBcg from '../assets/hero-bcg.jpeg'
import heroBcg2 from '../assets/hero-bcg-2.jpeg'

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h1>
          design your <br />
          comfort zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat ut
          porro mollitia deleniti voluptate voluptatum, praesentium error nobis
          eligendi esse.
        </p>
        <Link to='/products' className='hero-btn'>
          shop now
        </Link>
      </article>
      <article className='img-container'>
        <img src={heroBcg} alt='table' className='main-img' />
        <img src={heroBcg2} alt='person' className='second-img' />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  a {
    color: var(--heading);
    background: var(--text);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    &:hover {
      transition: all 0.1s linear;
      color: var(--primary1);
    }
  }
  h1 {
    letter-spacing: 0.15rem;
    line-height: 4rem;
  }
  p {
    letter-spacing: 0.1rem;
    line-height: 2rem;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .second-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--text);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
