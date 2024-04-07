import mongoose from "mongoose";

// Define the User schema
const WishlistSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

// Create the User model
const Wishlist = mongoose.model('Wishlist', WishlistSchema);

module.exports = Wishlist;
