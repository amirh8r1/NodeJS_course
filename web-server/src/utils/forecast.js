const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=API-KEY&query=' + latitude + ',' + longitude +'&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // console.log(response.body.current)
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out.')
        }
    })
}

module.exports = forecast
