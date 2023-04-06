const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode){
        case constants.VALIDATION_ERROR: 
            res.json({title: "Validation Failed",  message : err.message});
            break;

        case constants.NOT_FOUND: 
            res.json({title: "Not Found",  message : err.message});
            break;
        
        case constants.UNAUTHORISED: 
            res.json({title: "Unauthorised",  message : err.message});
            break;

        case constants.FORBIDDEN: 
            res.json({title: "Forbidden",  message : err.message});
            break;

        case constants.SERVER_ERROR: 
            res.json({title: "Sever Error",  message : err.message});
            break;  

        default:
        break;
    }
};

module.exports = errorHandler;