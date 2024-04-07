import mongoose from "mongoose";

// Define the User schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  size: {
    type: String
  }
});

// Create the User model
const User = mongoose.model('Product', productSchema);

module.exports = User;
