import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cart/cartSlice'

function ParathaCard({product}) {

const {img, title, price} = product
const dispach = useDispatch()
const handleAdd = (product)=>{
  dispach(add(product))
}
  return (
    <>
        <div className="product">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <span>
        <h3>Price :{price}</h3>
        <button className="add_cart" onClick={()=>handleAdd(product)}  >Add to cart</button>
      </span>
    </div>
    </>
  )
}

export default ParathaCard