import React from "react";

// react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// pages
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
// components
import Header from "./components/Header";
import Alert from "./components/Alert";
import PrivateRoute from "./components/PrivateRoute";
import ScrollButton from "./components/ScrollButton";


export default function App() {
  return (
<Router>
    <Header />
      <Alert />
      <ScrollButton />      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>        

        <Route
          exact
          path="/products/:id" 
          children={<ProductDetails></ProductDetails>}
        ></Route>        
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>       
        <Route exact path="/login">
          <Login />
        </Route>           
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
    )
}
