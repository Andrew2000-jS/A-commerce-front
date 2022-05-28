import React from 'react'
import ProductList from 'components/ProductList'
import Layout from 'components/layout'

export default function index() {
  return (
    <>
      <Layout isBlack={true}>
        <ProductList />
      </Layout>
    </>
  )
}
