



import React, { useContext, useEffect } from 'react'
import '../Pages/CSS/Cart.css'
import { ClothingStoreContext } from '../Context/ClothingStoreProvider'
import { data } from '../Components/ArrayData/sitedata.js'
import CartTotals from '../Components/CartTotals/CartTotals';


const Cart = () => {

    const { navigate,  products, originalCartItems, selectedSizes, RemoveCartItems } = useContext(ClothingStoreContext)
  
  
  
    return (
   <>



<div className={'cart-container'}>
            <div className={'cart-wrapper'}>
                <div>
                    <h3>CHECKOUT CART</h3>
                </div>
            </div>

            {/* Cart Items Table Header */}
            <div className={'cart-wrapper-two'}>
                <div><div>Product</div></div>
                <div><div>Description</div></div>
                <div><div>Price</div></div>
                <div><div>Size</div></div>
                <div><div>Total</div></div>
                <div><div>Remove</div></div>
            </div>

            <div><hr /></div>

            {/* Loop through the products to display cart items */}
            {products.map((element) => {
                if(originalCartItems[element._id] > 0) {
                    return (
                        <div className={'cart-wrapper-three'} key={element._id}>
                            <div onClick={() => {navigate(`/product/${element._id}`); window.scrollTo(0,0); }}><img src={element.image} alt=''></img></div>
                            <div><p>{element.name}</p></div>
                            <div><div> $ {element.price} </div></div>
                            <div><div>{selectedSizes[element._id] || 'N/A'} </div></div>
                            <div ><div>${element.price * originalCartItems[element._id]}</div></div>
                            <div onClick={() => RemoveCartItems(element._id)} className='cross-image'><div>X</div></div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}








            <br />

            {/* Cart Totals Component */}
            <div>
                <CartTotals />
            </div>

            

            {/* Proceed to Checkout */}
            <div className={'proceed-to-checkout-user'}>
                <div onClick={() => navigate('/place-order')}><button>PROCEED TO CHECKOUT</button></div>
            </div>

        </div>



   </>
  )
}

export default Cart
