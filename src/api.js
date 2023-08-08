export async function getWeatherData(lat, lot){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&exclude=current&units=metric&appid=b2bcef1b83f8b44be62163b5f7bf64da`)
    let weatherData = await response.json()
    return weatherData
}

export async function getGeoCoords(city){
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=b2bcef1b83f8b44be62163b5f7bf64da`)
    let coords = await response.json()
    return coords
}

export default {
    getGeoCoords,
    getWeatherData
}