import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./Layout.css";
import Weather from "./WeatherComponent";

import Button from "react-bootstrap/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_KEY = "f017521ba6ec7948363773a692b42115";
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: "",
      isShow: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      isShow: true
    });
    this.getWeatherData();
  };

  handleReset = () => {
    this.setState({
      city: "",
      country: "",
      temp_min: "",
      temp_max: "",
      despriction: "",
      temp: "",
      
      isShow: false
    });
  };

  getWeatherData = async () => {
    const country = this.state.country;
    const city = this.state.city;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const response = await api_call.json();
    console.log(response);
  };

  render() {
    return (
      <Container className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-3 py-2">
              <input
                type="text"
                name="city"
                className="form-control"
                placeholder="City Name"
                onChange={this.handleChange}
                value={this.state.city}
              />
            </div>
            <div className="col-md-3 py-2">
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Country Name"
                onChange={this.handleChange}
                value={this.state.country}
              />
            </div>
            <div className="col-md-2 py-2">
              <Button
                type="submit"
                className="btn btn-primary"
                style={{ width: 100 }}
              >
                <FontAwesomeIcon icon={faSearch} transform="left-4" />
                Search
              </Button>
            </div>
            <div className="col-md-2 py-2">
              <Button
                className="btn btn-primary"
                type="reset"
                style={{ width: 100 }}
                onClick={this.handleReset}
              >
                Reset
              </Button>
            </div>
          </div>
        </form>
        {this.state.isShow ? (
          <Weather city={this.state.city} country={this.state.country} />
        ) : (
          <></>
        )}
      </Container>
    );
  }
}

export default Layout;
