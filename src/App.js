import React, { useState } from "react";

const api = {
  key: "0c85f5856ac69992b41e85a1abd59f05",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  // const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
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
          <div className='location'>Barcelona, Catalunya</div>
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>
        <div className='weather-box'>
          <div className='symbol'>Symbol</div>
          <div className='temp'>Temperatura: 15ºC</div>
          <div className='feel-temp'>Percepció: 19ºC</div>
          <div className='humidity'>Humitat: 89%</div>
          <div className='rain'>Precipitació: 2mm</div>
        </div>
      </main>
    </div>
  );
};

export default App;
