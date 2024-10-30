import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = 'x';

function DateDetails() {
  const { index } = useParams(); 
  const numericIndex = parseInt(index, 10); 
  const [filteredData, setFilteredData] = useState([]); 

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=Miami,FL&key=${API_KEY}`
      );
      const json = await response.json();
      setFilteredData(json.data); // Initialize filteredData with all data
    };
    fetchAllWeatherData();
  }, []);

  return (
    <div>
      {filteredData && filteredData.length > 0 ? (
        filteredData.slice(numericIndex, numericIndex + 1).map((item) => (
          <div key={item.valid_date}>
            <h2>Weather Details for {item.valid_date}</h2>
            <p>Temperature: {item.temp} °C</p>
            <p>Min Temperature: {item.min_temp} °C</p>
            <p>Max Temperature: {item.max_temp} °C</p>
            <p>Humidity: {item.rh}%</p>
            <p>Description: {item.weather.description}</p>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              alt="Weather icon"
            />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DateDetails;
