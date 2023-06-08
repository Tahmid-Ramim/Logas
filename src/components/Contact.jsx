import React from "react";
import Form from "../assets/form.svg";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventdefault();
  };

  return (
    <>
      <div className="w-[100%] h-[100vh] ph:w-[100vw] flex justify-evenly items-center bg-[#c8cae8]   ">
        <div className=" w-[70vw] ph:w-[90vw] ph:h-[70vh] h-[80vh] shadow-xl rounded-xl flex justify-center items-center bg-[#f1f2f6] ">
          <div className=" ph:h-[100%] ph:w-[100%] h-[100%] w-[60%] flex justify-center items-start">
            <form className=" flex flex-col w-[100%]  h-[100%] justify-center items-center ">
              <div className=" flex ph:mb-10 ">
                <h1 className=" text-4xl font-semibold font-alk ph:text-5xl  text-[#334155]  ">
                  Contact Us
                </h1>
              </div>

              <div className=" w-[75%] ph:w-[86%] ph:h-[46px]  h-[55px] mt-7 relative  border-solid border-[1px] border-black">
                <input
                  type="text"
                  className=" w-full  outline-none h-full  pl-3  bg-[#f1f2f6]  "
                />
                <p className=" absolute top-[-13px] ph:text-sm ph:top-[-10px] left-5 bg-[#f1f2f6] px-1 text-base  font-alk text-[#334155]">
                  Your Name
                </p>
              </div>
              <div className=" w-[75%] ph:w-[86%] ph:h-[46px] h-[55px] mt-7 relative  border-solid border-[1px] border-black">
                <input
                  type="text"
                  className=" w-full   outline-none h-full  pl-3  bg-[#f1f2f6]  "
                />
                <p className=" ph:text-sm ph:top-[-10px]  absolute  top-[-13px] left-5 bg-[#f1f2f6] px-1 text-base  font-alk text-[#334155] ">
                  Email/Phone
                </p>
              </div>
              <div className=" w-[75%] h-[120px] ph:w-[86%] ph:h-[100px]  mt-7 relative  border-solid border-[1px] border-black">
                <textarea className=" w-full  outline-none h-full pt-3 pl-3 bg-[#f1f2f6]   "></textarea>
                <p className=" ph:text-sm ph:top-[-10px] absolute top-[-13px] left-5 bg-[#f1f2f6] px-1 text-base font-alk text-[#334155]">
                  Your Message
                </p>
              </div>

              <div className=" w-[75%] ph:w-[86%] h-[50px]  ">
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  className="  shadow-lg active:scale-95 ease-in duration-75 hover:bg-[#6C63FF] w-full h-full mt-7 rounded-md font-semibold font-alk  bg-[#5c54f3]  "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className=" ph:hidden h-full w-[400px] flex items-center justify-evenly">
            <img src={Form} className="  w-[90%] h-[100%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
