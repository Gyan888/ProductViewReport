let logger = require('../logging/logger');
let get = require('lodash/get');
let includes = require('lodash/includes')
const {getProductReport} = require('../models/users')

exports.getProductReport = async (req, res) =>{
    try{
        let productId = get(req, 'params.product_id');
        let filter = null;
        if (includes(['week', 'month', 'year'], get(req, 'query.show_by'))){
            filter = {"window" : {[`$${get(req, 'query.show_by')}`] : "$ViewDate"}};
        }
        else if(get(req, 'query.start_date') && get(req, 'query.end_date')){
            filter ={} // custom range
        }
        let result = await getProductReport(productId, filter);
        res.json(result);
    } catch(ex){
        logger.error("exception in getProductReport", ex);
        res.status(400).end()    }
};