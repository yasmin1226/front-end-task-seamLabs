import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Footer from "./components/Core/Footer";
import Header from "./components/Core/header";
import Subscribe from "./components/Core/Subscribe";
import ProductList from "./components/Features/Product/ProductList";
import ProductDetails from "./components/Features/Product/ProductDetails";
import Home from "./components/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/products/:id" exact component={ProductDetails} />
        </Switch>
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
