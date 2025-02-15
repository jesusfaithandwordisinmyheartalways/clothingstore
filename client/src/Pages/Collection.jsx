


import React, { useContext, useEffect, useState } from 'react'
import '../Pages/CSS/Collection.css'
import ProductItem from '../Components/ ProductItem/ProductItem'
import { products } from '../Components/ArrayData/sitedata'
import { ClothingStoreContext } from '../Context/ClothingStoreProvider'


const Collection = () => {

      const { search } = useContext(ClothingStoreContext)
      const [filteredProducts, setFilteredProducts] = useState(products)
      const [selectedCategories, setSelectedCategories] = useState([]);
      const [selectedSubCategories, setSelectedSubCategories] = useState([]);
       const [sortType, setSortType] = useState('relevant');



       const categoryChange = (event) => {
        const { value } = event.target;
        setSelectedCategories((prev) =>
          prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
      };
    
      const subCategoryChange = (event) => {
        const { value } = event.target;
        setSelectedSubCategories((prev) =>
          prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
      };
    



      useEffect(() => {
        let updatedProducts = products;

         // Filter by search query
    if (search.trim() !== '') {
      updatedProducts = updatedProducts.filter((product) =>
          product.name.toLowerCase().includes(search.toLowerCase())
      );
  }

  // Filter by categories
  if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
          selectedCategories.includes(product.category)
      );
  }

  // Filter by subcategories
  if (selectedSubCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
          selectedSubCategories.includes(product.subCategory)
      );
  }

  // Apply sorting
  if (sortType === 'low-high') {
      updatedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === 'high-low') {
      updatedProducts.sort((a, b) => b.price - a.price);
  }

        setFilteredProducts(updatedProducts);
      }, [search, selectedCategories, selectedSubCategories, sortType]);



    
      useEffect(() => {
        let sortedProducts = [...filteredProducts];
    
        if (sortType === 'low-high') {
          sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortType === 'high-low') {
          sortedProducts.sort((a, b) => b.price - a.price);
        }
    
        setFilteredProducts(sortedProducts);
      }, [sortType]);
    






      return (
        <>
       
             <div className={'collection-container'}>
               
             
       
       
                     <div className={'wrapper-left'}>
       
                         <div><h3>FILTERS</h3></div>
       
                         <div>
                            <div><h3>ALL COLLECTIONS </h3></div>
                         </div>
       
       
                       <div className={'select'}>
                       <select onChange={(e) => setSortType(e.target.value)}>
                           <option value='relevant'>Sort by: Relevant</option>
                           <option value='low-high'>Sort by: Low to High</option>
                           <option value='high-low'>Sort by: High to Low</option>
                        </select>
                       </div>
       
       
                     </div>
       
       
             
       
             </div>
       
       
       
       
       
       
       
       
       
             <div className='collection-container-two'>
       
       
       
             <div className='left-side-wrapper'>
       
                          
             <div className={'CATEGORIES'}>
             <div><h3>CATEGORIES</h3></div>
           <div><label><input onChange={categoryChange} type='checkbox' value='Men'></input>Men</label></div>  
           <div><label><input onChange={categoryChange} type='checkbox' value='Women'></input>Women</label></div>
           <div><label><input onChange={categoryChange} type='checkbox' value='Kids'></input>Kids</label></div>
       
             </div>
       
       
       
             <div className={'TYPE'}>
             <div><h3>TYPE</h3></div>
           <div><label><input onChange={subCategoryChange} type='checkbox' value='Topwear'></input>Topwear</label></div>
           <div><label><input onChange={subCategoryChange} type='checkbox' value='Bottomwear'></input>Bottomwear</label></div>
           <div><label><input onChange={subCategoryChange} type='checkbox' value='Winterwear'></input>Winterwear</label></div>
       
       
             </div>
       
       </div>
       
       
       
       
       
       
       
                 <div className='middle-wrapper'>
                     {filteredProducts.map((e) => {
                       return (
                         <div><ProductItem key={e._id} name={e.name} _id={e._id} price={e.price} image={e.image}  /></div>
                       )
                     })}
       
                 </div>
       
       
           
       
       
             </div>
       
        </>
         )




}







export default Collection
