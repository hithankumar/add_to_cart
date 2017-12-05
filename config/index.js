var configValues = require('./config');

module.exports ={
    getDBConnectionString : function(){
        return 'mongodb://' + configValues.userName + ":" + configValues.password + '@ds129146.mlab.com:29146/prototype';
    }
} 