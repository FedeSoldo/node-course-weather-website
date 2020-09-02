const request = require('postman-request')


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiZmVkZXJpY29zb2xkbyIsImEiOiJja2VkbzRnYjcwMnd5MnJvejQzeXI1czhiIn0.eJMIV79kqym7pOhyYUOAyA&limit=1"
    request( { url, json:true }, (error, response, body) => {
        try {
            if (body.features.length !== 0) {
                callback(undefined, {
                    latitude: body.features[0].center[0],
                    longitude: body.features[0].center[1],
                    location: body.features[0].place_name,
                })
            } else {
                callback("Invalid parameters for geocoding app", undefined)
            }
        } catch (error) {
            callback("Unable to connect to the geocoding app", undefined)
        }
    })
}

module.exports = geocode