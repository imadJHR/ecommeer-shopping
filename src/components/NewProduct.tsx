"use client";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";

const productData = [
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    stock: 120,
    category: "Electronics",
    rating: 3 ,

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    stock: 120,
    rating: 5 ,
    category: "Electronics",

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    stock: 120,
    rating: 3 ,
    category: "Electronics",

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    rating: 4 ,
    stock: 120,
    category: "Electronics",

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    stock: 120,
    rating: 3 ,
    category: "Electronics",

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    stock: 120,
    rating: 5 ,
    category: "Electronics",

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    stock: 120,
    rating: 3 ,
    category: "Electronics",

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  {
    id: 0,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    currency: "USD",
    stock: 120,
    rating: 5 ,
    category: "Electronics",

    images:
      "https://img.freepik.com/photos-gratuite/affichage-ecouteurs-musique-levitation_23-2149817602.jpg?t=st=1719930497~exp=1719934097~hmac=4364e0ad8a17b7fc2cde64c0737545b0925bc81ed782feb3a3b3727836ec2019&w=740",
  },
  
  
];

const NewProduct = () => {
  return (
    <>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4 "> New Products</h2>
        <div className=" grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:-grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.images}
              title={item.name}
              desc={item.description}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewProduct;
