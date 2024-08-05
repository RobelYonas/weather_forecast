import { useState, useEffect } from "react";
import React from "react";
import temprature from "./component/temprature/temprature";

export default function weather() {
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (!navigator.geolocation) {
      SpeechSynthesisErrorEvent("Geolocation is not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(`Error: ${error.message}`);
      }
    );

    fetch(
      `api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`
    ).then((response) => {
      if(!response.ok) {
        throw error("Could not access api")
      }
      return response.json()
    })
    .then((data) => {
      setWeather(data)
    })
    .catch((error) => {
      setError(`Error: ${error.message}`)
    })
  }, []);

  return (
    <div>
      <div className="search_section"></div>
      <div className="weather_display">
        <div className="left"></div>
        <temprature />
        <div className="right"></div>
      </div>
    </div>
  );
}
