const request = require ('request');
const yargs = require ('yargs');

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
console.log (encodedAddress)


//first arg is options object to configure information (unique things to our request)
request ({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true, //tells it that whats coming back is JSON so it auto parses for us

}, (error, response, body) => { //parameters for callback are determined in the docs for request
    // callback runs when data is loaded in from google
    console.log (`Address: ${body.results[0].formatted_address} `);
    console.log (`Latitude: ${body.results[0].geometry.location.lat} `);
    console.log (`Longitude: ${body.results[0].geometry.location.lng} `);
    
    // console.log (JSON.stringify(body, undefined, 2)); //second arg filters properties
    // console.log (JSON.stringify(response, undefined, 2)); //sends back status code
    // console.log (JSON.stringify(error, undefined, 2)); //status code 200 == A-ok
})


















//section 24 lesson 8 if any api request error