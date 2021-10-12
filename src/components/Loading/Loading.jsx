import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center vh-100"
      >
        <h1 className="display-2">Loading...</h1>
        <Spinner animation="border" variant="success" />
      </Container>
    </>
  );
};

export default Loading;
