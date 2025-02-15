





import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClothingStoreContext } from '../Context/ClothingStoreProvider.jsx';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import { products } from '../Components/ArrayData/sitedata.js';
import '../Pages/CSS/Product.css'





const Product = () => {
  const { productId } = useParams();
   const { AddCartItems, updateSelectedSize } = useContext(ClothingStoreContext)
   const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');




    useEffect(() => {
        if (!productId || productId === "undefined") {
            console.error("Error: productId is undefined!");
            return;
        }
        
        const foundProduct = products.find((item) => Number(item._id) === Number(productId));
    
        if (foundProduct) {
            console.log("Found product:", foundProduct);
            setProductData(foundProduct);
            setImage(foundProduct.image ? foundProduct.image[0] : '');  // Ensure `image` exists
        } else {
            console.error("Product not found!");
        }
    }, [productId]);


  
  
  const handleSizeChange = (e) => {
      const newSize = e.target.value;
      setSize(newSize);
      if (productData) {
          updateSelectedSize(productData._id, newSize); // Update the size in context
      }
     
  };




      
  const UserCartAccess = () => {
    if (!size) {
        alert('Please select a size');
        return;
    }
    AddCartItems(productData._id, size); // Add item to the cart
};





  return productData ? (
    <div className="product-container">
        <div className="product-wrapper">


            <div className="image-section-left-wrapper">
             
                    {productData.image.map((elements, index) => (
                        <div key={index}>
                            <img onClick={() => setImage(elements)} src={elements} alt={productData.name} className="thumbnail" />
                        </div>
                    ))}


                    
                </div>



                <div className="main-image-wrapper">
                    <img src={image} alt={productData.name} />
                </div>
           

         


            <div className="product-right-side-section-wrapper">
                <div className='product-name'><h1>{productData.name}</h1></div>

                <div className="price"><p>Price: ${productData.price}.00</p> </div>


                <div className="description"> <p>{productData.description}</p>  </div>

             
                <div className="size-selection-wrapper">
                       <div> <p>Select Size:</p></div>
                    

                    <div className="size-options">
                        <select onChange={handleSizeChange} value={size}>
                            <option value="">-- Select a size --</option>
                            {productData.sizes.map((sizeOption) => (
                                <option key={sizeOption} value={sizeOption}>{sizeOption}</option>
                            ))}
                        </select>
                    </div>

                </div>

              
                <div className="add-to-cart">
                    <button onClick={UserCartAccess} className="add-to-cart"> Add to Cart </button>
                </div>

        
                <div className="original-product"> <p>100% Original product.</p></div>

                <div className="product-available"> <p>Cash on delivery is available on this product.</p> </div>


                <div className="exchange"> <p>Easy return and exchange policy within 7 days.</p></div>


            </div>






        </div>






        <div>
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>







        </div>

    

    
     
  
) : (
    <div>Loading...</div>
);



}

export default Product
