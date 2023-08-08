<template>
  <div>
    <h1>{{props.city.name}}</h1>
    <div class="weather-temp" v-if="props.city.weatherData && props.city.weatherData.main">
      <div class="current-temp">
        <img :src="`https://openweathermap.org/img/wn/${props.city.weatherData.weather[0].icon}@2x.png`">
        <span >
              {{Math.round(props.city.weatherData.main.temp)}}° С
            </span>
      </div>
      <div>
        <b>
          <span>Feels like {{Math.round(props.city.weatherData.main.feels_like)}}° С</span>
          <span>&nbsp;{{props.city.weatherData.weather[0].description}}</span>
        </b>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  city: Object
})
</script>




<style scoped>

</style>