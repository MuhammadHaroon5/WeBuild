import React from "react";
// <h5 className="text-xl font-bold"></h5>
// <h5 className="text-center hfont bold"></h5>
// <h5 className="text-center hfont bold"></h5>

// <h5 className="text-center hfont bold"></h5>
// <h5 className="text-center hfont bold">   </h5>
// <h5 className="text-center hfont bold"></h5>

// <h5 className="text-center hfont bold"></h5>

// <h5 className="text-center hfont bold"></h5>
function Services() {
  const titles = [
    "Building Construction",
    "House Renovation",
    "Architecture Design",
    "Material Supply",
    "Construction Consultant",
    "Interior Design",
    "Building Maintenance",
    "Building Renovation",
  ];
  return (
    <div className="w-full px-5 py-40 lg:px-32" id="Services">
      <h3 className="py-1 my-5 text-2xl font-bold tracking-wide border-l-4 border-yellow-600 md:border-l-8 ps-2 sm:text-3xl md:text-4xl md:tracking-wider lg:ps-7">
        Services
      </h3>
      <div className="flex flex-wrap items-center justify-center w-full mt-4">
        {titles.map((title, index) => (
          <div
            key={index}
            className="flex flex-col h-[16rem] m-1 items-center w-[45%] md:w-[24%] max-w-[20rem] border border-black justify-evenly"
          >
            <img
              className="max-w-[8rem] hover:scale-[1.03] duration-200"
              src={`./images/servicesPic (${index + 1}).png`}
              alt=""
            />
            <h3 className="text-xl font-bold tracking-wide text-center xl:text-2xl">
              {title}
            </h3>
            <p className="font-thin text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, enim.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
