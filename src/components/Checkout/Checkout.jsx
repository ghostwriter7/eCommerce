import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";
import OrderSummary from "./OrderSummary";
import {
  Container,
  Row,
  Form,
  Col,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { commerce } from "../../lib/commerce";
import FormInput from "./FormInput";

const Checkout = ({ cart, onCaptureCheckout }) => {
  const [checkoutToken, setCheckoutToken] = useState({});
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  //INPUTS
  const [firstName, setFirstName] = useState("Joe");
  const [lastName, setLastName] = useState("Danny");
  const [email, setEmail] = useState("joedanny@gmail.com");
  const [shippingName, setShippingName] = useState("Joe Danny");
  const [shippingStreet, setShippingStreet] = useState("123 Fake Str");
  const [shippingCity, setShippingCity] = useState("San Francisco");
  const [shippingZipCode, setShippingZipCode] = useState("93821");
  const [cardNum, setCardNum] = useState("4242 4242 4242 4242");
  const [expMonth, setExpMonth] = useState("11");
  const [expYear, setExpYear] = useState("2023");
  const [ccv, setCcv] = useState("123");
  const [billingZipCode, setBillingZipCode] = useState("93821");
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const [sendingOrder, setSendingOrder] = useState(false);

  const generateCheckoutToken = async () => {
    if (cart.line_items.length) {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckoutToken(token);
        setLoading(false);
      } catch (error) {
        console.log("Error occured while generating checkout token", error);
      }
    }
  };

  const fetchShippingCountries = async (checkoutTokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );
      const countriesArray = [];
      Object.entries(countries).map((key) =>
        countriesArray.push({ countryCode: key[0], country: key[1] })
      );
      setShippingCountries(countriesArray);
      setShippingCountry(countriesArray[0].countryCode);
    } catch (error) {
      console.log("Error occured while fetching shipping countries", error);
    }
  };

  const fetchShippingSubdivisions = async (countryCode) => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        countryCode
      );
      const subdivisionArray = [];
      for (const [key, value] of Object.entries(subdivisions)) {
        subdivisionArray.push({ code: key, division: value });
      }
      setShippingSubdivisions(subdivisionArray);
      setShippingSubdivision(subdivisionArray[0].code);
    } catch (error) {
      console.log("Error occured while fetching subdivisions", error);
    }
  };
  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    stateProvince = null
  ) => {
    try {
      const options = await commerce.checkout.getShippingOptions(
        checkoutTokenId,
        { country: country, region: stateProvince }
      );
      const shippingOption = options[0] || null;
      setShippingOptions(options);
      setShippingOption(shippingOption);
    } catch (error) {
      console.log("Error occured while fetching shipping options", error);
    }
  };

  useEffect(() => {
    generateCheckoutToken();
  }, []);

  useEffect(() => {
    if (!checkoutToken.id) return;
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (!shippingCountry) return;
    fetchShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (!shippingCountry) return;
    fetchShippingOptions(
      checkoutToken.id,
      shippingCountry,
      shippingSubdivision
    );
  }, [shippingSubdivision]);

  const sanitizedLineItems = (lineItems) => {
    return lineItems.reduce((data, lineItem) => {
      const item = data;
      let variantData = null;
      if (lineItem.selected_options?.length) {
        variantData = {
          [lineItem.selected_options[0].group_id]:
            lineItem.selected_options[0].option_id,
        };
      }
      item[lineItem.id] = {
        quantity: lineItem.quantity,
        variants: variantData,
      };
      return item;
    }, {});
  };

  const handleCaptureCheckout = (e) => {
    e.preventDefault();
    setSendingOrder(true);
    const orderData = {
      line_items: sanitizedLineItems(cart.line_items),
      customer: {
        firstname: firstName,
        lastname: lastName,
        email: email,
      },
      shipping: {
        name: shippingName,
        street: shippingStreet,
        town_city: shippingCity,
        county_state: shippingSubdivision,
        postal_zip_code: shippingZipCode,
        country: shippingCountry,
      },
      fulfillment: {
        shipping_method: shippingOption.id,
      },
      payment: {
        gateway: "test_gateway",
        card: {
          number: cardNum,
          expiry_month: expMonth,
          expiry_year: expYear,
          cvc: ccv,
          postal_zip_code: billingZipCode,
        },
      },
    };
    onCaptureCheckout(checkoutToken.id, orderData)
      .then(() => {
        setSendingOrder(false);
        history.push("/confirmation");
      })
      .catch((error) => {
        setSendingOrder(false);
        history.push("/error");
      });
  };

  return loading ? (
    <Loading />
  ) : (
    <Container fluid="md">
      <OrderSummary cart={cart} />
      <Alert className="mb-5" variant="danger">
        <Alert.Heading>
          Hi! This form is still under construction!
        </Alert.Heading>
        <p>
          Type real e-mail if you want to receive a fake confirmation at your
          e-mail. Otherwise, submit you order and let's hope that Joe will enjoy
          the goods you've chosen.
        </p>
        <hr />
        <p className="mb-0">
          If you want an error component to be rendered, mess up with it (for
          instance, change country to US and remove last digit from ZIP Code)
        </p>
      </Alert>
      <h1 className="mb-5">Shipping & Payment</h1>
      <Form>
        <Row xs={1} sm={2}>
          <FormInput
            value={firstName}
            id="firstName"
            placeholder="Your first name"
            onChange={(e) => setFirstName(e.target.value)}
            label="First name"
            type="text"
          />
          <FormInput
            value={lastName}
            id="lastName"
            placeholder="Your last name"
            onChange={(e) => setLastName(e.target.value)}
            label="Last name"
            type="text"
          />
          <FormInput
            value={email}
            id="email"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
          />
          <FormInput
            value={shippingName}
            id="shippingName"
            placeholder="Your shipping name"
            onChange={(e) => setShippingName(e.target.value)}
            label="Shipping name"
            type="text"
          />
          <FormInput
            value={shippingStreet}
            id="shippingStreet"
            placeholder="Your shipping street"
            onChange={(e) => setShippingStreet(e.target.value)}
            label="Shipping street"
            type="text"
          />
          <FormInput
            value={shippingCity}
            id="shippingCity"
            placeholder="Your shipping city"
            onChange={(e) => setShippingCity(e.target.value)}
            label="Shipping city"
            type="text"
          />
          <FormInput
            value={shippingZipCode}
            id="shippingZipCode"
            placeholder="Your shipping ZIP code"
            onChange={(e) => setShippingZipCode(e.target.value)}
            label="Shipping ZIP code"
            type="text"
          />

          <FormInput
            value={billingZipCode}
            id="billingZipCode"
            placeholder="Billing ZIP code"
            onChange={(e) => setBillingZipCode(e.target.value)}
            label="Billing ZIP code"
            type="text"
          />
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="countries">Country</Form.Label>
              <Form.Select
                id="countries"
                aria-label="Selection of shipping countries"
                onChange={(e) => setShippingCountry(e.target.value)}
                value={shippingCountry}
              >
                {shippingCountries.map((country, index) => (
                  <option key={index} value={country.countryCode}>
                    {country.country}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="subdivisions">Subdivisions</Form.Label>
              <Form.Select
                id="subdivisions"
                aria-label="Selection of shipping subdivisions"
                onChange={(e) => setShippingSubdivision(e.target.value)}
                value={shippingSubdivision}
              >
                {shippingSubdivisions.map((subdivision, index) => (
                  <option key={index} value={subdivision.code}>
                    {subdivision.division}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="options">Options</Form.Label>
              <Form.Select
                id="options"
                aria-label="Selection of shipping options"
                value={shippingOption.id}
              >
                {shippingOptions.map((option, idx) => (
                  <option key={idx} value={option.id}>
                    {`${option.description} - ${option.price.formatted_with_symbol}`}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm={12}>
            <hr />
          </Col>
          <FormInput
            value={cardNum}
            id="cardNum"
            placeholder="Your card number"
            onChange={(e) => setCardNum(e.target.value)}
            label="Card Number"
            type="text"
          />
          <FormInput
            value={expMonth}
            id="expMonth"
            placeholder="Expiration month"
            onChange={(e) => setExpMonth(e.target.value)}
            label="Card's expiration month"
            type="number"
          />
          <FormInput
            value={expYear}
            id="expYear"
            placeholder="Expiration year"
            onChange={(e) => setExpYear(e.target.value)}
            label="Card's expiration year"
            type="number"
          />
          <FormInput
            value={ccv}
            id="ccv"
            placeholder="CCV"
            onChange={(e) => setCcv(e.target.value)}
            label="CCV"
            type="number"
          />
          <Col className="d-flex justify-content-center align-items-center">
            <Button
              className="w-100 mt-5"
              variant="danger"
              type="submit"
              size="lg"
              onClick={(e) => handleCaptureCheckout(e)}
            >
              {sendingOrder ? (
                <>
                  <Spinner animation="border" role="status" />{" "}
                  <span>Loading...</span>
                </>
              ) : (
                "Confirm your order"
              )}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Checkout;
