import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { SiWpexplorer } from "react-icons/si";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div className="  w-[100vw] h-16  ph:mb-3 fixed bottom-4 z-[50]  ">
      <div className="  w-[100%] h-[100%] flex justify-center">
        <div className="   flex justify-evenly items-center w-[30%] ph:w-[80%] bg-[#111010] rounded-xl h-[100%] ">
          <HashLink smooth to="/#home" className=" font-[header] ">
            <div className=" active:scale-95 w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center ">
              <AiFillHome />
            </div>
          </HashLink>
          <Link to={"contact"}>
            <div className=" active:scale-95 w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center ">
              <BsTelephoneFill />
            </div>
          </Link>
          <Link to={"services"}>
            <div className=" active:scale-95  w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center ">
              <MdOutlineMiscellaneousServices />
            </div>
          </Link>
          <HashLink smooth to="/#about">
            <div className=" active:scale-95 w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center ">
              <HiInformationCircle />
            </div>
          </HashLink>

          <HashLink smooth to="/#brands">
            <div
              className=" active:scale-95 w-10 h-10 rounded-full bg-[#6C63FF] flex items-center
             justify-center  "
            >
              <SiWpexplorer />
            </div>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
