

import React, { useContext, useState, useEffect, useRef, useMemo } from 'react';
import '../Pages/CSS/PlaceOrder.css';
import { useLocation } from 'react-router-dom';
import { products } from '../Components/ArrayData/sitedata';
import { ClothingStoreContext } from '../Context/ClothingStoreProvider';
import CartTotals from '../Components/CartTotals/CartTotals';
import PayPal from '../Components/PayPal/PayPal';

const PlaceOrder = () => {
  const [paypalCheckout, setPayPalCheckout] = useState(false);
  const { setOriginalCartItems, navigate, delivery_fee, TotalCartAmount } = useContext(ClothingStoreContext);
  const { state } = useLocation();
  const originalCartItems = state?.cartItems;
  const [errorMessage, setErrorMessage] = useState('');
  const currentInput = useRef();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const totalPayPalAmount = useMemo(() => TotalCartAmount() + delivery_fee, [TotalCartAmount, delivery_fee]);

  
  const onUserChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const validateShippingForm = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  useEffect(() => {
    setPayPalCheckout(validateShippingForm());
  }, [formData]);

  const onUserSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!validateShippingForm()) {
        return;
    }

    try {
        let orderItems = [];
        for (const items in originalCartItems) {
            for (const item in originalCartItems[items]) {
                if (originalCartItems[items][item] > 0) {
                    const itemInfo = structuredClone(products.find(product => product._id === items));
                    if (itemInfo) {
                        itemInfo.productId = itemInfo._id;
                        itemInfo.sizes = item;
                        itemInfo.quantity = originalCartItems[items][item];
                        orderItems.push(itemInfo);
                    }
                }
            }
        }

        let orderData = {
            address: formData,
            items: orderItems,
            amount: totalPayPalAmount,
        };

        const response = await fetch('http://localhost:3001/orders/userOrders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        });

        const result = await response.json();
        if (result.success) {
            setOriginalCartItems({});  // Reset cart after order is placed
            localStorage.removeItem('cartItems');  // Clear localStorage
            navigate('/payment-success');
        } else {
            setErrorMessage(result.message || 'PayPal Order was not completed');
        }
    } catch (error) {
        console.error(error.message);
        setErrorMessage('Something went wrong. Please try again.');
    }
};

  useEffect(() => {
    if (currentInput.current) {
      currentInput.current.focus();
    }
  }, []);

  return (
    <div className="place-order-container">
      <div className="place-order-main-wrapper">
        <div className="place-left-order--wrapper">
          <h3>SHIPPING INFORMATION</h3>
          <div className="form-wrapper">
            <form onSubmit={onUserSubmit}>
              <input ref={currentInput} onChange={onUserChange} type="text" value={formData.firstName} placeholder="First Name" name="firstName" required />
              <input onChange={onUserChange} type="text" value={formData.lastName} placeholder="Last Name" name="lastName" required />
              <input onChange={onUserChange} type="email" value={formData.email} placeholder="Email" name="email" required />
              <input onChange={onUserChange} type="text" value={formData.street} placeholder="Street" name="street" required />
              <input onChange={onUserChange} type="text" value={formData.city} placeholder="City" name="city" required />
              <input onChange={onUserChange} type="text" value={formData.state} placeholder="State" name="state" required />
              <input onChange={onUserChange} type="text" value={formData.zipcode} placeholder="Zip Code" name="zipcode" required />
              <input onChange={onUserChange} type="text" value={formData.country} placeholder="Country" name="country" required />
              <input onChange={onUserChange} type="text" value={formData.phone} placeholder="Phone" name="phone" required />
              <button disabled={!validateShippingForm()} className='place-order-btn' type="submit">PLACE ORDER</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>

        {/* Ensure PayPal button displays correctly */}
        <div className="place-right-order-wrapper">
          <div className="cart-total">
            <CartTotals />
          </div>
          <div className="payment-method">
            <h3>PAYMENT <span>METHODS</span></h3>
          </div>
          <div className="place-order-user-checkout">
            <div className="pay-pal-btn">
              {paypalCheckout ? <PayPal totalAmount={totalPayPalAmount} /> : <p>Complete form to enable PayPal checkout.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
