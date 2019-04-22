const config = require('config');

module.exports = function(){
    console.log("Private key:" + config.get('privateKey'));
    if(!config.get('privateKey'))
        throw new Error('FATAL ERROR: Private key is not defined!');
}