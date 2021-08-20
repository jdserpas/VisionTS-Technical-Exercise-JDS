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
        prev = prev + "%20" + arg;
        return prev;
    });
}
else {
    city = args[0];
}

console.log(city);

/* Construct the url with:
    City: based on user passed args
    Units: will be given in imperial
    AppId: is the Token Key
*/
let url = `api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${keys.weather}`;

/* Make API request */