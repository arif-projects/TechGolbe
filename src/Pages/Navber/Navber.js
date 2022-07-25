import React from "react";
import "./Navber.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="Transparent"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://i.ibb.co/61MwMgS/globetech-logo.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="menu">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navber;
