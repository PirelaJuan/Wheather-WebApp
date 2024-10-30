import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import WeatherChart from './components/WeatherChart';
import './App.css';

function App() {
  const API_KEY = 'x'; // Weatherbit API Key
  const [list, setList] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [humidity, setHumidity] = useState(50); // Default humidity value (50%)
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchAllWeatherData = async () => {
      const response = await fetch(
        "https://api.weatherbit.io/v2.0/forecast/daily?city=Miami,FL&key=" + API_KEY
      );
      const json = await response.json();
      setList(json);
      setFilteredData(json.data); // Initialize filteredData with all data
    };
    fetchAllWeatherData();
  }, []);

  const handleSearch = () => {
    if (list && list.data) {
      let filtered = list.data;

      if (filterDate !== '') {
        filtered = filtered.filter(item => item.datetime === filterDate);
      }

      filtered = filtered.filter(item => item.rh >= humidity);

      setFilteredData(filtered);
    }
  };




  return (
    <div className='App'>
      
      <div className='App-page'>
        <div className='App-row'>
          <div className='Card'>
            <h1 className='number'>
              {list && list.data && (
                list.data[0].temp + '°C'
              )}
            </h1>
            <h2>Miami, USA</h2>
          </div>
          <div className='Card'>
            <h1 className='number'>
              {list && list.data && (
                list.data[0].rh
              )}
            </h1>
            <h2>Humidity Percentage</h2>
          </div>
          <div className='Card'>
            <h3 className='number'>
              {list && list.data && (
                <img src={`https://www.weatherbit.io/static/img/icons/${list.data[0].weather.icon}.png`} alt="icon" />
              )}
            </h3>
            <h2>Forecast</h2>
          </div>
        </div>
        <div className='App-row'>
          <div className='List'>
            <div className='filter'>
              <div className='dateFilter'>
                <input
                  type="text"
                  placeholder='Enter Date'
                  value={filterDate}
                  onChange={(e) => setFilterDate(e.target.value)}
                />
              </div>
              <div className='humidityFilter'>
                <label htmlFor="">Humidity:</label>
                <input
                  type="range"
                  name='humidity'
                  min={0}
                  max={100}
                  step={1}
                  value={humidity}
                  onChange={(e) => setHumidity(e.target.value)}
                />
              </div>
              <button className='btn' onClick={handleSearch}>Search</button>
            </div>
            <div className='table'>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Temperature/Min</th>
                    <th>Temperature/Max</th>
                    <th>Humidity</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData && filteredData.length > 0 ? (
                    filteredData.slice(0, 8).map((item, index) => (
                      <tr key={index}>
                        <td>{item.datetime}</td>
                        <td>{item.min_temp} °C</td>
                        <td>{item.max_temp} °C</td>
                        <td>{item.rh}%</td>
                        <td>
                        <Link to={`/DateDetails/${index}`}>View Details</Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5">No data</td>
                    </tr>
                  )}
                </tbody>
               
              </table>

            </div>

          </div>
        </div>
        <div className="charts">
                  <h3>Average Temperature</h3>
                  {list && <WeatherChart list={list} />}
              </div>

      </div>
    </div>
  );
}

export default App;