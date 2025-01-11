const axios = require("axios")

let config = {
    method: "get",
   url: "https://api.open-meteo.com/v1/forecast?latitude=55.0339&longitude=82.9719&hourly=temperature_2m,weather_code,wind_speed_10m&wind_speed_unit=ms&timezone=auto&forecast_days=1"
   
};

async function WeatherDate() {
    const response = await axios.request(config)
    const res = response.data
    const js = JSON.stringify(res)
    return js
}
//WeatherDate().then(res => console.log(res))


module.exports.WeatherDate = WeatherDate()