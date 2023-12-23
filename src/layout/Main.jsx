import React from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import LeftNav from "../shared/LeftNav";
import RightNav from "../shared/RightNav";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />

      <Row>
        <Col lg={3}><LeftNav /></Col>
        <Col lg={6}><Outlet /></Col>
        <Col lg={3}><RightNav /></Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Main;
