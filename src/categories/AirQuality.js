import React from 'react';

function AirQuality() {
  return (
    <div>
      <h2>Air Quality</h2>
      <p>Air Quality Index (AQI) is a tool used to communicate how polluted the air is currently or how polluted it is forecast to become.</p>
      <h3>Key Points:</h3>
      <ul>
        <li>AQI typically ranges from 0 to 500, with higher values indicating worse air quality.</li>
        <li>Main pollutants measured: ground-level ozone, particle pollution, carbon monoxide, sulfur dioxide, and nitrogen dioxide.</li>
        <li>AQI is divided into six categories, each corresponding to a different level of health concern.</li>
      </ul>
      <h3>AQI Categories:</h3>
      <ol>
        <li>0-50 (Green): Good</li>
        <li>51-100 (Yellow): Moderate</li>
        <li>101-150 (Orange): Unhealthy for Sensitive Groups</li>
        <li>151-200 (Red): Unhealthy</li>
        <li>201-300 (Purple): Very Unhealthy</li>
        <li>301-500 (Maroon): Hazardous</li>
      </ol>
      <p>Air quality has significant impacts on public health, the environment, and the economy. Improving air quality is crucial for sustainable development and combating climate change.</p>
    </div>
  );
}

export default AirQuality;