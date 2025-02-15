



import React from 'react'
import '../Pages/CSS/About.css'
import NewsletterBox from '../Components/NewsletterBox/NewsletterBox';
import { data} from '../Components/ArrayData/sitedata.js'




const About = () => {



  return (
    <>

<div className={'about-container'}>


<div className={'about-wrapper'}>

    <div><h3>ABOUT US</h3></div>

</div>



<div className={'about-wrapper-two'}>

    <div><img src={data.about_logo} alt=''></img></div>
    
    <div>
      <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
      <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
      <b>Our Mission</b>
      <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
    </div>


</div>






<br></br>
    <br></br>
    <br></br>

<div>
  <NewsletterBox />
</div>



</div>






    </>
  )
}

export default About
