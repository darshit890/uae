import mongoose from "mongoose";

// Define the User schema
const CartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});

// Create the User model
const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
