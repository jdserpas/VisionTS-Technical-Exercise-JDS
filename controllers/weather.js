const weather = require('../apis/weather');

const getWeather = (req, res) => {
    const city = req.query.city;
  
    if (city === undefined || city === '') {
        return res
          .status(400)
          .json({
            "Bad Request" : "City is required. See documentation"
          });
    }
    
    weather.call(city, (data) => {
      res.json(data);
    })
};

module.exports = {
    getWeather
};