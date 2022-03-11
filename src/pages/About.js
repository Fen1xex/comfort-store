import React from 'react'
import styled from 'styled-components'
import aboutImg from '../assets/hero-bcg.jpeg'

const About = () => {
  return (
    <main>
      <Wrapper>
        <img src={aboutImg} alt='' />
        <article>
          <div className='title'>
            <h3>Out story</h3>
            <div className='underline'></div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            facere quia, numquam repellendus amet odit consequatur error
            obcaecati voluptate praesentium nobis sunt quos. Eius veritatis
            magni deserunt? Illo porro qui, delectus facere et mollitia tenetur,
            impedit unde laboriosam ipsa provident perspiciatis, rem possimus
            architecto nisi similique neque aliquid laborum quam!
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  width: 80vw;
  max-width: 1170px;
  margin: 5rem auto;
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
  .underline {
    width: 6rem;
    height: 0.25rem;
    background: var(--text);
    margin-left: 0;
    margin-right: auto;
  }
  .title {
    margin-bottom: 2rem;
  }
  p {
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
`

export default About
