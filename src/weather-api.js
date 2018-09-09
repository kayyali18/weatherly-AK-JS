const axios = require ('axios');


const keyObj = require ('../src/api-key')
const key = keyObj.key

const getWeather = (city, state) => {
    let encodedAddress = encodeURIComponent(city);
    let weatherUrl = `http://api.wunderground.com/api/${key}/forecast10day/conditions/hourly/q/${state}/${encodedAddress}.json`;

    var data = axios.get (weatherUrl)
    .then ((response) => {
        if (response.data.response.error == 'querynotfound') {
            throw new Error ('Unable to find that address');
        }
        return response.data
    }).catch ((error) => {
        if (error.code == 'ENOTFOUND') console.log ('Unable to connect to API servers')
        else console.log (error.message);
    })
    return data
/* Query is dynamic based off compnent calling it
http://api.wunderground.com/api/${key}/forecast10day/conditions/hourly/q/CO/Denver.json

*/
}   

module.exports.getWeather = getWeather;