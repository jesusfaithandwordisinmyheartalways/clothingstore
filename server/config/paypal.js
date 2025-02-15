


import paypal from 'paypal-rest-sdk';
import dotenv from 'dotenv';

dotenv.config();

paypal.configure({
  mode: 'sandbox', // Change to 'live' for production
  client_id: process.env.REACT_APP_PAYPAL_CLIENT_ID,
  client_secret: process.env.REACT_APP_PAYPAL_CLIENT_SECRET,
});

export default paypal;