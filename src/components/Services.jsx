import React from "react";
import customers from "../assets/customers.svg";
import design from "../assets/design.svg";
import pc from "../assets/pc.svg";
const Services = () => {
  return (
    <>
      <div className=" w-[100%] ph:min-h-[200vh] h-[130vh] bg-[#c8cae8]  ">
        <div className=" w-full h-full flex flex-col justify-center items-center   ">
          <h1 className=" font-medium p-10 text-5xl font-inter text-[#6C63FF] ">
            Our Services & Features
          </h1>

          <div className=" flex ph:flex-col justify-evenly items-center  w-full h-[80%] ">
            <div className="  ph:w-[80vw] hover:scale-105 duration-100 ease-linear hover:border-2 hover:border-[#8463FF] shadow-xl w-[400px] h-[500px] bg-white  rounded-2xl flex flex-col justify-evenly items-center">
              <img className=" w-64 " src={pc} />
              <h2 className=" font-bold text-2xl mt-4 text-[#6C63FF]  ">
                Communications
              </h2>
              <p className=" font-header w-[250px] text-center text-[#71637D]  ">
                Pretium lectus quam id leo in vitae turpis. Mattis pellentesque
                id nibh tortor id.
              </p>
              <button className=" hover:bg-[#477af1]  ease-in-out duration-150 active:scale-95 bg-[#463dfc] w-40 h-10 rounded-full font-header font-semibold text-[white]  ">
                More
              </button>
            </div>
            <div className=" ph:mt-10 ph:w-[80vw] hover:scale-105 duration-100 ease-linear hover:border-2 hover:border-[#8463FF] shadow-xl w-[400px] h-[500px] bg-white  rounded-2xl flex flex-col justify-evenly items-center">
              <img className=" w-64 " src={design} />
              <h2 className=" font-bold text-2xl mt-4 text-[#6C63FF]  ">
                Inspired Design
              </h2>
              <p className=" font-header w-[250px] text-center text-[#71637D]  ">
                Nunc consequat interdum varius sit amet mattis vulputate enim
                nulla. Risus feugiat.
              </p>
              <button className=" hover:bg-[#4f82f8]  ease-in-out duration-150 active:scale-95 bg-[#463dfc] w-40 h-10 rounded-full font-header font-semibold text-[white]  ">
                More
              </button>
            </div>
            <div className=" ph:mt-10 ph:w-[80vw] hover:scale-105 duration-100 ease-linear hover:border-2 hover:border-[#8463FF] shadow-xl w-[400px] h-[500px] bg-white  rounded-2xl flex flex-col justify-evenly items-center">
              <img className=" w-64 " src={customers} />
              <h2 className=" font-bold text-2xl mt-4 text-[#6C63FF]  ">
                Happy Customers
              </h2>
              <p className=" font-header w-[250px] text-center text-[#71637D]  ">
                Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit
                scelerisque mauris.
              </p>
              <button className=" bg-[#463dfc] w-40 h-10 rounded-full font-header font-semibold text-[white] hover:bg-[#5587fc]  ease-in-out duration-150 active:scale-95 ">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
