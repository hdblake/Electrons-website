import Products from "./Products.jsx";

export default function GetSmartphones() {
  const [products] = Products(
    "https://dummyjson.com/products/category/smartphones",
  );

  return (
    <>
      <h1>Smartphones</h1>
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
