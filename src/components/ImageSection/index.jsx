import React from "react";

const ImageSection = () => {
  return (
    <div
      className="max-w-[1330px] mx-auto h-screen bg-cover bg-center  flex items-center mt-2"
      style={{
        backgroundImage:
          "url('https://vinova-furstore.myshopify.com/cdn/shop/files/s-9-1_2048x.jpg?v=1703653285')",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg px-20">
          <h1 className="text-5xl font-sembolid text-black mb-4 w-[1200px] leading-relaxed ">
            IMMERSE YOURSELF IN OUR <br />
            <span className=" ">SPECTACULAR FURNITURE COLLECTION</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 font-medium w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>

          <button className="bg-[#0A5D5D] text-white py-3 px-6  hover:bg-green-900 transition duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;