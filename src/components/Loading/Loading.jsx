import React from "react";
import { Container, Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center vh-75"
      >
        <h1 className="display-5 text-uppercase">Loading...</h1>
        <Spinner animation="border" variant="danger" />
      </Container>
    </>
  );
};

export default Loading;
