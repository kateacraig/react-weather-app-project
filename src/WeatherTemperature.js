import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature text">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F|{" "}
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature text">
        <span className="temperature">
          {Math.round(((props.fahrenheit - 32) * 5) / 9)}
        </span>
        <span className="unit">
          °C|{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
