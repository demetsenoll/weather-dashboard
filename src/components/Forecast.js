import React from 'react';

function Forecast({ data }) {
  // Get one forecast per day (every 8th item = 24 hours)
  const dailyForecasts = data.list.filter((item, index) => index % 8 === 0).slice(0, 5);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="forecast">
      <h3>📊 5-Day Forecast</h3>
      <div className="forecast-container">
        {dailyForecasts.map((day, index) => {
          const iconUrl = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
          
          return (
            <div key={index} className="forecast-item">
              <p className="forecast-date">{formatDate(day.dt)}</p>
              <img src={iconUrl} alt={day.weather[0].description} className="forecast-icon" />
              <p className="forecast-temp">{Math.round(day.main.temp)}°C</p>
              <p className="forecast-desc">{day.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;