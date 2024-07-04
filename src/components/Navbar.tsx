import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (


<div>
  <div className="sm:hidden ">
    <label htmlFor="Tab" className="sr-only">Tab</label>

    <select id="Tab" className="w-full rounded-md border-gray-200">
      <option>Settings</option>
      <option>Messages</option>
      <option>Archive</option>
      <option selected >Notifications</option>
    </select>
  </div>

  <div className="hidden sm:block ">
    <div className="border-b border-gray-200 ">
      <nav className="-mb-px flex gap-6 justify-center items-center">
        <Link
          href="/" 
          className="border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 hover:shrink-0 hover:rounded-t-lg hover:border"
        >
          HOME
        </Link>

        <Link
          href="#"
          className="border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 hover:shrink-0 hover:rounded-t-lg hover:border">
          MENS'S
        </Link>

        <Link
          href="#"
          className="border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 hover:shrink-0 hover:rounded-t-lg hover:border"
        >
          WOMEN'S
        </Link>

        <Link
          href="#"
          className=" border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 hover:shrink-0 hover:rounded-t-lg hover:border"
        >
          ABOUT
        </Link>
        <Link
          href="#"
          className="border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 hover:shrink-0 hover:rounded-t-lg hover:border"
        >
          JEWELRY
        </Link>
        <Link
          href="#"
          className="border-gray-300 border-b-white p-3 text-sm font-medium text-sky-600 hover:shrink-0 hover:rounded-t-lg hover:border"
        >
          CONTACT
        </Link>
      </nav>
    </div>
  </div>
</div>
  );
};

export default Navbar;
