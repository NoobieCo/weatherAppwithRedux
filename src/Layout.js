import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Layout.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      city: "",
      country: ""
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
  };

  render() {
    return (
      <Container className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            City:
            <input
              type="text"
              name="city"
              style={{ marginRight: "15px" }}
              onChange={this.handleChange}
              value={this.state.city}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              name="country"
              style={{ marginRight: "15px" }}
              onChange={this.handleChange}
              value={this.state.country}
            />
          </label>
          <Button variant="primary" type="submit">
            <span>
              <i className="fal fa-search" />
            </span>
            Search
          </Button>
        </form>
      </Container>
    );
  }
}

export default Layout;
