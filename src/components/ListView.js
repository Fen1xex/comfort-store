import React from 'react'
import styled from 'styled-components'
import { format_price } from '../utils/helpres'
import { Link } from 'react-router-dom'

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className='products'>
        {products.map((product) => {
          const { image, id, price, name, description } = product
          return (
            <article key={id}>
              <img src={image} alt={name} />

              <div>
                <h4 className='title'>{name}</h4>
                <h4>{format_price(price)}</h4>
                <p>{description}</p>
                <Link to={`/products/${id}`} className='link'>
                  details
                </Link>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  article {
    margin-bottom: 2.5rem;
  }

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .link {
    color: var(--heading);
  }
`

export default ListView
