


import React, { useContext, useEffect, useState } from 'react'
import '../SearchBar/SearchBar.css'
import { ClothingStoreContext } from '../../Context/ClothingStoreProvider'
import { useLocation } from 'react-router-dom';
import { data } from '../ArrayData/sitedata.js';





const SearchBar = () =>  {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ClothingStoreContext)
  const [navbarVisible, setNavbarVisible] = useState(false)
  const location = useLocation();


  useEffect(() => {
    if(location.pathname.includes('collection')) {
        setNavbarVisible(true)
    } else {
        setNavbarVisible(false)
    }
}, [location])  





return showSearch && navbarVisible ? (

<div className={'search-input-container'}>
       <div className={'search-input-wrapper'}>
           <div className='input-user'>
           <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Women, Girl, Men'></input>
           <img src={data.search_logo} alt='' className={'image'}></img>

           </div>
       </div>
       <div className='image-two'><img onClick={() => setShowSearch(false)} src={data.cross_icon} alt=''></img></div>

       </div>

      ) : null



}


export default SearchBar
