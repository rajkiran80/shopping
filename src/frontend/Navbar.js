import React,{useState} from 'react'
import Navbarcss from './css/Navbar.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Link } from 'react-router-dom'
import store from './reduxFile'

const Navbar=()=>{
     const[cartSize,setCartSize]=useState(store.getState().cartSize)
     store.subscribe(()=>{
         setCartSize(store.getState().cartSize)
     })
     return(
         <div className="navbar-container">
             <div className="nav-container-child">
                  <div className='brand'><h4><Link to="/shopping">ShopCart</Link></h4></div>
                  <div className='search-cart-icon'>
                       <div className='search'></div>
                       <div className='cart'><Link to="/cart">{<AddShoppingCartIcon/>}</Link> {cartSize}</div>
                  </div>
             </div>
         </div>
     )
}
export default Navbar