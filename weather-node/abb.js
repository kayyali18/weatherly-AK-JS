const request = require ('request');


//first arg is options object to configure information (unique things to our request)
request ({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20st%20philadelphia`,
    json: true, //tells it that whats coming back is JSON so it auto parses for us

}, (error, response, body) => { //parameters for callback are determined in the docs for request
    // callback runs when data is loaded in from google
    console.log (`Address: ${body.results[0].formatted_address} `);

    // console.log (JSON.stringify(body, undefined, 2)); //second arg filters properties
    // console.log (JSON.stringify(response, undefined, 2)); //sends back status code
    // console.log (JSON.stringify(error, undefined, 2)); //status code 200 == A-ok
})


















//section 24 lesson 8 if any api request error