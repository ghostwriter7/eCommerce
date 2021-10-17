import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Bug } from "react-bootstrap-icons";

const Error = ({ error }) => {
  console.log(error);
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col md={4}>
            <Bug className="text-danger ms-5" size={150} />
          </Col>
          <Col>
            <h1 className="display-5">Oops, something went wrong!</h1>
            <p className="lead text-danger">{`Error: ${error.data.error.message}`}</p>

            <Link to="/" className="text-danger">
              Try again later
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Error;
