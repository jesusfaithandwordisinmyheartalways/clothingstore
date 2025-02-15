


import React from 'react'
import '../Hero/Hero.css'
import { data } from '../ArrayData/sitedata.js'



const Hero = () => {


  return (
   <>


<div className={'hero-container'}>

            <div className={'hero-wrapper'}>



            <div  className={'hero-left-side'}>
                <div>
                 <div className='h-tag'><hr /></div>
                 <div className='left-header'><h3>OUR BESTSELLERS</h3></div>
                </div>

                <div className='latest'><h3>Latest Arrivals</h3></div>

                <div>
                    <div className='left-header'><h3>SHOP NOW</h3></div>
                    <div className='h-tag-two'><hr /></div>
                </div>



            </div>




            <div className={'hero-right-side'}>

                <div><img src={data.menu_hero_logo} alt=''></img></div>

            </div>







            </div>


        </div>





    

   </>
  )
}

export default Hero
