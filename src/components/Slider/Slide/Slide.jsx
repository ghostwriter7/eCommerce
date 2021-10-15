import React from "react";
import { Row, Col, Badge } from "react-bootstrap";

const Slide = ({ slide }) => {
  return (
    <Row className="d-flex justify-content-center">
      <Col
        md={5}
        className="d-flex py-5 justify-content-center align-items-center gap-5 flex-column"
      >
        <div>
          <h1 className="display-4 text-light">
            {slide.name}
            <Badge bg="danger" className="ms-3">
              New
            </Badge>
          </h1>
          <p className="text-muted h3 mt-3">
            {slide.description.replace(/<\/?p>/g, "")}
          </p>
        </div>

        <div className="d-flex  align-items-center gap-3">
          <h3>
            <Badge className="bg-secondary font-weight-bold">
              <s>{`$${slide.price.raw * 3}`}</s>
            </Badge>
          </h3>
          <h1 className="display-3">
            <Badge className="bg-danger">
              {slide.price.formatted_with_symbol}
            </Badge>
          </h1>
        </div>
      </Col>
      <Col md={4} className="d-flex align-items-center ">
        <img
          className="img-fluid img-thumbnail shadow-lg"
          style={{ height: "75%" }}
          src={slide.media.source}
          alt={slide.name}
        />
      </Col>
    </Row>
  );
};

export default Slide;
