const express       = require('express');

/*** IMPORT ROUTES ***/
const users         = require('../routes/users');
const categories    = require('../routes/categories');
const products      = require('../routes/products');
const orders        = require('../routes/orders');

/*** IMPORT MIDDLEWARES ***/
const auth          = require('../middleware/auth'); 
const errors        = require('../middleware/error');

module.exports = function(app){
    app.use(express.json());                    // body-parsing

    // app.use(auth); 

    app.use('/api/users', users);
    app.use('/api/categories', categories);
    app.use('/api/products', products);
    app.use('/api/orders', orders);

    app.use('/productImages', express.static('productImages'));

    app.use(errors);
}