import React from "react";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  return (
    <div className="w-full py-32" id="Home">
      <Swiper
        modules={[A11y, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full py-10 md:flex-row">
            <div className="flex md:ps-32 flex-col items-center justify-center w-full md:items-start md:w-1/2 lg:max-w-[48rem] lg:pt-32  z-20">
              <h2 className="my-3 text-4xl font-bold text-center md:text-5xl md:ps-5 md:text-start lg:text-6xl lg:tracking-wider">
                WE PROVIDE <span className="block">BEST QUALITY</span>
              </h2>
              <p className="px-5 my-3 text-center md:text-start md:text-xl text-black/80 lg:tracking-wider lg:text-3xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                culpa ipsam qui eius quaerat nam, veniam corrupti dolore quas
                labore.
              </p>
              <button className="px-2 py-1 my-3 text-xl font-thin tracking-wide text-white duration-200 bg-black rounded hover:tracking-wider lg:text-3xl md:text-2xl md:ml-5 hover:bg-slate-700">
                Get Started
              </button>
            </div>
            <div className="absolute z-10 right-5 opacity-30">
              <img
                className="w-full max-w-[30rem]"
                src="./images/home (1).png"
                alt=""
              />
            </div>
            <div className="flex justify-center w-full md:w-1/2"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full md:flex-row">
            <div className="flex md:ps-32 flex-col items-center justify-center w-full md:items-start md:w-1/2 lg:max-w-[48rem] lg:pt-32  z-20">
              <h2 className="my-3 text-4xl font-bold text-center md:text-5xl md:ps-5 md:text-start lg:text-6xl lg:tracking-wider">
                MAKING DREAM <span className="block">COME TO LIFE</span>
              </h2>
              <p className="px-5 my-3 text-center md:text-start md:text-xl text-black/80 lg:tracking-wider lg:text-3xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                culpa ipsam qui eius quaerat nam, veniam corrupti dolore quas
                labore.
              </p>
              <button className="px-2 py-1 my-3 text-xl font-thin tracking-wide text-white duration-200 bg-black rounded hover:tracking-wider lg:text-3xl md:text-2xl md:ml-5 hover:bg-slate-700">
                Get Started
              </button>
            </div>
            <div className="absolute z-10 opacity-30">
              <img className="w-full" src="./images/home (1).jpg" alt="" />
            </div>
            <div className="flex justify-center w-full md:w-1/2"></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center justify-center h-full md:flex-row">
            <div className="flex md:ps-32 flex-col items-center justify-center w-full md:items-start md:w-1/2 lg:max-w-[48rem] lg:pt-32  z-20">
              <h2 className="my-3 text-4xl font-bold text-center md:text-5xl md:ps-5 md:text-start lg:text-6xl lg:tracking-wider">
                FROM CONCEPT <span className="block">TO CREATION</span>
              </h2>
              <p className="px-5 my-3 text-center md:text-start md:text-xl text-black/80 lg:tracking-wider lg:text-3xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
                culpa ipsam qui eius quaerat nam, veniam corrupti dolore quas
                labore.
              </p>
              <button className="px-2 py-1 my-3 text-xl font-thin tracking-wide text-white duration-200 bg-black rounded hover:tracking-wider lg:text-3xl md:text-2xl md:ml-5 hover:bg-slate-700">
                Get Started
              </button>
            </div>
            <div className="absolute z-10 opacity-30">
              <img className="w-full" src="./images/home (2).jpg" alt="" />
            </div>
            <div className="flex justify-center w-full md:w-1/2"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
