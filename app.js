const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/UserRoutes');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('', routes);
app.listen(process.env.PORT, () => {
    console.log('server is running at... '+process.env.PORT);
});


module.exports = app;