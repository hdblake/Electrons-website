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
      <h1 className="md:text-4xl text-3xl text-center mx-3 mb-8 text-main font-bold underline decoration-secondary">
        Top Products: {categoryCapitalized}
      </h1>
      <div className="product-wrapper grid gap-8 auto-rows-fr md:grid-cols-2 sm:grid-cols-1 place-items-center justify-items-center items-center">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="text-main flex flex-col justify-center items-center rounded-2xl border-4 border-main md:w-3/4 mx-4 pb-4 h-100 h-full mt-auto"
            >
              <img
                src={product.thumbnail}
                alt={"Image of" + product.title}
                className="rounded-t-xl mb-auto"
              />
              <p className="font-bold text-xl m-2 mb-auto underline decoration-secondary decoration-2">
                {product.title}
              </p>
              <p className="font-bold mt-2 mb-auto text-lg m-2">
                Price: ${product.price}
              </p>
              <button
                id="addToCart"
                data-id=""
                className="bg-main py-3 px-5 text-secondary font-bold rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
