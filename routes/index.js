const express = require('express');
const router = express.Router();
const weather = require('../apis/weather');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET weather API */
router.get('/weather', (req, res) => {
  const city = req.query.city;

  if (city === undefined || city === '') {
    res.send('You must provide a city\n');
  }
  
  weather.call(city, (data) => {
    res.json(data);
  })
});

module.exports = router;
