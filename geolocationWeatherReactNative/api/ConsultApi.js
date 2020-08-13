export default async function getCurrentWeather(locationCoords) {
    
    const axios = require('axios')

    const lat = locationCoords.latitude

    const log = locationCoords.longitude 
    
    var result = []

    console.log(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=554ee5264d5587a264828eaa828daaf6`)
    
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=554ee5264d5587a264828eaa828daaf6`)
    .then( (response) => {
        const data = response.data
        const locationName = (data.sys.country = data.name)
        const temperatureMin = data.main.temp_min 
        const temperatureMax = data.main.temp_max  
        const wind = data.wind.speed
        const humidity = data.main.humidity
        const currentTemperature = data.main.temp

        result = [currentTemperature, temperatureMin, temperatureMax, locationName, wind, humidity]

        //current, min, max, location, wind, humidity

    } )
    .catch((error) => {
        console.log(error)
    })

    return result
}