import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { CartPlus } from "react-bootstrap-icons";
const variants = ["danger", "warning"];

const ProductItem = ({ product, idx, onAddToCart }) => {
  return (
    <>
      <Col className="p-3">
        <Card bg={idx % 2 ? variants[0] : variants[1]}>
          <Card.Img
            height="200px"
            style={{ objectFit: "cover" }}
            variant="top"
            src={product.image.url}
          />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {product.description.replace(/<\/?p>/g, "")}
            </Card.Subtitle>
            <hr />
            <div className="d-flex justify-content-between">
              <h1>{product.price.formatted_with_symbol}</h1>
              <Button
                onClick={() => onAddToCart(product.id, 1)}
                variant={
                  idx % 2 ? `outline-${variants[1]}` : `outline-${variants[0]}`
                }
              >
                <CartPlus size={25} /> Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductItem;
