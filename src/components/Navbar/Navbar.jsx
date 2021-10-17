import React from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Container,
  Button,
  Badge,
  Nav,
  Col,
  Row,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Asterisk, Cart } from "react-bootstrap-icons";

const NavbarComponent = ({ totalItems }) => {
  const location = useLocation();
  return (
    <>
      <Navbar
        bg="dark"
        className="fixed-top py-3 px-3"
        expand="md"
        style={{ minHeight: "75px" }}
      >
        <Container fluid="md">
          <Link to="/">
            <Navbar.Brand className="text-light">
              <Cart className="me-1 text-danger" />
              <span className="h5">JackieStore</span>
              <small className="text-uppercase text-danger"> Hand-made</small>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center gap-4">
              <Link to="/shop" className="text-light">
                Shop
              </Link>
              {location.pathname === "/" || location.pathname === "/shop" ? (
                <Link to="/cart">
                  <Button variant="light">
                    <Cart size={25} className="me-3" />
                    <Badge bg="danger">{totalItems}</Badge>
                  </Button>
                </Link>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
