



import React, { useContext, useEffect, useState } from 'react'
import './RelatedProducts.css'
import { products } from '../ArrayData/sitedata'
import ProductItem from '../ ProductItem/ProductItem'



const RelatedProducts = ({ category , subCategory }) => {
    const [related,setRelated] = useState(products);



    useEffect(() => {
        const filterProducts = products.filter((elements) => elements.category === category && elements.subCategory === subCategory );

        if(filterProducts.length > 0) {
            setRelated(filterProducts.slice(0, 5))
        }
    }, [category, subCategory] )




  return (
  <>


<div className={'related-product-container'}>
                
                <div className={'related-product-wrapper'}>
                   <div><h3>RELATED PRODUCTS</h3></div>
                </div>


                <div><br></br></div>



            <div className={'related-product-wrapper-two'}>
                {related.map((elements) => (
                    <ProductItem key={elements._id} _id={elements._id} name={elements.name} price={elements.price} image={elements.image} />
                ))}

            </div>




        </div>







  </>
  )
}

export default RelatedProducts
