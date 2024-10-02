import React from "react";

const BlogsCardsDetail = ({ blog }) => {
  return (
    <div className="flex flex-col mx-auto h-screen justify-center items-center">
      <div className="bg-white flex gap-2 w-[50rem] h-[30rem] overflow-hidden rounded z-30">
        <div className="relative group">
          <img
            src={blog?.image1}
            className="max-w-[30rem] h-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"
            alt={blog?.title}
          />
          <img
            src={blog?.image2}
            className="absolute inset-0 max-w-[30rem] h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
            alt={blog?.title}
          />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <h2 className="font-semibold pr-5">{blog?.title}</h2>
          <div>
            <p className="text-[26px] font-semibold">{blog?.description}</p>
          </div>
          <button className="bg-[#0a5d5d] text-white p-2 mt-10">
            Read More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsCardsDetail;
