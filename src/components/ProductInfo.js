import React from 'react'

const ProductInfo = ({ product }) => {
  return (
    <div className="product_info">
      <img src={product.images.url} alt={product.images.url} />
      <div className="box">
        <h2>{product.title}</h2>
        <h3>${product.price}</h3>
        <p>{product.description}</p>
        <h4>Category: {product.category}</h4>
        <button>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductInfo
