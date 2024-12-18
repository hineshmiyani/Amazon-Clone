import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice.js";

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5 + 1));

  const [hasPrime] = useState(Math.random() > 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = (e) => {
    // console.log(e);
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

    // Sending the product as an action to the REDUX store.. the basket slice

    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 p-10 bg-white z-30">
      {/* <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p> */}

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {/* Here, Create array of rating-value[random number]
       and fill with it empty value and map through those value  
       and pass only index in map method*/}
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price * 72} currency="INR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://bit.ly/3ALZeMR" alt="" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
