import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../contexts/cart_context'
import { format_price } from '../utils/helpres'
import { Link } from 'react-router-dom'

const CartTotals = () => {
  const { shipping_fee, money_amount } = useCartContext()

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal :<span>{format_price(money_amount)}</span>
          </h5>
          <p>
            shipping fee :<span>{format_price(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :
            <span>{format_price(money_amount + shipping_fee)}</span>
          </h4>
        </article>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 2rem;
`

export default CartTotals
