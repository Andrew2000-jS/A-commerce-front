import React from 'react'
import Link from 'next/link'

import {
  Container,
  Banner,
  Description,
  Article,
  ElementInfo
} from 'style/pages/CartStyle'

import Layout from 'components/layout'
import List from 'components/CartCard/CartList'
import CartForm from 'components/CartForm'
import { BsArrowLeft } from '@react-icons/all-files/bs/BsArrowLeft'

export default function index() {
  return (
    <Layout isBlack={true}>
      <Banner>
        <img src="banner-cart.jpg" alt="banner" />
        <h1>CART</h1>
      </Banner>
      <Container>
        <ElementInfo>
          <Description>
            <h2>SHOPPING CART</h2>
            <List />
            <Link href="/">
              <a
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '13px'
                }}
              >
                <BsArrowLeft />
                Go Back Shopping
              </a>
            </Link>
          </Description>
          <Article>
            <CartForm />
          </Article>
        </ElementInfo>
      </Container>
    </Layout>
  )
}
