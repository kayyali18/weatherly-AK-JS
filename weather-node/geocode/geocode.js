const request = require ('request')


var geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);

        //first arg is options object to configure information (unique things to our request)
    request ({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true, //tells it that whats coming back is JSON so it auto parses for us

    }, (error, response, body) => { //parameters for callback are determined in the docs for request
        if (error) callback(`Unable to connect to Google Servers`)
        else if (body.status == 'ZERO_RESULTS') callback('Unable to find that address')
        else if (body.status == 'OK') {
        // callback runs when data is loaded in from google
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
        console.log (body)
        // console.log (JSON.stringify(body, undefined, 2)); //second arg filters properties
        // console.log (JSON.stringify(response, undefined, 2)); //sends back status code
        // console.log (JSON.stringify(error, undefined, 2)); //status code 200 == A-ok
    })
}

module.exports.geocodeAddress = geocodeAddress;


//API KEY
// a4aac8ef53f324af6467e2e607de880c

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/a4aac8ef53f324af6467e2e607de880c/39.7958998,-105.1379255