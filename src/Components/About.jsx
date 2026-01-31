import React from "react";
import video from "./aboutVid.webm";

function About() {
  return (
    <div className="w-full px-5 py-40 lg:px-32" id="About">
      <h3 className="py-1 my-5 text-2xl font-bold tracking-wide border-l-4 border-yellow-600 md:border-l-8 ps-2 sm:text-3xl md:text-4xl md:tracking-wider lg:ps-7">
        About Us
      </h3>
      <div className="flex flex-col items-center w-full px-10 md:px-0 md:flex-row">
        <div className="w-full bg-yellow-600 md:max-w-[30rem] rounded h-fit md:w-1/2 mt-5 lg:max-w-[40rem]">
          <video
            className="relative rounded top-5 md:-top-5 md:bottom-5 left-5"
            src={video}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div className="flex flex-col pt-10 md:w-1/2 md:ps-10">
          <h2 className="text-2xl font-bold tracking-wide text-center md:text-xl md:text-start xl:text-3xl xl:pb-3">
            We Will Provide You The Best{" "}
            <span className="block">Work Which You Dreamt For!</span>
          </h2>
          <p className="text-xl font-thin text-center md:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            culpa repellendus? Est odit esse, dolores praesentium aliquid velit!
            Magni odit id aliquid recusandae tempore officia porro dicta, neque
            consectetur eius minima laudantium? Dolor libero tempora adipisci,
            provident nostrum sed possimus.
          </p>
              <button className="px-2 py-1 mx-auto my-3 text-xl font-thin tracking-wide text-white duration-200 bg-black rounded hover:tracking-wider lg:text-3xl md:text-2xl md:ml-5 hover:bg-slate-700 w-fit md:mr-auto">Read More</button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row max-w-[70rem]">
        <div className="flex justify-center w-full md:w-1/2">
          <div className="w-1/2 m-2 bg-black/20 max-w-[15rem] xl:max-w-[20rem] md:w-1/2 p-2 flex flex-col justify-center items-center xl:py-2">
            <h1 className="font-mono text-2xl font-bold text-center xl:text-3xl lg:text-3xl">10+</h1>
            <h5 className="font-sans font-thin tracking-wide text-center lg:text-xl xl:py-1">years of experience</h5>
          </div>
          <div className="w-1/2 m-2 bg-black/20 max-w-[15rem] xl:max-w-[20rem] md:w-1/2 p-2 flex flex-col justify-center items-center xl:py-2">
            <h1 className="font-mono text-2xl font-bold text-center xl:text-3xl lg:text-3xl">1500+</h1>
            <h5 className="font-sans font-thin tracking-wide text-center lg:text-xl xl:py-1">project completed</h5>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/2">
          <div className="w-1/2 m-2 bg-black/20 max-w-[15rem] xl:max-w-[20rem] md:w-1/2 p-2 flex flex-col justify-center items-center xl:py-2">
            <h1 className="font-mono text-2xl font-bold text-center xl:text-3xl lg:text-3xl">750+</h1>
            <h5 className="font-sans font-thin tracking-wide text-center lg:text-xl xl:py-1">satisfied clients</h5>
          </div>
          <div className="w-1/2 m-2 bg-black/20 max-w-[15rem] xl:max-w-[20rem] md:w-1/2 p-2 flex flex-col justify-center items-center xl:py-2">
            <h1 className="font-mono text-2xl font-bold text-center xl:text-3xl lg:text-3xl">450+</h1>
            <h5 className="font-sans font-thin tracking-wide text-center lg:text-xl xl:py-1">active workers</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
