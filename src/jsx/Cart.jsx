import useLocalStorageState from "use-local-storage-state";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useLocalStorageState("cart", { defaultValue: [] });

  const handleRemove = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const getProducts = () => Object.values(cart || {});

  const total = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0,
  );

  return (
    <>
      <h1 className="md:text-4xl text-3xl text-center mx-3 mb-8 text-main font-bold underline decoration-secondary">
        Cart
      </h1>
      <div className="grid gap-8 auto-rows-fr md:grid-cols-2 sm:grid-cols-1 place-items-center justify-items-center items-center">
        {getProducts().map((product) => (
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
            <p className="font-bold mt-2 mb-2 text-lg m-2">
              Price: ${product.price}
            </p>
            <button
              className="bg-main py-3 px-5 text-secondary font-bold rounded-lg"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-main text-xl md:text-2xl mb-5 mt-9 underline decoration-2">
          Total in Cart: ${total}
        </p>
        <Link to="/checkout">
          <button className="bg-main py-3 px-5 text-secondary font-bold rounded-lg mt-3">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
}
