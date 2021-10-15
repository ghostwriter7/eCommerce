import React from "react";
import { Navbar, Container, Button, Badge, Stack, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Asterisk, Cart } from "react-bootstrap-icons";

const NavbarComponent = ({ totalItems }) => {
  return (
    <>
      <Navbar bg="dark" className="fixed-top py-3 px-3" expand="md">
        <Container fluid="md">
          <Link to="/">
            <Navbar.Brand className="text-light">
              <Asterisk /> Our cool logo
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
              <Link to="/cart">
                <Button variant="light" size="lg">
                  <Cart size={25} className="me-3" />
                  <Badge bg="danger">{totalItems}</Badge>
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
