var mongoose = require('mongoose');
var logger=require('../logging/logger')
var dburl

class UserInfodb {
    ConnectionConnect(){
        dburl=process.env.MONGO_URL;
        logger.info(dburl);
        var conn= mongoose.createConnection(dburl, {useUnifiedTopology: true, useNewUrlParser: true});
        return conn
    }

}
  mongoose.connection.on('error',function (err) {
    logger.info('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', function () {
    logger.info('Mongoose default connection disconnected');
  });



  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      logger.info('Mongoose default connection disconnected through app termination');
      process.exit(0);
    });
  });

module.exports=  new UserInfodb()