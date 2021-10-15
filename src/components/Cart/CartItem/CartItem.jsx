import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Dash, Plus, CartDash } from "react-bootstrap-icons";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
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
              <Button
                variant="danger"
                size="sm"
                onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
              >
                <Dash size="25" />
              </Button>

              <span className="display-5 mx-3 text-light">{item.quantity}</span>

              <Button
                variant="success"
                size="sm"
                onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
              >
                <Plus size="25" />
              </Button>
            </div>
            <Button
              variant="danger"
              className="px-3"
              onClick={() => onRemoveFromCart(item.id)}
            >
              <CartDash size="25" /> Remove
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CartItem;
