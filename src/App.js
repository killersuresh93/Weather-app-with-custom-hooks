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

  //Custom hooks
  const [result, error, isLoding] = useFetch(url);
  const [date, day, month, year] = useDate(new Date());

  const weatherData = result?.main;
  const temp = Math.round(weatherData?.temp);
  const country = result?.sys?.country;
  const place = result?.name;

  //weatherCondition
  const weatherCondition = () => {
    if (typeof weatherData != 'undefined') {
      const weather = result?.weather[0]?.main;
      return weather;
    }
  };

  //css class object
  const weatherClass = {
    Clouds: 'fas fa-cloud',
    Mist: 'fas fa-cloud-meatball',
    Clear: 'fas fa-sun',
    Rain: 'fas fa-cloud-showers-heavy',
    Haze: 'fas fa-smog',
    Snow: 'fas fa-snowflake',
    Drizzle: 'fas fa-cloud-rain',
    Smoke: 'fas fa-smog',
  };

  console.log('weatherCondition' + weatherCondition());
  console.log('result' + result);

  // console.log('kk=-=-=', weather_class[result?.weather[0].main]);
  return (
    <>
      <div className="container maincard text-center">
        <h1>
          <i className="fas fa-bolt"></i> Weather
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
        {typeof weatherData != 'undefined' ? (
          <div className="tempcard">
            <h1>{isLoding && '...Loding'}</h1>
            <div className="temp-div">
              <h1 className="temp">
                <i
                  className={
                    temp > 18 ? 'fas fa-temperature-high' : 'fas fa-snowflake'
                  }
                ></i>
                {temp}°C
              </h1>
            </div>
            <h1>
              <i className="fas fa-city"></i> {place},
              <i className="fas fa-flag"></i>
              {country}
            </h1>

            <h1>
              {result?.weather[0].main && (
                <i className={weatherClass[weatherCondition()]}></i>
              )}
              {weatherCondition()}
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
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
    </>
  );
}
