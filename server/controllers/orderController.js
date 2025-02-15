

import Order from "../models/orderModel.js";

// Ensure the route handles POST requests and updates the cart/order state
const userOrders = async (req, res) => {
    try {
        const { address, items, amount } = req.body;

        if (!address || !items || items.length === 0 || !amount) {
            return res.status(400).json({ success: false, message: "Invalid order data" });
        }

        // Ensure items contain the correct structure
        const formattedItems = items.map(item => ({
            productId: item._id,
            name: item.name,
            sizes: item.sizes,
            quantity: item.quantity || 1, // Default to 1 if missing
            price: item.price
        }));

        const newOrder = new Order({
            address,
            items: formattedItems,
            amount
        });

        await newOrder.save();
        res.status(200).json({
            success: true,
            message: "Order placed successfully",
            order: newOrder
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while placing the order",
        });
    }
};

export { userOrders };