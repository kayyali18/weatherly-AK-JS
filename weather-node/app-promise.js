const yargs = require ('yargs');
const axios = require ('axios');

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

    let encodedAddress = encodeURIComponent(argv.address);
    let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

    axios.get (geocodeUrl)
    .then ((response) => {
        if (response.data.status == 'ZERO_RESULTS') {
            throw new Error ('Unable to find that address');
        }
        var weatherUrl = `http://api.wunderground.com/api/1682ab773bd1bd38/conditions/q/CA/San_Francisco.json`
    }).catch ((error) => {
        if (error.code == 'ENOTFOUND') console.log ('Unable to connect to API servers')
        else console.log (error.message);
    })
