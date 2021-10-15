import React from "react";
import { Row, Col, Badge } from "react-bootstrap";
import { Tags } from "react-bootstrap-icons";

const Slide = ({ slide }) => {
  return (
    <Row className="d-flex justify-content-center">
      <Col
        md={5}
        className="d-flex py-5 justify-content-center align-items-center gap-5 flex-column"
      >
        <div>
          <h1 className="display-5 text-dark">
            {slide.name}
            <Badge bg="danger" className="ms-3">
              New
            </Badge>
          </h1>
          <p className="text-muted h4 mt-3">
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
      <Col
        md={4}
        className="d-flex align-items-center justify-content-center justify-content-md-start position-relative"
      >
        <Badge
          className="bg-danger px-3 shadow position-absolute d-none d-md-block"
          style={{ top: "15%", right: "20%", transform: "rotate(45deg)" }}
        >
          SALE! <Tags className="ms-3" size={20} />
        </Badge>
        <img
          className="img-fluid img-thumbnail shadow-lg h-75"
          src={slide.media.source}
          alt={slide.name}
        />
      </Col>
    </Row>
  );
};

export default Slide;
