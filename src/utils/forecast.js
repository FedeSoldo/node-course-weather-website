const request = require('postman-request')


const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=e5804d390cd831db2a6483cc2fd180a5&query=" + latitude + "," + longitude
    request( { url, json:true }, (error, response, body) => {
        try {
            if (!body.error) {
                callback(undefined, {
                    description: body.current.weather_descriptions[0],
                    temperature: body.current.temperature,
                    feelslike: body.current.feelslike
                })
            } else {
                callback("Invalid parameters for weather app", undefined)
            }
        } catch (error) {
            callback("Unable to connect to the weather app", undefined)
        }
    })
}

module.exports = forecast