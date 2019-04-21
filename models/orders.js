const mongoose = require('mongoose');
const Joi = require('joi');

// order model

const schema = new mongoose.Schema({
    client: { type: userSchema, requred: true },
    shippingAddress: { type: addressSchema, required: true },
    products: { type: productSchema, required: true },
    timestamp: { type: Date, default: Date.now() },
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Sent', required: true }
});

const Order = mongoose.model('orders', schema);

exports.Order = Order;
exports.orderSchema = schema;

// products must be modified later
// validation must be done