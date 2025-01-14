import { useEffect, useState } from "react";
import "../css/Weather.css";

export default function Weather() {
  const morning = 7;
  const day = 13;
  const evening = 19;
  const night = 23;

  const [weather, setWeather] = useState([]);
  const [ready, isReady] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/weather", {
      method: "get",
    })
      .then((response) => response.json())
      .then((result) => getWeaterDate(result))
      .catch((error) => console.log(error));
  }, []);

  function getWeaterDate(res) {
    setWeather(res);
    isReady(true);
  }

  useEffect(() => {
    if (ready) {
      console.log(weather.hourly.temperature_2m[day]);
    }
  }, [ready]);

  console.log(weather);
  
  function returnIconWeather(status_code) {
    switch (status_code) {
      case 0:
        return <img src="../icon/01.png" alt="" />;
        break;
      case 1:
        return <img src="../icon/01.png" alt="" />;
        break;
      case 2:
        return <img src="../icon/02.png" alt="" />;
        break;
      case 3:
        return <img src="../icon/03.png" alt="" />;
        break;
      case 61:
        return <img src="../icon/61.png" alt="" />;
        break;
      case 63:
        return <img src="../icon/63.png" alt="" />;
        break;
      case 65:
        return <img src="../icon/65.png" alt="" />;
        break;
      case 71:
        return <img src="../icon/71.png" alt="" />;
        break;
      case 73:
        return <img src="../icon/71.png" alt="" />;
        break;
      case 75:
        return <img src="../icon/75.png" alt="" />;
        break;
    }
  }

  
  if (ready) {
    return (
      <div className="weather">
        <div className="weather-container">
          <p className="weater_title">Погода</p>
          <div className="weater_card-container">
            <div className="weater_card">
              <p id="time-of-day" className="time-of-day">
                Утро
              </p>
              <p id="status-degrees" className="status-degrees">
                {weather.hourly.temperature_2m[morning]}℃
              </p>
              <div id="status-weather" className="status-weather">
                {returnIconWeather(weather.hourly.weather_code[morning])}
              </div>
            </div>
            <div className="weater_card">
              <p id="time-of-day" className="time-of-day">
                День
              </p>
              <p id="status-degrees" className="status-degrees">
                {weather.hourly.temperature_2m[day]}℃
              </p>
              <p id="status-weather" className="status-weather">
                {returnIconWeather(weather.hourly.weather_code[day])}
              </p>
            </div>
            <div className="weater_card">
              <p id="time-of-day" className="time-of-day">
                Вечер
              </p>
              <p id="status-degrees" className="status-degrees">
                {weather.hourly.temperature_2m[evening]}℃
              </p>
              <p id="status-weather" className="status-weather">
                {returnIconWeather(weather.hourly.weather_code[evening])}
              </p>
            </div>
            <div className="weater_card">
              <p id="time-of-day" className="time-of-day">
                Ночь
              </p>
              <p id="status-degrees" className="status-degrees">
                {weather.hourly.temperature_2m[night]}℃
              </p>
              <p id="status-weather" className="status-weather">
                {returnIconWeather(weather.hourly.weather_code[night])}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
