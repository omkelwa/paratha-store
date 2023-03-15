import React from 'react'
import { useDispatch } from 'react-redux'
import { remove } from '../store/cart/cartSlice'

function CartItem({product}) {

const dispach = useDispatch()

  const handleRemove =(id)=>{
      dispach(remove(id))
  }
  const {img, title, price,id} = product
  return (
    <>
    <div className="cart-item">
      <img src={img} alt="" />
      <span>
        <h1>{title}</h1>
        <h3>Rate : ${price}</h3>
        <h3>Qty : 1</h3>
      </span>
      <button className="remove-btn" onClick={()=>handleRemove(id)} >Remove Item</button>
    </div>
    </>
  )
}

export default CartItem