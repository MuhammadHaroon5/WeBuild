import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="fixed z-[999] top-0 w-full flex items-center justify-between md:justify-evenly border-b border-black shadow shadow-black/30 h-[5rem] bg-slate-100 text-black"> 
      <div className="flex text-xl md:text-2xl items-center justify-center md:w-1/3 hover:scale-[1.04] cursor-pointer duration-150">
        <a
          href="/"
          className="ml-1 font-thin tracking-wide duration-200 hover:font-semibold"
        >
          We
          <span className="text-yellow-500">Build</span>
        </a>
      </div>
      <div
        className={`${showNav ? "translate-y-14 md:translate-y-0" : "-translate-y-[100vw] md:translate-y-0"} ps-2 md:ps-10 justify-start bg-slate-100 pt-10 md:pt-0 md:bg-none w-full duration-200 transition-transform absolute md:relative md:flex-row top-0 flex flex-col md:space-x-3 lg:space-x-8 md:w-2/3`}
      >
        <a
          href="#Home"
          className="pt-5 mt-1 tracking-wider duration-200 border-b-2 border-yellow-600/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:hover:border-yellow-600 md:text-lg lg:text-xl xl:text-2xl md:pt-0"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Home
        </a>
        <a
          href="#About"
          className="pt-5 mt-1 tracking-wider duration-200 border-b-2 border-amber-600/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:hover:border-amber-600 md:text-lg lg:text-xl xl:text-2xl md:pt-0"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          About
        </a>
        <a
          href="#Services"
          className="pt-5 mt-1 tracking-wider duration-200 border-b-2 border-amber-600/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:hover:border-amber-600 md:text-lg lg:text-xl xl:text-2xl md:pt-0"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Services
        </a>
        <a
          href="#Projects"
          className="pt-5 mt-1 tracking-wider duration-200 border-b-2 border-amber-600/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:hover:border-amber-600 md:text-lg lg:text-xl xl:text-2xl md:pt-0"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Projects
        </a>
        <a
          href="#Pricing"
          className="pt-5 mt-1 tracking-wider duration-200 border-b-2 border-amber-600/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:hover:border-amber-600 md:text-lg lg:text-xl xl:text-2xl md:pt-0"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Pricing
        </a>
        {/* <a
          href="#Contact"
          className="pt-5 mt-1 tracking-wider duration-200 border-b-2 border-amber-600/20 hover:font-bold hover:bg-slate-500/30 md:hover:bg-transparent md:hover:border-amber-600 md:text-lg lg:text-xl xl:text-2xl md:pt-0"
          onClick={(e) => {
            setShowNav(false);
          }}
        >
          Contact
        </a> */}
      </div>
      <div className="flex items-center justify-end px-3 space-x-2 md:w-1/3">
        <input type="text" className="px-0 bg-transparent w-[70%] border-b border-black outline-none lg:py-2 lg:text-xl lg:px-2"  placeholder="Search..."/>
        <div
          onClick={() => setShowNav((prev) => !prev)}
          className="h-8 p-1 m-1 border rounded cursor-pointer md:hidden border-amber-600/40 hover:border-white bg-amber-500/30"
        >
          <div className="w-5 h-1 bg-white rounded"></div>
          <div className="w-5 h-1 mt-1 bg-white rounded"></div>
          <div className="w-5 h-1 mt-1 bg-white rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
