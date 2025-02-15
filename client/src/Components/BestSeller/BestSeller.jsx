


import React from 'react'
import ProductItem from '../ ProductItem/ProductItem'
import './BestSeller.css'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { products } from '../ArrayData/sitedata'





const BestSeller = () => {

    const [sectionIsVisible, setSectionVisible] = useState(false);
    const sectionRef = useRef(null);


    useEffect(() => {
        const userScrolls = () => {
            if (sectionRef.current) {
                const websiteSection = sectionRef.current.getBoundingClientRect().top;
                if (websiteSection < window.innerHeight * 0.75) {
                    setSectionVisible(true);
                    window.removeEventListener('scroll', userScrolls); // Remove listener after activation
                }
            }
        };

        userScrolls(); // Check visibility on page load
        window.addEventListener('scroll', userScrolls);

        return () => window.removeEventListener('scroll', userScrolls);
    }, []);





  return (
   <>



<div ref={sectionRef} className={`best-seller-container ${sectionIsVisible ? 'visible' : ''}`}>

<div className={'best-seller-wrapper'}>
    
    <div><h3>BEST SELLERS</h3></div>
    <div><p>Best Sellers in The Clothing Store</p></div>

</div>



<div className={'best-seller-products'}>
    {products.slice(0,6).map((data) => (
        <div key={data._id}>
          <ProductItem _id={data._id} image={data.image} name={data.name} price={data.price} />


        </div>
    ))}

</div>



</div>





   </>
  )
}

export default BestSeller
