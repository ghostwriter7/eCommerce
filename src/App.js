import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { commerce } from "./lib/commerce";
//prettier-ignore
import {ProductsList, Loading, NavbarComponent, Cart, Checkout, Slider, Confirmation} from './components/index';

function App() {
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({
    merchant: {},
    products: [],
    cart: {},
    isCartVisible: false,
    order: {},
  });

  const fetchProducts = async () => {
    try {
      const { data } = await commerce.products.list();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error occured while fetching products", error);
    }
  };

  const fetchCart = async () => {
    try {
      const data = await commerce.cart.retrieve();
      setCart(data);
      setTotalItems(data.total_items);
    } catch (error) {
      console.log("Error occured while fetching cart", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    try {
      const { cart } = await commerce.cart.add(productId, quantity);
      setCart(cart);
      setTotalItems(cart.total_items);
    } catch (error) {
      console.log("Error occured while adding to cart", error);
    }
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
    setTotalItems(cart.total_items);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
    setTotalItems(cart.total_items);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
    setTotalItems(cart.total_items);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const order = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(order);
      refreshCart();
      return true;
    } catch (error) {
      // console.log("Error occured while capturing checkout", error);
      throw error;
    }
  };

  const refreshCart = async () => {
    try {
      const newCart = await commerce.cart.refresh();
      setCart(newCart);
      setTotalItems(newCart.total_items);
    } catch (error) {
      console.log("Error occured while refreshing cart", error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavbarComponent totalItems={totalItems} />
        <div style={{ marginTop: "130px" }} />
        <Switch>
          <Route exact path="/">
            {loading ? <Loading /> : ""}
            {products.length && <Slider products={products} />}
          </Route>
          <Route exact path="/shop">
            {loading ? <Loading /> : ""}
            <ProductsList products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            {cart && (
              <Cart
                cart={cart}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
              />
            )}
          </Route>
          <Route exact path="/checkout">
            {cart && (
              <Checkout cart={cart} onCaptureCheckout={handleCaptureCheckout} />
            )}
          </Route>
          <Route exact path="/confirmation">
            <Confirmation order={order} />
          </Route>
        </Switch>
        <div style={{ height: "100px" }} />
      </BrowserRouter>
    </>
  );
}

export default App;
