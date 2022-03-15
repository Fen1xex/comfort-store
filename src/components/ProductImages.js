import React, { useState } from 'react'
import styled from 'styled-components'

const ProductImages = ({ images = [{ url: '' }] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <Wrapper>
      <img src={main.url} alt={main.filename} className='main-img' />

      <div className='second-images'>
        {images.map((item, index) => {
          console.log(item)
          return (
            <img
              key={index}
              src={item.url}
              onClick={() => setMain(images[index])}
            ></img>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .main-img {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .second-images {
    margin-top: 1rem;
    display: grid;

    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      cursor: pointer;
      object-fit: cover;
      height: 100px;
    }
  }
  @media (max-width: 576px) {
    .main-img {
      height: 300px;
    }
    .second-images {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main-img {
      height: 500px;
    }
    .second-images {
      img {
        height: 75px;
      }
    }
  }
`

export default ProductImages
