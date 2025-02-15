



import React from 'react'
import '../LatestCollection/LatestCollection.css'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { products } from '../ArrayData/sitedata'
import ProductItem from '../ ProductItem/ProductItem'





const LatestCollection = () => {
  const [sectionIsVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef(null)


    useEffect(() => {
      const userScrolls = () => {
        if(sectionRef.current) {
             const websiteSection = sectionRef.current.getBoundingClientRect().top;
             if(websiteSection < window.innerHeight  * 0.75) {
                setSectionVisible(true)
             }
        };
    }
            userScrolls()

            window.addEventListener('scroll', userScrolls);
            return () => window.removeEventListener('scroll', userScrolls)
            
}, [])






  return (
  <>

<div ref={sectionRef} className={`latest-collection-container  ${sectionIsVisible ? 'visible' : '' }` }>

<div className={'latest-collection-wrapper'}>

    <div><h3>LATEST COLLECTIONS</h3></div>
     <div><p>Latest Collections in the Forever Us Store</p></div>

</div>



<div className={'latest-collection-wrapper-products'}>
    {products.slice(0, 8).map((data) => (
            <div key={data._id}>
                <ProductItem _id={data._id} image={data.image} name={data.name} price={data.price} />
            </div>
      
    ))}

</div>



</div>





  </>
  )
}

export default LatestCollection
