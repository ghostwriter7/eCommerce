import React from "react";
import { Col, Form } from "react-bootstrap";

const FormInput = ({ value, type, id, placeholder, onChange, label }) => {
  return (
    <Col>
      <Form.Group className="mb-3">
        <Form.Label htmlFor={id}>{label}</Form.Label>
        <Form.Control
          name={id}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      </Form.Group>
    </Col>
  );
};

export default FormInput;
