
exports.authorization = () => async (req, res, next) => {
    if (req.headers['access_token']){  // authorization code can be added here
        next();
    }
    next();
};