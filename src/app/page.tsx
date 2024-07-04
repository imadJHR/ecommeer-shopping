import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobNavbar from "@/components/MobNavbar";
import NewProduct from "@/components/NewProduct";
import Testimonial from "@/components/Testimonial";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <NewProduct />
      <Testimonial/>
      <MobNavbar/>
      
     
    </div>
  );
};

export default page;
