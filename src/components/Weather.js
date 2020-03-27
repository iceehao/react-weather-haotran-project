import React from "react";

const Weather = props => {
  return (
    <div className="weather__info">
      {props.city && props.country && (
        <p className="weather__key">
          Location:
          <span className="weather__value">
            {props.city}, {props.country}
          </span>
        </p>
      )}
      {props.temperature && (
        <p className="weather__key">
          {" "}
          Temperature:{" "}
      <span className="weather__value">{props.temperature}°F|{props.temperature_celsius}°C</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          {" "}
          Humidity: <span className="weather__value">{props.humidity}%</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          {" "}
          Conditions:{" "}
          <span className="weather__value">{props.description}</span>
        </p>
      )}
    </div>
  );
};

export default Weather;

//°F|°C
