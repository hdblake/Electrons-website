import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Products from "./Products.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/products/:category" element={<Products />}></Route>
    </Routes>
  );
}

export default App;
