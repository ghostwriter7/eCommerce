import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "./ProductItem/ProductItem";

const ProductsList = ({ products, onAddToCart }) => {
  return (
    <>
      <Container fluid="md">
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
