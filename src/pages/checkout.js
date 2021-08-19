import Image from "next/image";
import CheckoutProdcuts from "../components/CheckoutProdcuts";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
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
