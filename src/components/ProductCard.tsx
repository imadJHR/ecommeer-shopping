import Image from "next/image";
import React from "react";

import { CiStar } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";
interface propsType {
  img: string;
  title: string;
  desc: string;
  price: number;
  category: string;
  rating: number;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  price,
  rating,
}) => {
  return (
    <div className="group relative block overflow-hidden border border-gray-200 rounded-md">
      <div>
        <img
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            {" "}
            New{" "}
          </span>

          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>

          <div className="font-bold flex gap-4">
          <p className="mt-1.5  text-gray-700 text-xl">${price}</p>
          <del className="mt-1.5 text-sm text-gray-700">${parseInt(price) +50}.00</del>
          </div>
          
          <p className="mt-1.5 text-sm text-gray-500">{desc}</p>

          <form className="mt-4">
            <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
