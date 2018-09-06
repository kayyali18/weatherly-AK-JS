const yargs = require ('yargs');

const geocode = require ('./geocode/geocode')
const weather = require ('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true, //demand an address
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) console.log (errorMessage);
    console.log (results.address);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
        if (errorMessage) console.log (errorMessage);
        console.log (`It's currently ${weatherResults.temperature}.\n\nIt feels like ${weatherResults.apparentTemperature}.`);
    });
})
















//section 24 lesson 8 if any api request error