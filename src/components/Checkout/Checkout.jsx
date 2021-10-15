import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import { Container, Row, Col, Form } from "react-bootstrap";
import { commerce } from "../../lib/commerce";

const Checkout = ({ cart }) => {
  const [checkoutToken, setCheckoutToken] = useState({});
  const [loading, setLoading] = useState(true);

  //INPUTS
  const [firstName, setFirstName] = useState("Joe");
  const [lastName, setLastName] = useState("Danny");
  const [email, setEmail] = useState("joedanny@gmail.com");
  const [shippingName, setShippingName] = useState("Joe Danny");
  const [shippingStreet, setShippingStreet] = useState("123 Fake Str");
  const [shippingCity, setShippingCity] = useState("San Francisco");
  const [shippingProvince, setShippingProvince] = useState("CA");
  const [shippingZipCode, setShippingZipCode] = useState("93821");
  const [shippingCountry, setShippingCountry] = useState("US");
  const [cardNum, setCardNum] = useState("4242 4242 4242 4242");
  const [expMonth, setExpMonth] = useState("11");
  const [expYear, setExpYear] = useState("2023");
  const [ccv, setCcv] = useState("123");
  const [billingZipCode, setBillingZipCode] = useState("93821");
  const [shippingCountries, setShippingCountries] = useState({});
  const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const generateCheckoutToken = async () => {
    if (cart.line_items.length) {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        setLoading(false);
        console.log(token);
      } catch (error) {
        console.log("Error occured while generating checkout token", error);
      }
    }
  };

  useEffect(() => {
    generateCheckoutToken();
  }, []);
  return loading ? (
    <Loading />
  ) : (
    <Container fluid="md">
      <Form>
        <Row sm={1} md={2}>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="firstName">First name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="lastName">Last name</Form.Label>
              <Form.Control
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your last name"
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Checkout;
