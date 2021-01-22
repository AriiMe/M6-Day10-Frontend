/** @format */

import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import "./home.css";

import Listproduct from "./Listproduct";
import "./product.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Container fluid className=" px-0">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-NDY4MDlmYmEt-w1500._CB412282544_.jpg"
            style={{ height: "900px", width: "100%" }}
            alt="home image"
          ></img>

          <Row className="d-flex justify-content-around">
            <Listproduct props={this.props} product={this.props.product} />
          </Row>

          <div className="home_row"></div>
        </Container>
      </div>
    );
  }
}
