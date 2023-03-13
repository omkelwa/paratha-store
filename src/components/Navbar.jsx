import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Navbar (){

const state = useSelector(state => state.cart)

    return(
        <>
          
    <nav>
      <a href="/"> <h1 className="logo">My.Store</h1></a>
      <ul className="nav-as">
        {/* <a href="/electronics" className="category"  >Menu</a > */}
        {/* <a href="/jewellery" className="category"  >Jewellery</a > */}
        {/* <a href="/mens" className="category" >Men's Clothing</a > */}
        {/* <a href="/womens" className="category" >Women's Clothing</a > */}
        <Link to="/cart"><li> <button className="cart"> Cart ({state.length})  </button> </li></Link>
      </ul>
    </nav>

        </>
  )
    
}
export default Navbar