const express = require('express');
const app = express();
const winston = require('winston');

require('./startup/dbinit')();          // Connection to database
require('./startup/logging')();        // Logging standards
require('./startup/routes')(app);     // Routing APIs
require('./startup/privatekey')();   // Ensuring the existence of privatekey
require('./startup/validation')();  // Validation of mongoose objectID with Joi

const port = process.env.PORT || 3000;

app.listen(port, () => { winston.info(`Connected to port: ${port}...`); })