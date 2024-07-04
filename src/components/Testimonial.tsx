import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="container pt-16 pb-16 grid-cols-2 ">
      <div className="font-medium text-2xl pb-4">Testimonials</div>
      <div className="grid lg:grid-cols-[300px,1fr] gap-4">
        <div className="border border-gray-500 rounded-2xl grid place-items-center p-6 lg:p-0   ">
          <div className="text-center flex flex-col items-center gap-1 ">
            <Image
              className="rounded-full inline-block "
              src=""
              height={80}
            />
            <h2 className="text-gray-500 font-black text-[20px]"> Elsa Doe</h2>
            <p>CEO & Founder Invision</p>
            <Image className="inlie-block py-2" src="" width={30} height={30} />
            <p className="max-w-[200px] text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            </p>
          </div>
        </div>
        <div className=" bg-red-600 bg-[url('https://img.freepik.com/photos-gratuite/arrangement-caddies-vendredi-noir-espace-copie_23-2148667047.jpg?t=st=1720093387~exp=1720096987~hmac=fc0f2169d9709f281f389e6fb8b41bcfef34e58a5c02d7d6417d7415aef84092&w=996')]  bg-cover h-[500px] rounded-2xl grid place-items-center">
          <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
            <button className="bg-blackish text-white p-2 rounded-md">
              25% DISCOUNT
            </button>
            <h2 className="font-extrabold text-2xl text-[#272727]">
              Summer Collection
            </h2>
            <p className="text-gray-500 text-[20px]">
              Starting @ $20 <b>Shop Now</b>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Testimonial;
