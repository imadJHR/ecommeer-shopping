import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4 ">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="bg-gray-200 rounded-md p-1.5 text-[14px] cursor-pointer hover:bg-accent hover:text-white">
              <FaFacebookF />
            </div>
            <div className="bg-gray-200 rounded-md p-1.5 text-[14px] cursor-pointer hover:bg-accent hover:text-white">
              <FaInstagram />
            </div>
            <div className="bg-gray-200 rounded-md p-1.5 text-[14px] cursor-pointer hover:bg-accent hover:text-white">
              <FaXTwitter />
            </div>
            <div className="bg-gray-200 rounded-md p-1.5 text-[14px] cursor-pointer hover:bg-accent hover:text-white">
              <FaYoutube />
            </div>
          </div>
          <div className="text-gray-500 text-[12px]">
            <b>FREE SHOPPING </b> THIS WEEK ORDER OVER 45$

          </div>
          <div className="flex gap-4">
            <select name="currency" id="currency" className="text-gray-500 text-[12px] w-[70px]">
              <option value="USD $">USD</option>
              <option value="EUR €">EUR</option>
              <option value="MAD">MAD</option>
            </select>
            <select name="languague" id="languague" className="text-gray-500 text-[12px] w-[70px]">
                <option value="ARAB">Arab</option>
                <option value="ENGLISH">English</option>
                <option value="FRENCH">French</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
