import React from "react";
import Titles from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from "axios";
import "./App.css";

const key = "14a9374f357eda476d01a636a8e863d2";
class App extends React.Component {
  state = {
    temperature: null,
    temperature_celsius:null,
    city: null,
    country: null,
    humidity: null,
    description: null,
    error: null
  };
  //api

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=imperial`
    );
    const response2 = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}&units=metric`
    );
    console.log(response);
    
   console.log(response2);
   
   

    this.setState({
      temperature: Math.floor(response.data.main.temp),
      temperature_celsius: Math.floor(response2.data.main.temp),
      city: response.data.name,
      country: response.data.sys.country,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      error: "Please entere a value"
    });
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    temperature_celsius={this.state.temperature_celsius}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
