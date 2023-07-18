import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Header from "../templates/header.jsx";
import Footer from "../templates/footer.jsx";
import "../styles/index.css";
import { BrowserRouter } from "react-router-dom";
// import { loadHeaderFooter } from "./utils.mjs";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
