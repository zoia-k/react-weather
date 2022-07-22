import React from 'react';
import './Forecast.css';
export default function Forecast() {
  return (
    <div className='Forecast'>
      <h2 class='forecast-header'>Weather forecast for the coming days</h2>
      <div class='forecast-block'>
        <p class='forecast-day'>
          <strong>Monday</strong>
        </p>
        <p class='forecast-icon'>🌞</p>
        <p class='forecast-tmp'>23°C</p>
        <p class='forecast-wind'>💨 4 km/h</p>
        <p class='forecast-hum'>💧12%</p>
      </div>
    </div>
  );
}
