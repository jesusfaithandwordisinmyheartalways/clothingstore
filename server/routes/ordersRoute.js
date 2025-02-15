

import express from 'express';
import { userOrders } from "../controllers/orderController.js";

const router = express.Router();

// Route for handling the creation of user orders
router.post('/userOrders', userOrders);

export default router;