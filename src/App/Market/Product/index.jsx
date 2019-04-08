import React from 'react'

const Product = ({
  match: {
    params: { name }
  }
}) => <span>PRODUCT: {name}</span>

export default Product
