const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next) {
    try{
        const token = req.header('x-auth-token');
        if(!token) 
            return res.status(401).send('No authorization token was provided.');
        const decoded = jwt.verify(token, config.get('privateKey'));
        req.user = decoded;
        next();
    }
    catch(ex){
        return res.status('400').send('Invalid token');
    }
}