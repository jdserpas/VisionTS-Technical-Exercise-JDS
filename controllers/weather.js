const weather = require('../models/weather');

const getWeather = (req, res) => {
    const city = req.query.city;
  
    //User MUST provide city query parameter
    if (city === undefined || city === '') {
        return res
          .status(400)
          .json({
            "Bad Request" : "City is required. See documentation"
          });
    }
    
    //Call model
    weather.call(city, (data) => {
      res.json(data);
    })
};

module.exports = {
    getWeather
};