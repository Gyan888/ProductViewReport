var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userDb = require('./connector')


let UserViewSchema = new Schema({
    "ViewDate" :{
        type: Date
        },
    "ProductId":{
        type: String
        },
    "UserId":{
        type: String
        }
    },
    {collection: "UserView"}
);

var UserView = userDb.ConnectionConnect.call(this).model('UserView', UserViewSchema);


exports.getProductReport = async (product_id, date_param) =>{
    return UserView.find({});
};