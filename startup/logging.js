const config    = require('config');
const winston   = require('winston');
require('winston-mongodb');

module.exports = function(){
    const db = config.get('db');
    winston.handleExceptions(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' }),
        new winston.transports.MongoDB({ db, level: 'info' })
    );
    
    process.on('unhandledRejection', (ex) => {
        throw new Error(ex);
    });
    
    winston.addColors(winston.transports.File, { filename: 'log.log' });
    winston.addColors(winston.transports.MongoDB, { db, level: 'info' });
}


