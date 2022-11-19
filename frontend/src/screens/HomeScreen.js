import React from 'react'
import { Row } from 'react-bootstrap'
import Product from '../components/product'
import products from '../products'

const  HomeScreen = () => {

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <col sm={12} md={6} lg={4} x1={3}>
            <Product product={product} />
          </col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
