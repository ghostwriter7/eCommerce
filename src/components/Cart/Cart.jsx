import React from "react";
import { Container, Row, Button, Stack } from "react-bootstrap";
import { CartCheckFill, BagX } from "react-bootstrap-icons";
import CartItem from "./CartItem/CartItem";
import Loading from "../Loading/Loading";

const Cart = ({ cart, onUpdateCartQty }) => {
  console.log(cart);
  if (cart.length === 0) return <Loading />;
  if (cart.line_items === 0) {
    return (
      <Container fluid="md">
        <h1 className="display-3">Your cart is empty</h1>
        <p className="display-5 text-muted">
          Go back to the shop and start shopping!
        </p>
      </Container>
    );
  }
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
            <Button size="lg" variant="outline-danger">
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
            />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
