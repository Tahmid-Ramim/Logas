import React, { useState } from "react";

const Todo = ({ name, age }) => {
  const content = [
    "Get the best of world",
    "we are the best",
    "They talk very well",
  ];
  let [addedContent, setAddedContent] = useState([]);
  console.log(addedContent);
  return (
    <>
      <div className=" w-full h-[110vh] flex  justify-evenly items-center">
        <div className=" bg-slate-500 ">{() => div}</div>
        <div className=" flex flex-col  ">
          {content.map((e, i) => (
            <div className=" flex justify-center items-center  ">
              <div className=" h-8 my-4 flex justify-center items-center bg-slate-500 px-4 rounded-md ">
                {e}
              </div>
              <button
                onClick={() => {
                  if (!addedContent.find((v) => v === e)) {
                    setAddedContent([...addedContent, e]);
                  } else {
                    setAddedContent(addedContent.filter((v) => v !== e));
                  }
                }}
                className="  ml-3 rounded-md bg-amber-400 px-4 cursor-pointer "
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todo;
