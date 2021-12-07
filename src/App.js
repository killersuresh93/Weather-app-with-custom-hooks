import React, { useState } from 'react';
import useFetch from './useFetch';
import useDate from './useDate';
import './style.css';

export default function App() {
  const [city, setCity] = useState('visakhapatnam');

  const api = {
    key: '3a0d860cdb1c4401ab2638196804f9c4',
    base: 'https://api.openweathermap.org/data/2.5/',
  };
  const url = `${api.base}weather?q=${city}&units=metric&appid=${api.key}`;

  /*Custom hooks*/

  const [result, error] = useFetch(url, city);
  const [date, day, month, year] = useDate(new Date());

  console.log('error___app' + error);

  return (
    <>
      <div className="container maincard text-center">
        <h1>
          <i class="fas fa-bolt"></i> Weather
        </h1>
        <div className="container text-center">
          <form onClick={() => setCity('')}>
            <input
              className="form-control"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
          <div>
            {' '}
            <h4>
              {date} {day} {month} {year}
            </h4>
          </div>
        </div>
        {typeof result?.main != 'undefined' ? (
          <div className="tempcard">
            <h1 className="temp">
              <i
                class={
                  result.main.temp > 18
                    ? 'fas fa-temperature-high'
                    : 'fas fa-snowflake'
                }
              ></i>
              {Math.round(result.main.temp)}°C
            </h1>
            <h1>
              <i class="fas fa-city"></i> {result.name},
              <i class="fas fa-flag"></i>
              {result.sys.country}
            </h1>

            <h1>
              {result?.weather[0].main != 'Clouds' ? (
                ''
              ) : (
                <i class="fas fa-cloud"></i>
              )}
              {result?.weather[0].main != 'Mist' ? (
                ''
              ) : (
                <i class="fas fa-cloud-meatball"></i>
              )}
              {result?.weather[0].main != 'Clear' ? (
                ''
              ) : (
                <i class="fas fa-sun"></i>
              )}
              {result?.weather[0].main != 'Rain' ? (
                ''
              ) : (
                <i class="fas fa-cloud-showers-heavy"></i>
              )}
              {result?.weather[0].main != 'Haze' ? (
                ''
              ) : (
                <i class="fas fa-smog"></i>
              )}
              {result.weather[0].main}
            </h1>
          </div>
        ) : (
          <h1>
            {typeof error != 'appReferenceError: consolo is not defined'
              ? 'Please check city name'
              : ''}
          </h1>
        )}
      </div>
      <div id="clouds">
        <div class="cloud x1"></div>
        <div class="cloud x2"></div>
        <div class="cloud x3"></div>
        <div class="cloud x4"></div>
        <div class="cloud x5"></div>
      </div>
    </>
  );
}
