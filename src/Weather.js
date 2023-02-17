import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [temp, setTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [desc, setDesc] = useState("");
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function displayInfo(response) {
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  function inputCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apikey = "a7f9089acdb831d30158dfbfe345785f";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(displayInfo);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Type a city..."
          onChange={inputCity}
        />
        <input type="Submit" value="Search" />
        <button type="button" class="btn btn-success">
          Current location
        </button>
      </form>
      <h1 class="text-uppercase">{city}</h1>
      <ul>
        <li>FRI, 17th, February 2023</li>

        <li>{desc}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <ul>
            <li>
              <img src={icon} alt={desc} /> <span id="temperature">{temp}</span>
              <span id="units">℃</span>
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Wind: {wind}Km/h</li>
            <li>Humidity: {humidity}%</li>
          </ul>
        </div>
      </div>
      <footer>
        <div>
          <a href="https://github.com/habybheart1">Open source code</a> by
          <a href="https://www.shecodes.io">SheCodes</a>
        </div>
      </footer>
    </div>
  );
}
