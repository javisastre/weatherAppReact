import React, { useState, useEffect } from "react";

const api = {
  key: "0c85f5856ac69992b41e85a1abd59f05",
  base: "https://api.openweathermap.org/data/2.5/",
};

const dateBuilder = (d) => {
  const months = [
    "Gener",
    "Febrer",
    "Març",
    "Abril",
    "Maig",
    "Juny",
    "Juliol",
    "Agost",
    "Septembre",
    "Octubre",
    "Novembre",
    "Desembre",
  ];
  const days = [
    "Diumenge",
    "Dilluns",
    "Dimarts",
    "Dimecres",
    "Dijous",
    "Divendres",
    "Dissabte",
  ];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date} de ${month} de ${year}`;
};

const catDictionary = {
  "clear sky": "Cel serè",
  "few clouds": "Alguns núvols",
  "scattered clouds": "Ennuvolat",
  "broken clouds": "Molt ennuvolat",
  "shower rain": "Pluja",
  "rain": "Xàfec",
  "thunderstorm": "Tempesta",
  "snow": "Neu",
  "mist": "Boira",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [info, setInfo] = useState({});
  const defaultCity = "Barcelona";

  useEffect(() => requestInfo(defaultCity), []);

  const requestInfo = (city) => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setInfo(result);
        setQuery("");
      })
      .catch((err) => console.log(err));
  };

  const search = (e) => {
    if (e.key === "Enter") requestInfo(query);
  };

  return (
    <div className='App'>
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Cercar...'
            onChange={(event) => setQuery(event.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className='location-box'>
          {info.weather ? (
            <div className='location'>{info.name}</div>
          ) : (
            <div className='location'>Sense dades</div>
          )}
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        {info.weather ? (
          <div className='weather-box'>
            <div className='esquerra'>
              <div className='other'>
                Percepció: {Math.round(info.main.feels_like)}ºC
              </div>
              <div className='other'>Humitat: 89%</div>
              <div className='other'>Precipitació: 2mm</div>
            </div>
            <div className='dreta'>
              <div className='symbol'>
                <img
                  src={`https://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`}
                  alt='weather symbol'
                />
              </div>
              <div className='sky-status'>
                {catDictionary[info.weather[0].description]}
              </div>
              <div className='temp'>{Math.round(info.main.temp)}ºC</div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
};

export default App;
