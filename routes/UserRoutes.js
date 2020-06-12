const express = require('express');
const router = express.Router();
const {authorization} = require('../middleware/requestValidator')
const {getProductReport} = require('../controllers/UserController')
router.route('/data/:product_id/reports/').get(authorization, getProductReport);


module.exports = router;