import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import apple from "../assets/apple.svg";
import fb from "../assets/fb.svg";
import google from "../assets/google.svg";
import ins from "../assets/ins.svg";
import img from "../assets/main.svg";
import mic from "../assets/mic.svg";
import spotify from "../assets/spotify.svg";
import team from "../assets/team.svg";

const Home = () => {
  return (
    <>
      <div
        id="home"
        className="  w-[100%] h-[100dvh] bg-[#ffffff]   ph:flex ph:justify-center ph:items-center ph:flex-col overflow-x-hidden  "
      >
        <div className="  flex justify-evenly w-[100%] h-[100dvh] items-center ph:flex-col-reverse  ">
          <div className=" w-[600px] h-[500px] flex flex-col justify-center items-center  ">
            <h1 className=" font-alk font-bold ph:text-3xl text-5xl text-[#6C63FF] ">
              We always try our best !
            </h1>
            <h4 className=" w-96 text-center mt-7 ph:text-xl font-alk font-medium text-2xl text-[#0d0d0f]">
              - We will never make you sad !!!
            </h4>
            <p className=" w-96 ph:w-[300px] text-center mt-4 font-header font-medium">
              The powers that be of the universe take notice of your good deed
              and decide, somehow, some way, to return the favor by offering you
              a gift.
            </p>
            <div className=" mt-7 ph:mt-12">
              <button className=" ph:w-36 ph:h-9 w-40 h-10 rounded-sm text-[#292931] hover:bg-[#5a52f8] hover:text-[white] duration-200 ease-linear border-[#3d3d4d] border-[1px] shadow-lg font-alk font-semibold hover:border-[#5a52f8] ">
                <a href="https://replit.com/" target={"blank"}>
                  Explore
                </a>
              </button>
              <button className=" w-40 h-10 ph:w-36 ph:h-9 rounded-sm ml-4 shadow-xl font-alk bg-[#5a52f8] font-semibold text-[white] hover:border-[#5a52f8] hover:border-[1px] hover:bg-transparent hover:text-[#5a52f8] duration-200 hover:ease-linear  ">
                <a href="https://youtube.com/" target={"blank"}>
                  Order
                </a>
              </button>
            </div>
          </div>
          <div>
            <img src={img} className=" w-[540px]  " />
          </div>
        </div>
      </div>
      <div
        id="brands"
        className=" shadow-lg w-100% ph:w-full h-[100dvh] bg-[#F8F9FD] flex flex-col justify-center items-center "
      >
        <div className=" text-3xl  font-semibold font-header flex ph:flex-col ">
          <h1 className=" text-6xl font-alk text-[#006699] ">Brands</h1>
          <div className=" flex ">
            <p className=" mx-2 text-[#2EBD59] ">that</p>
            <p className=" mx-2 text-[black] ">works</p>
            <p className=" mx-2 text-[#00ADEF] ">with</p>
            <p className=" mx-2 text-[#FA4A28] ">us </p>
            <p className=" mx-1 text-[#FBBC09] ">! </p>
            <p className=" mx-1 text-[#3B5998] ">! </p>
            <p className=" mx-1 text-[black] ">!</p>
          </div>
        </div>
        <div className="  icons flex justify-evenly  items-center w-full ph:w-[1000px] h-40 ph:hidden ph:flex-col ">
          <img className=" w-48   " src={fb} />
          <img className=" w-32   " src={google} />
          <img className=" w-40   " src={mic} />
          <img className=" w-32   " src={apple} />
          <img className=" w-32   " src={spotify} />
          <img className=" w-32  " src={ins} />
        </div>
        <div className=" hidden ph:flex relative   ">
          <Carousel
            ariaLabel={false}
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showIndicators={false}
            width={"80vw"}
            showArrows={false}
            autoFocus={false}
            showStatus={false}
          >
            <div>
              <img src={fb} className=" px-4 " />
            </div>

            <div>
              <img src={google} className=" px-4 " />
            </div>

            <div className=" px-4 ">
              <img src={apple} />
            </div>
            <div className=" px-4 ">
              <img src={ins} />
            </div>
            <div className=" px-4 ">
              <img src={spotify} />
            </div>
          </Carousel>
        </div>
      </div>

      <div
        id="about"
        className=" w-full h-[120dvh] ph:min-h-[150dvh] flex justify-evenly items-center bg-[#C8CAE8] ph:flex-col-reverse  "
      >
        <div className=" flex flex-col justify-center items-center relative ">
          <h1 className=" text-5xl font-inter font-medium uppercase text-[#0f2663] tracking-widest">
            About Us
            <div className=" w-32 h-1 mt-3 bg-[#030711] animate-pulse "></div>
          </h1>

          <div className=" w-[500px] min-h-[200px] ph:w-[300px] ph:min-h-[300px]  mt-14 text-justify  tracking-wide font-noto  ">
            Page Scripts allows you to customize the application page-wise as
            per your requirement. You can modify the UI elements as well as the
            functionalities of a page in the application using page scripts for
            users. For example, you can hide certain buttons in the requests
            list view or request details page for users. Page Scripts allows you
            Page Scripts allows you to customize the application page-wise as
            per your requirement. You can modify the UI elements as well as the
          </div>

          <button className=" w-60 rounded-md text-[#FFFFFF] h-14 bg-[#5047f7]   font-inter text-[18px] hover:bg-transparent hover:border-[1px]  hover:border-[#5047f7] hover:text-[#5047f7] font-medium duration-150 ease-linear ph:mt-20 ph:w-56 ph:h-14 mt-10 ">
            Learn More
          </button>
        </div>

        <div>
          <img
            src={team}
            className=" w-[500px] ph:w-[370px] ph:h-[370px] h-[500px] "
          />
        </div>
      </div>
    </>
  );
};

export default Home;
