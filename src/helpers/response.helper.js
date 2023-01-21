const { validationResult } = require('express-validator');

class ResponseHelper{

  static errorValidator = (req) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()){
      let errorArray = errors.array().map(error => error.msg); 
      throw new Error(errorArray.join(' | '));
    }
  }

  static error = (res,message,status) => {
    let statusCode = status || 500;
  
    res.status(statusCode).send({
      error: true,
      status:statusCode,
      message: message || 'Internal server error',
      data:{}
    });
  }

  static success = (res,message,data,status) => {
    let statusCode = status || 200;
  
    res.status(statusCode).send({
      error: false,
      status:statusCode,
      message: message,
      data:data || {}
    });
  }

}

module.exports = ResponseHelper;