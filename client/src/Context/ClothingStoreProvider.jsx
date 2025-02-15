



import React, { createContext, useEffect, useState } from "react";
import { products } from "../Components/ArrayData/sitedata";
import { useNavigate } from "react-router-dom";



export const ClothingStoreContext = createContext(null)





const ClothingStoreProvider = ({ children }) => {

    const OriginalCart = () => {
      const storedCart = localStorage.getItem("cartItems");
         if (storedCart) {
         return JSON.parse(storedCart); // Load cart data from localStorage
       } else {
         let cart = {};
           for (let i = 0; i < products.length + 1; i++) {
             cart[i] = 0;
           }
           return cart;
         }
        }


        const getStoredSizes = () => {
          const storedSizes = localStorage.getItem("selectedSizes");
          return storedSizes ? JSON.parse(storedSizes) : {};
      };




      const [originalCartItems, setOriginalCartItems] = useState(OriginalCart());
      const [selectedSizes, setSelectedSizes] = useState(getStoredSizes()); 
      const [search, setSearch] = useState('');
      const [showSearch, setShowSearch] = useState(false);
      const delivery_fee = 10.00;
      const navigate = useNavigate();
      
      
      
      
      
      const updateLocalStorage = (cartItems) => {       // Function to update localStorage whenever the cart changes
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  
  
  
  const updateSizeStorage = (sizes) => {
    localStorage.setItem("selectedSizes", JSON.stringify(sizes));
};




const updateSelectedSize = (itemId, size) => { // Function to update the selected size
          setSelectedSizes((sizes) => {
            const updatedSizes = { ...sizes, [itemId]: size };
            updateSizeStorage(updatedSizes);
            return updatedSizes;
        });
      
      };



    




          


          const TotalCartAmountItems = () => {
            let totalCartAmount = 0;
             for(const index in originalCartItems) {
                 if(originalCartItems[index] > 0 ) {
                   totalCartAmount += originalCartItems[index]
                 }
             }
                  return totalCartAmount
          }




          const TotalCartAmount = () => {
            let totalCartAmount = 0;
            for (const index in originalCartItems) {
                if (originalCartItems[index] > 0) {
                    const product = products.find((product) => Number(product._id) === Number(index));
                    if (product) {
                        totalCartAmount += originalCartItems[index] * product.price; // Use product.price instead of new_price if necessary
                    }
                }
            }
            return totalCartAmount;


        }
  



        const AddCartItems = (productId, size) => {
          setOriginalCartItems((prevCart) => {
              const updatedCart = { ...prevCart };
              if (updatedCart[productId]) {
                  updatedCart[productId] += 1;  // Increase quantity of existing item
              } else {
                  updatedCart[productId] = 1;  // Add new item to cart
              }
              updateLocalStorage(updatedCart);
              return updatedCart;
          });
      };


        const RemoveCartItems = (items) => {
          setOriginalCartItems((cartItems) => {
            const updatedCart = { ...cartItems, [items]: cartItems[items] - 1 };
            updateLocalStorage(updatedCart); // Update localStorage when cart changes
            return updatedCart;
          });

        }





   






        const ClothingStoreContextValue = {search,  setSearch, showSearch, setShowSearch, delivery_fee, navigate, selectedSizes, 
            updateSelectedSize, updateSizeStorage, updateLocalStorage,  products, originalCartItems,
             TotalCartAmountItems, TotalCartAmount, AddCartItems, RemoveCartItems}




  return (
   <>

        <ClothingStoreContext.Provider value={ClothingStoreContextValue}>
                {children}

        </ClothingStoreContext.Provider>
            







   </>
  )
}






export default ClothingStoreProvider
