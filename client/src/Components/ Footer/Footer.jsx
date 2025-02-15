


import React from 'react'
import './Footer.css'
import {data} from '../ArrayData/sitedata.js'




const Footer = () => {


    
  return (
    <>


            <div className={'footer-container'}>


<div className={'footer-wrapper'}>


    <div>
        <div><img src={data.shop_store_logo} alt=''></img></div>
        <div><p>     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
    </div>



    <div className={'company-footer'}>
        <div><h3>OUR COMPANY</h3></div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>

        </ul>
    </div>



    <div>
         <div><h3>CONNECT</h3></div>
            <ul>
                <li>+1800-342-9089</li>
                <li>clothing@support.com</li>
            </ul>


    </div>





</div>





<div className='copyright'>
    <div className={'copyright-hr-tag'}><hr style={{color: 'green'}} /></div>
    <div><p>Copyright 2024@ clothingstore.com - All Right Reserved.</p></div>
</div>




</div>





    </>
  )
}

export default  Footer
