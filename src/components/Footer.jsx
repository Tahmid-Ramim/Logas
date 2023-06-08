import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <div className=" w-[100%] z-[100] h-[200px] absolute flex justify-center items-center  bg-slate-900  ">
        <div className="  h-full flex flex-col justify-evenly items-center ">
          <div className=" flex justify-evenly w-64  ">
            <a href="#">
              <BsFacebook className=" text-2xl text-[#6C63FF] " />
            </a>
            <a href="#">
              <BsInstagram className=" text-2xl text-[#6C63FF]" />
            </a>
            <a href="#">
              <BsTwitter className=" text-2xl text-[#6C63FF] " />
            </a>
          </div>
          <div className=" flex  font-header font-light text-[#cccdd6] justify-evenly items-center w-64 h-10  ">
            <a href="#" className=" hover:border-b-2 border-[#cccdd6] ">
              Info
            </a>
            -
            <a href="#" className=" hover:border-b-2 border-[#cccdd6] ">
              Support
            </a>
            -
            <a href="#" className=" hover:border-b-2 border-[#cccdd6] ">
              Marketing
            </a>
          </div>
          <p className="text-[#cccdd6] ">Terms of Use - Privacy Policy</p>
          <p className=" text-[#4d565f] font-semibold text-xl  font-tg ">
            © 2023 Tahmid Ramim
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
