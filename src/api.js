var _ = require('lodash');
var rootUrl ='api.openweathermap.org/data/2.5/weather?APPID=e7dca4192f4725c39f1399fe2694f22a';

var kelvinToF = function(kelvin) {
    return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
};

module.exports = function(latitude, longitude) {
    var url = `${rootUrl}&lat=${latitude}&lon={longitude}`;

    return fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            return {
                city: json.name,
                temperature: kelvinToF(json.main.temp),
                description: _.capitalize(json.weather[0].description)
            }
        });
};
