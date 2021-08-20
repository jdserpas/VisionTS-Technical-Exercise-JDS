const http = require('http');
const keys = require('./keys');

/* Capture arguments and make them http friendly*/
const args = process.argv.slice(2);
let city;
//runs when no args are provided
if(args.length === 0 || args === null) {
    console.log('You must provide a city.');
    console.log('Script usage: npm weather {city}');
    process.exit();
}
//runs when a city with multiple names is provided eg: New York
else if(args.length >= 1) {
    city = args.reduce((prev, arg)=>{
        // %20 is http url code for spaces
        prev = prev + "%20" + arg;
        return prev;
    });
}
else {
    city = args[0];
}

/* Construct the url with:
    City: based on user passed args
    Units: will be given in imperial
    AppId: is the Token Key
*/
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${keys.weather}`;

/* Make API request */
http.get(url, (res)=>{
    res.on('data', (data)=>{
        obj = JSON.parse(data);
        cleanCity = city.replace("%20", " ");
        console.log(`Longitude: ${obj.coord.lon} || Latitude: ${obj.coord.lat}`)
        console.log(`It is currently ${obj.main.temp} Degrees Farenheit in ${cleanCity}`);
    });
});