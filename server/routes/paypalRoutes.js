


import express from 'express';
import paypal from '../config/paypal.js';

const router = express.Router();

// Route to create PayPal payment
router.post('/create-payment', (req, res) => {
  const { totalAmount } = req.body;

  const create_payment_json = {
    intent: 'sale',
    payer: { payment_method: 'paypal' },
    redirect_urls: {
      return_url: 'http://localhost:3000',  // Redirect to homepage after success
      cancel_url: 'http://localhost:3000',  // Redirect to homepage after cancel
    },
    transactions: [{
      amount: { total: totalAmount.toFixed(2), currency: 'USD' },
      description: 'ForeverShop Order Payment',
    }],
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Payment creation failed' });
    } else {
      const approvalUrl = payment.links.find(link => link.rel === 'approval_url').href;
      res.json({ approvalUrl });
    }
  });
});





export default router;