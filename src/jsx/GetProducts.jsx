import { useState, useEffect } from "react";

export default function GetProducts(url) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((products) => setProducts(products.products));
  }, [url]);

  return [products];
}
