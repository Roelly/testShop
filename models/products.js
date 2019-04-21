const mongoose = require('mongoose');
const Joi = require('joi');

// product model

const product = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    category: { type: categorySchema, required: true },
    price: { type: Number, required: true },
    inStock: { type: Number, required: true },
    discount: { type: Number },
    modified: { type: Date }
});

const Product = mongoose.model('products', product);

const validate = (product) => {
    const schema = {
        name: Joi.string().required().min(3).max(50),
        price: Joi.number().required(),
        inStock: Joi.number(),
        discount: Joi.number(),
        modified: Joi.date(),
    };

    return Joi.validate(user, schema);
}

exports.Product = Product;
exports.productSchema = product;
exports.validateProduct = validate;