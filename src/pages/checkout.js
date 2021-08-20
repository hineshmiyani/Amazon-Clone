import Image from "next/image";
import Header from "../components/Header";
import CheckoutProdcuts from "../components/CheckoutProdcuts";
import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/client";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call the backend to create checkout session.
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });
  };

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* main */}
      <main className="lg:flex max-w-screen-2xl mx-auto relative top-[6rem]">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm ">
          <Image
            src="https://bit.ly/37Q8G5s"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5  space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Cart is Empty"
                : "Shopping Cart"}
            </h1>

            {items.map((item, index) => (
              <CheckoutProdcuts
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                description={item.description}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div classname="">
          {items.length > 0 && (
            <div className="flex flex-col bg-white  p-10 m-5 h-full">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} itmes):
                <span>
                  <Currency quantity={total * 72} currency="INR" />
                </span>
              </h2>

              {/* Below 'button'  are custom tailwind css class  */}
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button m-2 ${!session && "button-disabled"}`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
