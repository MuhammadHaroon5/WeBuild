import React from "react";

function Pricing() {
  return (
    <div className="w-full px-5 py-40 lg:px-32" id="Pricing">
      <h3 className="py-1 my-5 text-2xl font-bold tracking-wide border-l-4 border-yellow-600 md:border-l-8 ps-2 sm:text-3xl md:text-4xl md:tracking-wider lg:ps-7">
        Projects
      </h3>
        <div className="flex flex-col items-center justify-between w-full pt-10 space-y-3 md:space-y-0 md:flex-row">
          <div className="flex flex-col text-center border-2 rounded w-full max-w-[20rem] p-2 border-slate-500">
            <div className="p-2 mx-auto mb-2 bg-yellow-500 rounded-full w-fit">
              <img className="w-10" src="./icons/pricing (3).png" alt="" />
            </div>
            <h4 className="text-xl font-bold text-black">Dream Home</h4>
            <p className="font-semibold">
              $<span className="text-xl">650</span>
              <span>/mo</span>
            </p>
            <p className="flex flex-col items-center justify-center font-sans">
              <span>Lorem ipsum dolor</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum dolor</span>
            </p>
            <button className="w-full pt-1 mt-4 font-serif font-semibold tracking-wide text-white duration-150 bg-black hover:rounded-xl">Chose Plan</button>
          </div>
          <div className="flex flex-col text-center border-2 rounded w-full max-w-[20rem] p-2 border-slate-500">
            <div className="p-2 px-5 mx-auto mb-2 bg-yellow-500 rounded-full w-fit">
              <img className="w-4 h-10" src="./icons/pricing (2).png" alt="" />
            </div>
            <h4 className="text-xl font-bold text-black">Dream Home</h4>
            <p className="font-semibold">
              $<span className="text-xl">650</span>
              <span>/mo</span>
            </p>
            <p className="flex flex-col items-center justify-center font-sans">
              <span>Lorem ipsum dolor</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum dolor</span>
            </p>
            <button className="w-full pt-1 mt-4 font-serif font-semibold tracking-wide text-white duration-150 bg-black hover:rounded-xl">Chose Plan</button>
          </div>
          <div className="flex flex-col text-center border-2 rounded w-full max-w-[20rem] p-2 border-slate-500">
            <div className="p-2 mx-auto mb-2 bg-yellow-500 rounded-full w-fit">
              <img className="w-10" src="./icons/pricing (1).png" alt="" />
            </div>
            <h4 className="text-xl font-bold text-black">Dream Home</h4>
            <p className="font-semibold">
              $<span className="text-xl">650</span>
              <span>/mo</span>
            </p>
            <p className="flex flex-col items-center justify-center font-sans">
              <span>Lorem ipsum dolor</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum</span>
              <span>Lorem ipsum dolor</span>
            </p>
            <button className="w-full pt-1 mt-4 font-serif font-semibold tracking-wide text-white duration-150 bg-black hover:rounded-xl">Chose Plan</button>
          </div>
        </div>
    </div>
  );
}

export default Pricing;
