const http = require('http');
const keys = require('../keys');

/* function that accepts a String and creates a url to query the weather API */
const makeUrl = (city) => {
    if (city === undefined || city === '') {
      return;  
    }

    // Clearing spaces in case city has multiple words eg: New York
    const httpCity = city.replace(" ", "%20");

    /* Construct the url with:
        City: based on user passed args
        Units: will be given in imperial
        AppId: is the Token Key
    */
    return `http://api.openweathermap.org/data/2.5/weather?q=${httpCity}&units=imperial&appid=${keys.weather}`
};

/*  Argument:  
    [Type: STRING] City
        City to be sent to API
    [Type: FUNCTION] fn(weather)
        Callback function to be called once the API call completes
        Argument:
        [Type: OBJ] weather
            JSON compliant object contaning longitude, latitude, and weather
*/
const call = (city, fn) => {

    const url = makeUrl(city);

    if(url === undefined || url === '') {
        let error = {};
        error.err = true;
        error.code = 400;
        error.message = "City was not provided or was formatted incorrectly. Please check documentation";
        return fn(error);
    }
    
    /* Make API request */
    http.get(url, (res)=>{
        res.on('data', (data)=>{
            obj = JSON.parse(data);
            //check if resource couldn't be found
            if(obj.cod === "404") {
                return fn(obj);
            }

            let weather = {};
            weather.lon = obj.coord.lon;
            weather.lat = obj.coord.lat;
            weather.temp = obj.main.temp;
            fn(weather);
        });
    });
};

module.exports = {
    call
};