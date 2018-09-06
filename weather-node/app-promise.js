const yargs = require ('yargs');
const axios = require ('axios');

const geocode = require ('./geocode/geocode')
const weather = require ('./weather/weather')
const keyObj = require ('../src/api-key')
const key = keyObj.key

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
    let weatherUrl = ` http://apiwunderground.com/api/${key}/forecast/q/CA/${encodedAddress}.json`;

    axios.get (weatherUrl)
    .then ((response) => {
        if (response.data.response.error.type == 'querynotfound') {
            throw new Error ('Unable to find that address');
        }
    }).catch ((error) => {
        if (error.code == 'ENOTFOUND') console.log ('Unable to connect to API servers')
        else console.log (error.message);
    })

//Query is dynamic based off compnent calling it
    // http://api.wunderground.com/api/1682ab773bd1bd38/q/CA/San_Francisco.json
    // http://api.wunderground.com/api/1682ab773bd1bd38/forecast/q/CA/San_Francisco.json
    // http://api.wunderground.com/api/1682ab773bd1bd38/forecast10day/q/CA/San_Francisco.json
