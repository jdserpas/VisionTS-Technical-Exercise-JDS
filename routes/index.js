const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const weather = require('../apis/weather');
const fileApi = require('../apis/file');

/* GET weather API */
router.get('/weather', (req, res) => {
  const city = req.query.city;

  if (city === undefined || city === '') {
    res.status(400).send('Bad Request: You must specify a city');
  }
  
  weather.call(city, (data) => {
    res.json(data);
  })
});

/* GET file API */
router.get('/file', (req, res, next) => {
  const fileName = req.query.name;

  // The user made a bad request. Set Response Code accordingly
  if (fileName === undefined || fileName === '') {
    next(createError(400, "File name is formatted incorrectly or not supported. See documentation for a list of supported .txt files"));
    return;
  }

  fileApi.call(fileName, (hadError, data) =>{
    // Runs if file read ran into trouble. Sets Response Code accordingly
    if (hadError){
      next(createError(500, "The I/O opperation ran into some issues"));
      return;
    }
    else {
      res.set({
        'Content-Type': 'text/plain; charset=utf-8'
      })
      .send(data);
    }
  });
});

module.exports = router;
