import React from "react";
import { Navbar, Container, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Asterisk, Cart } from "react-bootstrap-icons";

const NavbarComponent = ({ totalItems }) => {
  return (
    <>
      <Navbar bg="dark" className="fixed-top">
        <Container fluid="md">
          <Link to="/">
            <Navbar.Brand className="text-light">
              <Asterisk /> Our cool logo
            </Navbar.Brand>
          </Link>
          <Link to="/cart">
            <Button variant="light" size="lg">
              <Cart size={25} className="me-3" />
              <Badge bg="danger">{totalItems}</Badge>
            </Button>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
