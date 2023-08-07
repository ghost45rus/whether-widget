<template>
  <div>
    <h1>VUE</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    // "lon": ,
    //     "lat": 51.5085

    this.axios.get('https://api.ipify.org?format=json')
    // http://ip-api.com/json/24.48.0.1
    if ("geolocation" in navigator) {
      /* местоположение доступно */
      navigator.geolocation.getCurrentPosition((r) => {
        console.log(r)
        this.axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${r.coords.latitude}&lon=${r.coords.longitude}&exclude=daily&units=metric&appid=b2bcef1b83f8b44be62163b5f7bf64da`).then(response => {
          let data = response.data
          console.log(data)
          console.log('City: ', data.name)
          console.log('Visibility: ', data.visibility)
          console.log(`Wind: deg:${data.wind.deg} gust: ${data.wind.gust} speed: ${data.wind.speed}`)
          console.log(`Weather: ${data.weather[0].description}`)
          console.log(`feels_like: ${data.main.feels_like} humidity: ${data.main.humidity} pressure: ${data.main.pressure} temp: ${data.main.temp} ` )
        })
      } )

    } else {
      /* местоположение НЕ доступно */
    }

  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
