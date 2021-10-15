import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button, Stack, Col } from "react-bootstrap";
import { CartCheckFill, BagX, Basket2Fill } from "react-bootstrap-icons";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const items = cart.line_items.length;

  const EmptyCart = () => {
    return (
      <>
        <Container fluid="md">
          <Row>
            <Col sm={8}>
              <h1 className="display-3">Your cart is empty</h1>
              <p className="h5 text-muted">
                <Link to="/"> Go back to the shop </Link> and start shopping!{" "}
              </p>
            </Col>
            <Col sm={4} className="d-flex justify-content-center mt-5">
              <Basket2Fill size={255} />
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  const FullCart = () => {
    return (
      <>
        <Container fluid="md" className="mb-5">
          <Container fluid className="d-flex justify-content-between my-5">
            <Stack>
              <h1 className="mb-0">Your shopping cart: </h1>

              <p className="display-5">
                <span className="text-muted">Subtotal:</span>{" "}
                {cart.subtotal.formatted_with_symbol}
              </p>
            </Stack>
            <Stack direction="horizontal" gap={3}>
              <Button
                size="lg"
                variant="outline-danger"
                onClick={() => onEmptyCart()}
              >
                <BagX size="25" className="me-2" />
                Empty
              </Button>
              <Button size="lg" variant="outline-dark">
                <CartCheckFill size="25" className="me-2" />
                Checkout
              </Button>
            </Stack>
          </Container>
          <Row md={2} lg={3} className="g-4">
            {cart.line_items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateCartQty={onUpdateCartQty}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  };

  return items === 0 ? EmptyCart() : FullCart();
};

export default Cart;
