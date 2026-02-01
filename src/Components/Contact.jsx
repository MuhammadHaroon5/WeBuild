import React from "react";

function Contact() {
  return (
    <div className="w-full px-5 py-40 lg:px-32" id="Contact">
      <h3 className="py-1 my-5 text-2xl font-bold tracking-wide border-l-4 border-yellow-600 md:border-l-8 ps-2 sm:text-3xl md:text-4xl md:tracking-wider lg:ps-7">
        Contact
      </h3>
      <div className="w-full mt-3">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center justify-between w-full md:w-1/2">
            <div className="flex w-full justify-evenly">
              <div className="flex flex-col items-center justify-start m-2 p-4 h-[10rem] w-1/2 max-w-[15rem]">
                <div className="flex items-center justify-center w-16 h-16 p-2 overflow-hidden duration-150 cursor-pointer bg-slate-200 hover:bg-yellow-400">
                  <img
                    className="w-[80%]"
                    src="./icons/contact (1).png"
                    alt=""
                  />
                </div>
                <h5 className="mt-1 text-xl font-semibold text-center">
                  Phone Number
                </h5>
                <p className="font-thin text-center">+923169761638</p>
                <p className="t-font contact-sub-heading">+923169761638</p>
              </div>
              {/*  */}
              <div className="flex flex-col items-center justify-start m-2 p-4 h-[10rem] w-1/2 max-w-[15rem]">
                <div className="flex items-center justify-center w-16 h-16 p-2 overflow-hidden duration-150 cursor-pointer bg-slate-200 hover:bg-yellow-400">
                  <img
                    className="w-[80%]"
                    src="./icons/contact (2).png"
                    alt=""
                  />
                </div>
                <h5 className="mt-1 text-xl font-semibold text-center">
                  Email Address
                </h5>
                <p className="font-thin text-center">haroobrf@gmail.com</p>
                <p className="font-thin text-center">xyz123@gmail.com</p>
              </div>
            </div>
            {/*  */}
            <div className="flex w-full justify-evenly">
              <div className="flex flex-col items-center justify-start m-2 p-4 h-[10rem] w-1/2 max-w-[15rem]">
                <div className="flex items-center justify-center w-16 h-16 p-2 overflow-hidden duration-150 cursor-pointer bg-slate-200 hover:bg-yellow-400">
                  <img
                    className="w-[80%]"
                    src="./icons/contact (3).png"
                    alt=""
                  />
                </div>
                <h5 className="mt-1 text-xl font-semibold text-center">
                  Office Address
                </h5>
                <p className="font-thin text-center">
                  Peshawar, pakistan - 5000115
                </p>
              </div>
              <div className="flex flex-col items-center justify-start m-2 p-4 h-[20rem] w-1/2 max-w-[15rem]">
                <div className="flex items-center justify-center w-16 h-16 p-2 overflow-hidden duration-150 cursor-pointer bg-slate-200 hover:bg-yellow-400">
                  <img
                    className="w-[80%]"
                    src="./icons/contact (3).png"
                    alt=""
                  />
                </div>
                <h5 className="mt-1 text-xl font-semibold text-center">
                  Follow Us
                </h5>
                <div className="flex justify-between space-x-1">
                  <div className="w-8 h-8 p-2 overflow-hidden bg-yellow-500 rounded-md">
                    <img
                      className="w-full"
                      src="./icons/followus (1).png"
                      alt="f"
                    />
                  </div>
                  <div className="w-8 h-8 p-2 overflow-hidden bg-yellow-500 rounded-md">
                    <img
                      className="w-full"
                      src="./icons/followus (2).png"
                      alt="in"
                    />
                  </div>
                </div>
                <div className="flex justify-between mt-1 space-x-1">
                  <div className="w-8 h-8 p-2 overflow-hidden bg-yellow-500 rounded-md">
                    <img
                      className="w-full"
                      src="./icons/followus (3).png"
                      alt="i"
                    />
                  </div>
                  <div className="w-8 h-8 p-2 overflow-hidden bg-yellow-500 rounded-md">
                    <img
                      className="w-full"
                      src="./icons/followus (4).png"
                      alt="t"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between w-full md:w-1/2">
            <h5 className="text-2xl font-bold tracking-wide md:text-3xl lg:text-4xl">Get In Touch</h5>
            <input
              className="w-full py-1 mt-4 text-lg bg-transparent border-b-2 outline-none md:mt-2 border-black/60 focus:border-black"
              placeholder="Name"
              type="text"
            />
            <input
              className="w-full py-1 mt-4 text-lg bg-transparent border-b-2 outline-none md:mt-2 border-black/60 focus:border-black"
              placeholder="Email"
              type="text"
            />
            <input
              className="w-full py-1 mt-4 text-lg bg-transparent border-b-2 outline-none md:mt-2 border-black/60 focus:border-black"
              placeholder="Phone"
              type="text"
            />
            <textarea
              className="w-full py-1 mt-8 text-lg bg-transparent border-b-2 outline-none md:mt-4 border-black/60 focus:border-black"
              placeholder="Message"
            ></textarea>{" "}
            <button className="px-2 py-1 mx-auto my-8 text-xl font-thin tracking-wide text-white duration-200 bg-black rounded md:py-3 hover:tracking-wider md:ml-5 hover:bg-slate-700 w-fit md:mr-auto">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
