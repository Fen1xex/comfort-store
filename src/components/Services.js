import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return (
    <Wrapper>
      <div className='center'>
        <article className='header'>
          <h3>
            custom furniture
            <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            reprehenderit atque libero minima deleniti enim aliquid adipisci
            necessitatibus saepe aut!
          </p>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article key={id} className='service'>
                <span className='icon'>{icon} </span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5rem 0;
  background: var(--background);
  .center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .header {
    margin-top: 5rem;
  }
  h3 {
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
    line-height: 2.5rem;
  }
  p {
    color: var(--heading);
    letter-spacing: 0.1rem;
    line-height: 2rem;
  }
  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 2rem;
  }
  .service {
    background: var(--text);
    text-align: center;
    padding: 1rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--primary1);
      letter-spacing: 0.1rem;
      line-height: 2rem;
    }
    span {
      color: var(--heading);
      font-size: 3rem;
      background: var(--primary1);
      width: 5rem;
      height: 5rem;

      display: grid;
      place-items: center;
      margin: 1rem auto;
      border-radius: 50%;
    }
    .icon {
    }
  }
  @media screen and (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 662px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default Services
