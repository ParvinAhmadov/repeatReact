import React, { useState, useEffect, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { SlMenu } from "react-icons/sl";
import Sidebar from "../../components/Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        isSidebarOpen
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="max-w-[1350px] mx-auto flex justify-between items-center p-[20px]">
        <div>
          <img
            className="w-[160px] h-[40px]"
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223&width=320"
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex items-center justify-center gap-14 text-[16px] ">
            <li className="text-emerald-900 font-bold cursor-pointer">HOME</li>
            <li className="cursor-pointer">COLLECTION</li>
            <li className="cursor-pointer">BLOG</li>
            <li className="cursor-pointer">PRODUCTS</li>
            <li className="cursor-pointer">OTHER PAGES</li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-6  ">
          <div className="hover:bg-gray-300 hover:rounded-full transition-all ease-in-out duration-300  hover:p-2 h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
            <IoSearch className="w-[20px] h-[20px] " />
          </div>
          <div className="hover:bg-gray-300 hover:rounded-full transition-all ease-in-out duration-300  hover:p-2 h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
            <FaRegUser className="w-[20px] h-[20px] " />
          </div>
          <div className="hover:bg-gray-300 hover:rounded-full transition-all ease-in-out duration-300  hover:p-2 h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
            <AiOutlineShoppingCart className="w-[20px] h-[20px] " />
          </div>
          <div className="hover:bg-gray-300 hover:rounded-full transition-all ease-in-out duration-300  hover:p-2 h-[40px] w-[40px] flex items-center justify-center cursor-pointer">
            <SlMenu onClick={toggleSidebar} className="w-[20px] h-[20px] " />
          </div>
        </div>
      </header>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 cursor-not-allowed"
          onClick={toggleSidebar}
        ></div>
      )}
      <Sidebar
        ref={sidebarRef}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export default Header;
