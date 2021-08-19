import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProdcuts({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };

    // Push item into redux store
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    // Remove item from redux store
    console.log("removeItemFromBasket");
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      {/* Left Side */}
      <Image src={image} height={200} width={200} objectFit="contain" />
      {/* Middle Side */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon ket={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <Currency quantity={price * 72} currency="INR" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://bit.ly/3ALZeMR"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>

      {/* Right Side  add/remove buttons*/}

      <div className="flex flex-col space-y-2 justify-center xl:w-56 xl:mx-auto ">
        <button onClick={addItemToBasket} className="button ">
          Add to Cart
        </button>
        <button onClick={removeItemFromBasket} className="button ">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProdcuts;
