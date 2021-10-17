import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { House } from "react-bootstrap-icons";

const Confirmation = ({ order }) => {
  return (
    <>
      <Container fluid="md">
        <h1 className="display-5 mb-5">{`Thank you for your purchase,
         ${order.customer.firstname} ${order.customer.lastname}`}</h1>
        <h3>{`Order ref: ${order.customer_reference}`}</h3>
        <p className="lead">{`A confirmation email has been sent to ${order.customer.email}`}</p>
        <Link to="/" className="text-danger">
          <House className="me-2" size={25} /> Go back to home
        </Link>
      </Container>
    </>
  );
};

export default Confirmation;
