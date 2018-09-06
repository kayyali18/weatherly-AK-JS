const request = require ('request');

const key = `a4aac8ef53f324af6467e2e607de880c`


var getWeather = (lat, lng, callback) => {
    request ({
        url: `http://api.wunderground.com/api/1682ab773bd1bd38/conditions/q/CA/San_Francisco.json`,
        json: true
    }, (error, response, body) => {
        if (error) callback ('Unable to connect to Forecast.io server.')
        else if (response.statusCode == 400) callback ('Unable to fetch weather')
        else if (response.statusCode == 200) {
            callback (undefined, {
               temperature: body.currently.temperature,
               apparentTemperature: body.currently.apparentTemperature
            })
        }

    })
}


module.exports.getWeather = getWeather;
