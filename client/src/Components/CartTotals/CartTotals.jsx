




import React, { useContext, useEffect } from 'react'
import './CartTotals.css'
import { ClothingStoreContext } from '../../Context/ClothingStoreProvider'





const CartTotals = () => {
     const { originalCartItems, delivery_fee, TotalCartAmount } = useContext(ClothingStoreContext)




     useEffect(() => {
        console.log('original cart', originalCartItems)

     }, [originalCartItems])






  return (
   <>


<div className={'cart-total-container'}>

<div className={'cart-total-wrapper'}>

    <div className='header-cart-total'>
        <div><h3>CART AMOUNT</h3></div>
    </div>



<div className='subtotal-section'>
        <div> Subtotal: ${TotalCartAmount().toFixed(2)} </div>
     
    </div>


    <div className='shipping'>
      <div>Shipping Fee: ${delivery_fee.toFixed(2)}</div>
    </div>


    <div className='total-cost'>
        <div>Total: ${(TotalCartAmount() + delivery_fee).toFixed(2)} </div>
    </div>







</div>

</div>





   </>
  )
}




export default CartTotals
