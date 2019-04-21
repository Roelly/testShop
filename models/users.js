const mongoose = require('mongoose');
const Joi = require('joi');

// user model

const addressSchema = new mongoose.Schema({
    country: { type: String, minlength: 3, maxlength: 25},
    zip: { type: Number, minlength: 3, maxlength: 6 }, 
    street: { type: String, minlength: 3, maxlength: 50},
    number: { type: Number, minlength: 1, maxlength: 4 },
    door: { type: String }
});

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true , minlength: 3, maxlength: 25 },
    lastName: { type: String, required: true , minlength: 3, maxlength: 25},
    email: { type: String, required: true, minlength: 10, maxlength: 50},
    address: { type: addressSchema },
    phone: { type: Number, minlength: 6, maxlength: 14},
    password: { type: String, required: true, minlength: 10, maxlength: 255}
});

const User = mongoose.model('users', user);

const validate = (user) => {
    const schema = {
        firstName: Joi.string().required().min(3).max(25),
        lastName: Joi.string().required().min(3).max(25),
        email: Joi.string().required().min(10).max(50).email(),
        password: Joi.string().required().min(10).max(255),
        phone: Joi.number().min(6).max(14),
        address: {
            country: Joi.string().min(3).max(25),
            zip: Joi.number().min(3).max(6),
            street: Joi.string().min(3).max(50),
            number: Joi.number().min(1).max(4),
            door: Joi.string()
        }
    };

    return Joi.validate(user, userSchema);
}

exports.addressSchema = addressSchema;
exports.userSchema = userSchema;
exports.User = User;
exports.validateUser = validate;