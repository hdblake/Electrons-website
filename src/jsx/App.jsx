import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Products from "./Products.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
// import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/products/:category" element={<Products />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
    </Routes>
  );
}

export default App;
