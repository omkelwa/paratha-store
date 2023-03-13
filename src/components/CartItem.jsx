import React from 'react'

function CartItem({product}) {

  const {img, title, price} = product
  return (
    <>
    <div className="cart-item">
      <img src={img} alt="" />
      <span>
        <h1>{title}</h1>
        <h3>Rate : ${price}</h3>
        <h3>Qty : 1</h3>
      </span>
      <button className="remove-btn"  >Remove Item</button>
    </div>
    </>
  )
}

export default CartItem