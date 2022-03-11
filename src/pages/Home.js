import React from 'react'
import styled from 'styled-components'
import { FeaturedProducts, Hero, Services, Contact } from '../components'

const Home = () => {
  return (
    <main>
      <Wrapper>
        <Hero />
        {/* <FeaturedProducts /> */}
      </Wrapper>
      <Services />
      <Contact />
    </main>
  )
}

const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  width: 80vw;
  max-width: 1170px;
  margin: 0 auto;
`

export default Home
