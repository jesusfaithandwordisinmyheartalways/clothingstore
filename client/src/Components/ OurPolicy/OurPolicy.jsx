






import React from 'react'
import './OurPolicy.css'
import { data } from '../ArrayData/sitedata.js'




const  OurPolicy = () => {


  return (
  <>


<div className={'our-container'}>
                <div className={'our-wrapper'}>

                    <div>
                        <div><img src={data.exchange_logo} alt='' ></img></div>
                        <div><span>Easy Exchange Policy</span></div>
                        <div><p>We offer hassle free  exchange policy</p></div>
                    </div>


                    <div>
                        <div><img src={data.quality_logo} alt='' ></img></div>
                        <div><span>7 Days Return Policy</span></div>
                        <div><p>We provide 7 days free return policy</p></div>
                    </div>



                    <div>
                        <div><img src={data.support_logo} alt='' ></img></div>
                        <div><span>Best customer support</span></div>
                        <div><p>we provide 24/7 customer support</p></div>
                    </div>






                </div>
            </div>




  </>
  )
}

export default  OurPolicy
