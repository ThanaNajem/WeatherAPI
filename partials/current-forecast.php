<!-- Start current and future forecast -->
<main id="forecast-result" class="container text-center d-none ">
   <div class="card p-4" style="margin : 0 auto; max-width:  320px;">
      <h2>Current Forecast</h2>
      <span class="display-2 mb-3"><img  id="pathOfImageFromProvidedAPI" alt="Icon depicting current weather" /></span>
      <label for="SummeryWeatherReport" class="d-inline">Summery weather report:</label>
      <p class="lead" id="SummeryWeatherReport"></p>
      <label for="windSpeed"  class="d-inline">Wind speed:</label> 
      <p class="lead" id="windSpeed" ></p>
      <label for="TemperatureWeatherReport" class="d-inline">Temperature:</label> 
      <p class="lead" id="TemperatureWeatherReport"></p>
      <label for="humidity" class="d-inline">Humidity:</label> 
      <h4 id="humidity"></h4>
   </div>
   <ul class="list-group d-flex justify-content-between " id="future_forecast"  style="margin : 0 auto; max-width:  320px;    list-style-type:none;"> </ul>
</main>
<div class="d-none" id="currentForecastNotFound"></div>
<!-- End current and future forecast -->