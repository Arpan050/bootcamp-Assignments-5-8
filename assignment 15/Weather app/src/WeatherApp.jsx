import { useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "f9c5b1dec07d03764bbb307459a9fea2"; // 🔑 Replace with your API key

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setData(res.data);
      setError("");
    } catch (err) {
      setError("City not found");
      setData(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App 🌤️</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {error && <p>{error}</p>}

      {data && (
        <div className="weather-box">
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
          <p>🌡️ {data.main.temp} °C</p>
          <p>💧 Humidity: {data.main.humidity}%</p>
          <p>🌬️ Wind: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
