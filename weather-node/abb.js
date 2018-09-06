const yargs = require ('yargs');

const request = require ('request')

const geocode = require ('./geocode/geocode')
const key = `a4aac8ef53f324af6467e2e607de880c`

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
    console.log (JSON.stringify(results, undefined, 4));
    request ({
        url: `https://api.darksky.net/forecast/${key}/${results.latitude},${results.longitude}`,
        json: true
    }, (error, response, body) => {
        console.log (body.currently)
    })
})

















//section 24 lesson 8 if any api request error