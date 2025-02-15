



import React from 'react'
import './NewsletterBox.css'
import { data } from '../ArrayData/sitedata.js'



const NewsletterBox = () => {

    const subscribe = (event) => {
        event.preventDefault()
  }

    
  return (
   <>


<div className={'newsletter-container'}>

<div className={'newsletter-wrapper'}>

    <div><h3>Subscribe Now & get 80% off</h3></div>


</div>



<div className={'newsletter-wrapper-two'}>

   <div><p>there will be more arrivals coming through our website for clients. Domestic and international</p></div>
    </div>





        <form className={'newsletter-wrapper-three'}>
            <div><input type='text' placeholder='Enter Email'></input></div>
            <div><button type='submit'>SUBSCRIBE</button></div>
        </form>




</div>



   </>
  )
}

export default NewsletterBox
