import React, { useState } from 'react'
import ParathaCard from './ParathaCard'
import aaluparatha from '../images/aalu paratha.jpg'
import paneerParatha from '../images/paneer paratha.jpeg'
import methiParatha from '../images/methi paratha.jpeg'
import palakParatha from '../images/palak paratha.jpeg'
import mixParatha from '../images/mix paratha.jpeg'
import plainParatha from '../images/plain paratha.jpeg'
function ParathaContainer() {

  const [products, setProducts] = useState( [
    {
        img : aaluparatha,
        title : "Aalu Paratha",
        price : 25,
        id : 1
        
    },
    {
        img : paneerParatha,
        title : "Paneer Paratha",
        price : 55,
        id: 2
        
    },
    {
        img : palakParatha,
        title : "Palak Paratha",
        price : 35,
        id: 3
    },
    {
        img : methiParatha,
        title : "Methi Paratha",
        price : 30,
        id :4
    },
    {
        img : mixParatha,
        title : "Mix Paratha",
        price : 45,
        id : 5
    },
    {
        img : plainParatha,
        title : "plain Paratha",
        price : 15,
        id : 6
    },
    
],) 
  // const cartProducts = useSelector(state => state.cart)
  return (
    <>
       
       <div className="container">
      <h1 className="all-products-title"> Our Range Of Paratha's</h1>
      {
        products.map(product => <ParathaCard key={product.id} product={product}/>)
      }
    </div>
    </>
  )
}

export default ParathaContainer