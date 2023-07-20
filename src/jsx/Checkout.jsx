import useLocalStorageState from "use-local-storage-state";

export default function Checkout() {
  const [cart] = useLocalStorageState("cart", { defaultValue: [] });

  const getProducts = () => Object.values(cart || {});

  const numItems = getProducts().length;

  const shipping = 10 + (getProducts().length - 1) * 2;

  const cartTotal = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0,
  );

  const tax = (cartTotal * 0.06).toFixed(2);

  const orderTotal = (
    parseFloat(cartTotal) +
    parseFloat(shipping) +
    parseFloat(tax)
  ).toFixed(2);

  return (
    <div>
      <form className="flex flex-row flex-wrap lg:gap-8 sm:gap-2 justify-center">
        <fieldset className="m-5">
          <legend className="text-lg md:text-2xl text-main mb-4 font-bold underline decoration-secondary decoration-2 my-5">
            Shipping
          </legend>
          <div className="flex flex-col flex-wrap md:items-start sm:items-center gap-2">
            <label htmlFor="fname" className="text-main font-bold">
              First Name
            </label>
            <input
              name="fname"
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              required
            />
            <label htmlFor="lname" className="text-main font-bold">
              Last Name
            </label>
            <input
              name="lname"
              className="shadow appearance-none border-2 rounded-lg py-1 border-main mb-2"
              required
            />
          </div>
          <div className="flex flex-col flex-wrap items-start gap-2">
            <label className="text-main font-bold" htmlFor="street">
              Street
            </label>
            <input
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              name="street"
              required
            />
            <label className="text-main font-bold" htmlFor="city">
              City
            </label>
            <input
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              name="city"
              required
            />
            <label className="text-main font-bold" htmlFor="state">
              State
            </label>
            <input
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              name="state"
              required
            />
            <label className="text-main font-bold" htmlFor="zip">
              Zip
            </label>
            <input
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              name="zip"
              id="zip"
              required
            />
          </div>
        </fieldset>
        <fieldset className="m-5">
          <legend className="text-lg md:text-2xl text-main mb-4 font-bold underline decoration-secondary decoration-2 my-5">
            Payment
          </legend>
          <div className="flex flex-col flex-wrap items-start gap-2">
            <label className="text-main font-bold" htmlFor="cardNumber">
              Card number
            </label>
            <input
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              name="cardNumber"
              required
            />
            <label className="text-main font-bold" htmlFor="expiration">
              Expiration
            </label>
            <input
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              name="expiration"
              required
            />
            <label className="text-main font-bold" htmlFor="code">
              Security Code
            </label>
            <input
              className="shadow appearance-none border-2 rounded-lg py-1 border-main"
              name="code"
              required
            />
          </div>
        </fieldset>
        <fieldset className="checkout-summary m-5">
          <legend className="text-lg md:text-2xl text-main mb-4 font-bold underline decoration-secondary decoration-2 my-5">
            Order Summary
          </legend>
          <ul className="flex flex-col flex-wrap items-center text-center gap-4">
            <li>
              <label className="text-main font-bold" htmlFor="cartTotal">
                Item Subtotal (<span id="num-items">{numItems}</span>)
              </label>
              <p
                name="cartTotal"
                id="cartTotal"
                className="text-main bg-secondary p-2 rounded-lg text-center font-bold"
              >
                ${cartTotal}
              </p>
            </li>
            <li>
              <label className="text-main font-bold" htmlFor="shipping">
                Shipping Estimate
              </label>
              <p
                className="text-main bg-secondary p-2 rounded-lg text-center font-bold"
                id="shipping"
              >
                ${shipping}
              </p>
            </li>
            <li>
              <label className="text-main font-bold" htmlFor="tax">
                Tax
              </label>
              <p
                className="text-main bg-secondary p-2 rounded-lg text-center font-bold"
                id="tax"
              >
                ${tax}
              </p>
            </li>
            <li className="my-4">
              <label
                className="text-main font-bold text-lg"
                htmlFor="orderTotal"
              >
                <b>Order Total</b>
              </label>
              <p
                className="text-main bg-secondary p-2 rounded-lg text-center font-bold text-2xl"
                id="orderTotal"
              >
                ${orderTotal}
              </p>
            </li>
          </ul>
          <div className="flex flex-col flex-wrap items-center gap-4">
            <button
              className="bg-main py-3 px-5 mt-5 text-secondary font-bold rounded-lg"
              id="checkoutSubmit"
              type="submit"
            >
              Checkout
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
