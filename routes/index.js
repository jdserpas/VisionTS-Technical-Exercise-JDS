const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const ctrlWeather = require('../controllers/weather');
const ctrlFile = require('../controllers/file');

/* GET weather API */
/* Completes exercise 1 */
router.get('/weather', ctrlWeather.getWeather);

/* GET file API */
/* Completes exercise 2 */
router.get('/file', ctrlFile.getFile);

module.exports = router;