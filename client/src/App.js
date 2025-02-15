



import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx'
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/ Footer/Footer.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import Cart from "./Pages/Cart.jsx";
import Collection from "./Pages/Collection.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Login from "./Pages/Login.jsx";
import Product from "./Pages/Product.jsx";
import PlaceOrder from "./Pages/PlaceOrder.jsx";
import ClothingStoreProvider from './Context/ClothingStoreProvider.jsx';
import PaymentSuccess from "./Pages/PaymentSuccess.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Orders from "./Pages/Orders.jsx";


function App() {


  return (
   <>

   <ClothingStoreProvider>
    <Navbar />
        <SearchBar />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path="/product/:productId" element={<Product />}/>
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/order-history' element={<Orders />} />
          <Route path='/payment-success' element={<PaymentSuccess />} />

        </Routes>
        <Footer />
        </ClothingStoreProvider>


    



   </>
  );
}

export default App;
