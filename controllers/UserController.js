let logger = require('../logging/logger');
let get = require('lodash/get');
const {getProductReport} = require('../models/users')

exports.getProductReport = async (req, res) =>{
    try{
        let productId = get(req, 'params.product_id');
        let period= get(req, 'query');
        let result = await getProductReport(productId, period);
        res.json(result);
    } catch(ex){
        logger.error("exception in getProductReport", ex);
        res.status(400).end()    }
};