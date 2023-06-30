import { useState, useEffect } from "react";

function getProducts() {
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);

  const fetchProducts = () => {
    return fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((d) => {
        setData(d);
      });
  };

  useEffect (() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {data.map((product) => {
        return (
          <div>
            <p>{product.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default getProducts;