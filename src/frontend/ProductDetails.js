import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import AllProductsJSON from './Json/AllProductsJSON'
import productdetails from './css/Productdetails.css'
import Button from '@mui/material/Button'
import Sizes from './Json/Sizes'
import store from './reduxFile'

let PRODUCT_IN_CART=new Map()
const ProductDetails=()=>{
    //getting details from url
    const prodID=useParams().pid
    const catID=useParams().catId
    const subCatID=useParams().subCatId
    const sizeStrInt=useParams().sizeIntStr
    
    const[sizeProd,setSizeProd]=useState(Sizes)
    const[throwError,setThrowError]=useState(null)

    const selectSize=(sizeid,int)=>{
          if(int == 1){
               const newSize=sizeProd.INT_SIZE.map((size)=>{
                     if(sizeid == size.id){
                              size.toggle=!size.toggle
                     }else{
                          if(size.toggle){
                              size.toggle=!size.toggle 
                          }
                     }
                     return size
               })
               sizeProd.INT_SIZE=newSize
               setSizeProd(sizeProd)
               setPeoductSize(sizeid)
               setThrowError(1)
          }else{
               const newSize=sizeProd.STRING_SIZE.map((size)=>{
                    if(sizeid == size.id){
                             size.toggle=!size.toggle
                    }else{
                         if(size.toggle){
                             size.toggle=!size.toggle 
                         }
                    }
                    return size
              })
              sizeProd.STRING_SIZE=newSize
              setSizeProd(sizeProd)
              setPeoductSize(sizeid)
              setThrowError(1)
          }
     }
      //select product size
        const[prouctSize,setPeoductSize]=useState(null)
      //add product in cart
     const addToCart=(pid,price,title,img)=>{
          if(prouctSize === null){
               setThrowError(2)
          }else{
               //addToCart logic
               if(!PRODUCT_IN_CART.has(pid)){
                    PRODUCT_IN_CART.set(pid,1)
                    store.dispatch({
                         type:"CARTSIZE",
                         cartSize:PRODUCT_IN_CART.size,
                         prodId:{pid:prodID,catID:catID,subCatID:subCatID,title:title,price:price,img:img,qty:1}
                    })
                    setThrowError(1)
               }
          }
     }
      useEffect(()=>{
             if(sizeStrInt == 1){
                  const newSize=sizeProd.INT_SIZE.map((size)=>{
                    if(size.toggle){
                         size.toggle=!size.toggle
                    }
                    return size
                  })
                  sizeProd.INT_SIZE=newSize
                  setSizeProd(sizeProd)
             }else{
                  const newSize=sizeProd.STRING_SIZE.map((size)=>{
                    if(size.toggle){
                         size.toggle=!size.toggle
                    }
                    return size
                  })
                  sizeProd.STRING_SIZE=newSize
                  setSizeProd(sizeProd)
             }
      })
     return(
          <div className="product-details-container">
               {
                    AllProductsJSON[catID][subCatID].map((prod)=>{
                      return prod.id == prodID && 
                                <div className='img-title-size-price-addProd'>
                                     <div className='img'>
                                          <img src={process.env.PUBLIC_URL+prod.img}/>
                                     </div>
                                     <div className='title'>
                                          <h3>{prod.name}</h3>
                                     </div>
                                     <div className='size'>
                                          <ul>
                                              {/*checking if size is in integer like 28,30 or In String like "S","M"*/}
                                              {sizeStrInt == 1 ? sizeProd.INT_SIZE.map((size,index)=>{return <li onClick={(e)=>selectSize(size.id,1)} style={{backgroundColor:size.toggle?"yellow":"#eee"}} name={index}>{size.size}</li>}):
                                                sizeProd.STRING_SIZE.map((size)=>{return <li onClick={(e)=>selectSize(size.id,2)} style={{backgroundColor:size.toggle?"yellow":"#eee"}}>{size.size}</li>})}
                                          </ul>
                                     </div>
                                     <div className='price'>
                                          <h4>Rs. {prod.price}</h4>
                                     </div>
                                     <div className='addProd'>
                                          <Button variant="contained" color="secondary" onClick={()=>addToCart(prod.id,prod.price,prod.name,prod.img)}>ADD TO CART</Button>
                                          {throwError == 2 && <h4 style={{color:"red",padding:5+"px"}}>select size first</h4>}
                                     </div>
                                </div>
                    })
               }
          </div>
     )
}
export default ProductDetails