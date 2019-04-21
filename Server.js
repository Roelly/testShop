const express = require('express');
const app = express();

// const winston = require('winston');

// winston.handleExceptions(
//     new winston.transports.Console({ colorize: true, prettyPrint: true }),
//     new winston.transports.File({ filename: 'uncaughtExceptions.log' }),
//     new winston.transports.mo
// );

mongoose.connect('mongodb://localhost/testShop',{ useNewUrlParser: true },() => {
    console.log('Connected to mongodb...');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Connected to port: ${port}...`);
})