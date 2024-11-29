import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { main, weather, wind, name } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Condition: {weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} km/h</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
    </div>
  );
};

export default WeatherCard;
