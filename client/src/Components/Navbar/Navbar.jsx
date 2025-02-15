


import React, { useContext, useState, useEffect} from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom'
import { ClothingStoreContext } from '../../Context/ClothingStoreProvider'
import { data} from '../ArrayData/sitedata.js'





const Navbar = () => {
  const [hrTag, setHrTag] = useState(localStorage.getItem('activeHrTag' || 'Home'));
  const { TotalCartAmountItems , navigate, setShowSearch} = useContext(ClothingStoreContext)




  const navbarHrTagClick = (navbarSection) => {
    setHrTag(navbarSection)
    localStorage.setItem('activeHrTag', navbarSection)
}


  
  return (
  <>

<div className={'navbar-container'}>
                    <div className={'navbar-wrapper'}>

                        <div className={'navbar-wrapper-left'}>
                            <Link to="/"><div><img src={data.shop_store_logo} alt=''></img></div></Link>
                        </div>


                        <div className={'navbar-wrapper-middle'}>
                            <Link onClick={() => navbarHrTagClick('Home')} to="/" className='middle-link'>
                            <div><h3>HOME</h3></div>
                                {hrTag === 'Home' && <hr />}
                            </Link>

                            <Link onClick={() => navbarHrTagClick('Collection')} to="/collection" className='middle-link'>
                            <div ><h3>COLLECTION</h3></div>
                                {hrTag === 'Collection' && <hr />}
                            </Link>

                            <Link onClick={() => navbarHrTagClick('About')}  to="/about" className='middle-link'>
                            <div><h3>ABOUT</h3></div>
                              {hrTag === 'About' && <hr />}      
                            </Link>


                            <Link onClick={() => navbarHrTagClick('Contact')} to="/contact" className='middle-link'>
                            <div><h3>CONTACT</h3></div>
                                  {hrTag === 'Contact' && <hr />}    
                            </Link>




                        </div>






                        <div className={'navbar-wrapper-right'}>
                             <div className='icons'><img onClick={() => { setShowSearch(true); navigate('/collection') }} src={data.search_logo} alt=''></img></div>

                            
                            <div>
                               <div className='icons'><img onClick={() =>  navigate('/login')} src={data.profile_icon_logo} alt=''></img></div>

                            </div>






                            <Link to="/cart" className='right-link'>
                              <div><img src={data.cart_logo} alt=''></img> </div>
                            </Link>


                               <div>
                                 <div className={'total-cart-count-zero'}><p>{TotalCartAmountItems()}</p></div>

                               </div>
                            


                        </div>

                        


                    </div>

                               




                </div>







  </>
  )
}

export default Navbar
