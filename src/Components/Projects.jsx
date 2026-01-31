import React from "react";

function Projects() {
  const projects = new Array(6).fill("Dream Home");

  return (
    <div className="w-full px-5 py-40 lg:px-32" id="Projects">
      <h3 className="py-1 my-5 text-2xl font-bold tracking-wide border-l-4 border-yellow-600 md:border-l-8 ps-2 sm:text-3xl md:text-4xl md:tracking-wider lg:ps-7">
        Projects
      </h3>
      <div className="flex flex-wrap items-center justify-center w-full mt-4">
        {projects.map((title, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden m-1 items-center w-full sm:w-[45%] md:w-[30%] max-w-[26rem] border border-black cursor-pointer justify-evenly"
          >
            <img
              className="w-full hover:scale-[1.03] duration-200"
              src={`./images/projects (${index + 1}).jpg`}
              alt=""
            />
            <div className="flex justify-between w-full">
              <div className="flex flex-col ps-2">
                <h3 className="text-2xl md:text-xl xl:text-2xl">{title}</h3>
                <p className="font-thin md:text-sm xl:text-base">Dream, Construction</p>
              </div>
              <button className="w-1/5 text-3xl font-bold text-white bg-yellow-500">+</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
