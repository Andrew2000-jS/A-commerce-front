import React from 'react'
import { Banner, Container, Content } from 'style/components/ProductListStyles'

import MasonryList from './MasonryList/index'
export default function index() {
  return (
    <Container>
      <Banner>
        <img src="/banner-product-list.jpg" alt="" />
        <h1>PRODUCT LIST</h1>
      </Banner>
      <Content>
        <p style={{ width: '66%' }}>ALL ELEMENTS</p>
        <MasonryList />
      </Content>
    </Container>
  )
}
