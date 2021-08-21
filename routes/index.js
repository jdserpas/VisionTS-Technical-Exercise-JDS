const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const ctrlWeather = require('../controllers/weather');
const ctrlFile = require('../controllers/file');

/* GET weather API */
router.get('/weather', ctrlWeather.getWeather);

/* GET file API */
router.get('/file', ctrlFile.getFile);

module.exports = router;