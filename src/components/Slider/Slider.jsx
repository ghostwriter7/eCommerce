import React from "react";
import { Container, Carousel, Badge } from "react-bootstrap";
import { Tags } from "react-bootstrap-icons";
import Slide from "./Slide/Slide";

const Slider = ({ products }) => {
  const slides = [products[0], products[3], products[9]];

  return (
    <>
      <Container className="mt-5">
        <div className="d-flex justify-content-between">
          <h1 className="mx-auto mx-md-0">
            <Badge className="bg-danger px-5 py-3 shadow">
              SALE! <Tags className="ms-3" size={40} />
            </Badge>
          </h1>
          <div className="flex-column align-items-end d-none d-md-flex">
            <p className="text-muted h5 mb-0">Check out</p>
            <h1 className="display-5">Our best products</h1>
          </div>
        </div>
        <Carousel variant="dark" className="w-100 py-3">
          <Carousel.Item interval={3000}>
            <Slide slide={slides[0]} />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Slide slide={slides[1]} />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <Slide slide={slides[2]} />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Slider;
