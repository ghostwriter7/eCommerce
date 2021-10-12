import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CartDash, Plus, Dash } from "react-bootstrap-icons";
import Loading from "../Loading/Loading";

const Cart = ({ cart }) => {
  const items = cart.line_items;
  console.log(items);
  if (items === 0)
    return (
      <Container fluid="md">
        <h1 className="display-3">Your cart is empty</h1>
        <p className="display-5 text-muted">
          Go back to the shop and start shopping!
        </p>
      </Container>
    );

  return !items ? (
    <Loading />
  ) : (
    <>
      <Container fluid="md">
        <Row md={2} lg={3} className="g-4">
          {items.map((item) => (
            <Col key={item.id}>
              <Card bg="dark">
                <Card.Img
                  src={item.media.source}
                  style={{ objectFit: "cover" }}
                  height="200px"
                />
                <Card.Body>
                  <Card.Title className="text-light">{item.name}</Card.Title>
                  <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                      <Button variant="danger" size="sm">
                        <Dash size="25" />
                      </Button>

                      <span className="display-5 mx-3 text-light">
                        {item.quantity}
                      </span>

                      <Button variant="success" size="sm">
                        <Plus size="25" />
                      </Button>
                    </div>
                    <Button variant="danger" className="px-3">
                      <CartDash size="25" /> Remove
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
