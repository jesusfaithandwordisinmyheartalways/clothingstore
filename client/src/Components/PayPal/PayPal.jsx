

import React, { useRef, useEffect, useContext, useState } from 'react';
import { ClothingStoreContext } from '../../Context/ClothingStoreProvider';

const PayPal = ({ totalAmount }) => {
  const paypalRef = useRef();
  const { navigate } = useContext(ClothingStoreContext);
  const [sdkReady, setSdkReady] = useState(false);

  useEffect(() => {
    const loadPayPalScript = async () => {
      if (window.paypal) {
        setSdkReady(true);
        return;
      }

      const script = document.createElement('script');
      const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID; // Access the environment variable here
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
      script.async = true;
      script.onload = () => setSdkReady(true);
      script.onerror = () => console.error("Failed to load PayPal SDK");
      document.body.appendChild(script);
    };

    loadPayPalScript();
  }, []);

  useEffect(() => {
    if (!sdkReady || !paypalRef.current) return;

    // Clear container before rendering buttons
    paypalRef.current.innerHTML = '';

    window.paypal.Buttons({
      createOrder: async (data, actions) => {
        try {
          const response = await fetch('http://localhost:3001/paypal/create-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: totalAmount }),
          });

          const paymentData = await response.json();
          return paymentData.id;
        } catch (error) {
          console.error('PayPal Create Order Error:', error);
        }
      },
      onApprove: async (data, actions) => {
        try {
          const order = await actions.order.capture();
          console.log('Order successful:', order);
          navigate('/payment-success');
        } catch (error) {
          console.error('PayPal Approval Error:', error);
        }
      },
      onError: (err) => {
        console.error('PayPal Error:', err);
      },
    }).render(paypalRef.current);

  }, [sdkReady, totalAmount]);

  return <div ref={paypalRef}></div>;
};

export default PayPal;