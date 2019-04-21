const mongoose = require('mongoose');
const Joi = require('joi');

// category model

const schema = new mongoose.Schema({
    name: { type: String, minlength: 3, maxlength: 25, required: true }
});

const Category = mongoose.model('categories', category);

const validate = (category) => {
    const schema = {
        name: Joi.string().required().min(3).max(25)
    };

    return Joi.validate(user, schema);
}

exports.Category = Category
exports.categorySchema = schema;
exports.validateCategory = validate;