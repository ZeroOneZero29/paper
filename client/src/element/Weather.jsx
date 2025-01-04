import "../css/Weather.css"

export default function Weather() {
  return (
    <div className="weather">
      <div className="weather-container">
        <p className="weater_title">Погода</p>
        <div className="weater_card-container">
          <div className="weater_card">
            <p id="time-of-day" className="time-of-day">
              Утро
            </p>
            <p id="status-weather" className="status-weather">
              Пасмурно
            </p>
            <p id="status-degrees" className="status-degrees">
              -5℃
            </p>
          </div>
          <div className="weater_card">
            <p id="time-of-day" className="time-of-day">
              Утро
            </p>
            <p id="status-weather" className="status-weather">
              Пасмурно
            </p>
            <p id="status-degrees" className="status-degrees">
              -5℃
            </p>
          </div>
          <div className="weater_card">
            <p id="time-of-day" className="time-of-day">
              Утро
            </p>
            <p id="status-weather" className="status-weather">
              Пасмурно
            </p>
            <p id="status-degrees" className="status-degrees">
              -5℃
            </p>
          </div>
          <div className="weater_card">
            <p id="time-of-day" className="time-of-day">
              Утро
            </p>
            <p id="status-weather" className="status-weather">
              Пасмурно
            </p>
            <p id="status-degrees" className="status-degrees">
              -5℃
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
