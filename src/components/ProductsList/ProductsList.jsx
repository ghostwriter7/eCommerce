import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem/ProductItem";

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <>
      <Container fluid="md">
        <div className="flex-column align-items-end d-none d-md-flex">
          <p className="text-muted h5 mb-0">Latest Collection</p>
          <h1 className="display-5">Highest quality</h1>
        </div>
        <Row xs={1} sm={2} lg={3}>
          {products.map((product, idx) => (
            <ProductItem
              product={product}
              idx={idx}
              key={product.id}
              onAddToCart={onAddToCart}
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
