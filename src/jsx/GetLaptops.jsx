import Products from "./Products.jsx";

export default function GetLaptops() {
  const [products] = Products(
    "https://dummyjson.com/products/category/laptops",
  );

  return (
    <>
      <h1>Laptops</h1>
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
