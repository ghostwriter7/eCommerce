import React from "react";
import { Table } from "react-bootstrap";

const OrderSummary = ({ cart }) => {
  return (
    <>
      <h1>Order summary</h1>
      <Table striped hover bordered className="mb-5 mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.line_items.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.formatted_with_symbol}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default OrderSummary;
