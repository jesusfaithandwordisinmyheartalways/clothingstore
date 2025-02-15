


import React from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'



const  ProductItem = ({ _id, image, name, price }) => {


  return (
   <>


<div className={'product-item-container'}>
              <div className={'product-item-wrapper'}>

               
                        <Link to={`/product/${_id}`} className='product-link' onClick={() =>  window.scrollTo(0,0)}>
                            <div><img src={image[0]} alt={name}></img></div>
                            <div className='product-text'> <p>{name}</p></div>
                            <div className='product-text-two'>$ {price}</div>
                        </Link>
                




              </div>

            </div>







   </>
  )
}



export default  ProductItem
