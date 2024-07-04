"use client"
import React , { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { title } from 'process';

const Hero = () => {
  const SlideData = [
    {
      id: 0,
      img: "https://img.freepik.com/photos-gratuite/portrait-femme-heureuse-lunettes-soleil-debout-sacs-provisions-colores-dans-mains-fond-rose-jeune-femme-debout-chemise-blanche-short-jean_574295-1182.jpg?t=st=1719837751~exp=1719841351~hmac=2c4f613e8aa04c3ef2ec2dddd1518bce1c7872b1d59683f90da2becae5424760&w=996",
      soustitre: " Women's latest Fashion Sale ",
      title: "Trending Accessories",
      price: "$20",
    },
    {
      id: 1,
      img: "https://img.freepik.com/photos-gratuite/femme-sautant-sacs-provisions_23-2148674347.jpg?t=st=1719837912~exp=1719841512~hmac=442799983032ea0ab6b98e09e1cd511b55d9dfd1d8ccbdb6784d3a77fa80eb94&w=740",
      title: "Trending Accessories",
      soustitre: " Modern Sunglasses ",
      price: "$15",
    },
    {
      id: 2,
      img: "https://img.freepik.com/photos-gratuite/amies-font-du-shopping-ensemble_53876-25041.jpg?t=st=1719837974~exp=1719841574~hmac=2ed168c3b50489f2428c6192ba0e4a6bb6be3ccdf486e77b74460c06bce56f0f&w=996",
      title: "Sale Offer",
      soustitre: " New Fashion Summer Sale  ",
      price: "$30",
    },
  ]
 
 
  return (
    <div>
       <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          SlideData.map((item , index) => (
            <SwiperSlide key={index}>
              <div className=' flex items-center justify-center '>
              <div className='outline-none border-none relative'>
                 <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none  '>
                    <h3 className='text-accent text-[24px] lg:text-[28px]'>{item.title}</h3>
                     <h2 className='text-white text-[26px] md:text-[30px] lg:text-[44px] font-bold leading[1.2]'>{item.soustitre}</h2>
                     <h3 className='text-[24px] text-gray-500'> 
                      starting at {" "}
                      <b className='text-[20px] md:text-[24px] lg:text-[30px] '>{item.price}</b>.00
                     </h3>
                     <button className='bg-accent text-white text-[14px] md:text[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish'>
                      Shop Now
                     </button>


                  </div>
                  

                 </div>
           
                <img src={item.img} className='object-cover h-[700px] w-full' width={700}/>
                 
                

                
              </div>

            </SwiperSlide>
          ))
        }
    
    
      </Swiper>
    </div>
  )
 }


export default Hero