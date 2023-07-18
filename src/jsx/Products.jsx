import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GetProducts() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((response) => response.json())
      .then((products) => setProducts(products.products));
  }, [category]);

  let categoryCapitalized =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <h1>Top Products: {categoryCapitalized}</h1>
      {products &&
        products.map((product) => (
          <div key={product.id}>
            <img src={product.thumbnail} alt={"Image of" + product.title} />
            <p>
              {product.brand} {product.title}
            </p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
    </>
  );
}
