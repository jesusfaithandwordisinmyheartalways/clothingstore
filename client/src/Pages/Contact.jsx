


import React from 'react'
import '../Pages/CSS/Contact.css'
import { data} from '../Components/ArrayData/sitedata.js'
import NewsletterBox from '../Components/NewsletterBox/NewsletterBox';





const Contact = () => {



  return (
   <>




<div className={'contact-container'}>


<div className={'contact-wrapper'}>

    <div><h3>CONTACT US</h3></div>

</div>




<div className={'contact-wrapper-two'}>
    <div><img src={data.contact_logo} alt=''></img></div>
    <div>
      <div><h3>Our Store</h3></div>
            <br></br>
            <div><p>Suite 350, Washington, USA</p></div>
            <div><p>Email: admin@forever.com</p></div>
            <div><h3>Careers at Forever</h3></div>
            <div><p>Learn more about our teams and job openings.</p></div>
            <div><button>Explore Jobs</button></div>
    </div>

</div>




  <br></br>
  <br></br>
  <br></br>

<div>
  <div><NewsletterBox /></div>
</div>




</div>



   </>
  )
}

export default Contact
