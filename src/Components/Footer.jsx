import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-between w-full px-5 pt-40 lg:px-32">
      <div className="flex items-start justify-between w-full py-4 mt-4">
        <img
          className="w-1/6 max-w-[10rem] relative md:top-4 opacity-70 hover:opacity-100 duration-150 hover:scale-[1.02]"
          src="./icons/footer (1).png"
          alt="Footer Building Icon"
        />
        <img
          className="w-1/6 max-w-[10rem] opacity-70 hover:opacity-100 duration-150 hover:scale-[1.02]"
          src="./icons/footer (4).png"
          alt="Footer Building Icon"
        />
        <img
          className="w-1/6 max-w-[10rem] opacity-70 hover:opacity-100 duration-150 hover:scale-[1.02]"
          src="./icons/footer (3).png"
          alt="Footer Building Icon"
        />
        <img
          className="w-1/6 max-w-[10rem] relative md:top-4 opacity-70 hover:opacity-100 duration-150 hover:scale-[1.02]"
          src="./icons/footer (2).png"
          alt="Footer Building Icon"
        />
      </div>
      <div className="flex items-center justify-center">
        <a
          href="#Home"
          className="px-1 py-1 mx-1 text-xs text-white duration-150 bg-black sm:text-lg md:text-xl xl:text-2xl xl:px-3 xl:tracking-wider hover:bg-black/70 xl:py-2 xl:hover:tracking-widest"
        >
          Home
        </a>
        <a
          href="#About"
          className="px-1 py-1 mx-1 text-xs text-white duration-150 bg-black sm:text-lg md:text-xl xl:text-2xl xl:px-3 xl:tracking-wider hover:bg-black/70 xl:py-2 xl:hover:tracking-widest"
        >
          About
        </a>
        <a
          href="#Services"
          className="px-1 py-1 mx-1 text-xs text-white duration-150 bg-black sm:text-lg md:text-xl xl:text-2xl xl:px-3 xl:tracking-wider hover:bg-black/70 xl:py-2 xl:hover:tracking-widest"
        >
          Services
        </a>
        <a
          href="#Projects"
          className="px-1 py-1 mx-1 text-xs text-white duration-150 bg-black sm:text-lg md:text-xl xl:text-2xl xl:px-3 xl:tracking-wider hover:bg-black/70 xl:py-2 xl:hover:tracking-widest"
        >
          Projects
        </a>
        <a
          href="#Pricing"
          className="px-1 py-1 mx-1 text-xs text-white duration-150 bg-black sm:text-lg md:text-xl xl:text-2xl xl:px-3 xl:tracking-wider hover:bg-black/70 xl:py-2 xl:hover:tracking-widest"
        >
          Pricing
        </a>
        <a
          href="#Contact"
          className="px-1 py-1 mx-1 text-xs text-white duration-150 bg-black sm:text-lg md:text-xl xl:text-2xl xl:px-3 xl:tracking-wider hover:bg-black/70 xl:py-2 xl:hover:tracking-widest"
        >
          Contact
        </a>
      </div>
      <div className="flex flex-col w-full py-10 text-xl font-thin tracking-wider md:flex-row md:text-2xl justify-evenly">
        <h3>Designed By ❤ with ☕</h3>
        <h3>
          Developer{" "}
          <a
            className="text-yellow-800 underline underline-offset-2"
            href="https://haroon-webdev.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            M.Haroon
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
