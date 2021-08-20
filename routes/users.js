const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const create = require('../apis/createUser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST user data. */
router.post('/', (req, res, next) => {
  //Check that JSON was sent
  if(req.get('Content-Type') !== 'application/json') {
    next(createError(400, "BAD REQUEST: you may only send JSON data"));
    return;
  }
  
  create.call(req.body, (err, result)=> {
    //if API call fails, send 500 Error message to notify something went wrong with server
    if(err) {
      next(createError(500, err));
      return;
    }
    
    //if API call succeeds, echo document back to user
    res.json({
      'status': 'OK',
      'message': 'successfully stored object',
      'document': result
    })
  });
});

module.exports = router;