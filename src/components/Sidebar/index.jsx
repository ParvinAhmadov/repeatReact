import React, { forwardRef } from "react";
import {
  FaDollarSign,
  FaEuroSign,
  FaLanguage,
  FaPoundSign,
} from "react-icons/fa";

const CustomDropdown = ({ options, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(placeholder);

  const handleSelect = (option) => {
    setSelected(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <button
        className="w-full h-[35px] border rounded px-2 text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border rounded mt-1">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              <option.icon className="mr-2" />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = forwardRef(({ isOpen }, ref) => {
  const currencyOptions = [
    { value: "usd", label: "USD", icon: FaDollarSign },
    { value: "eur", label: "EUR", icon: FaEuroSign },
    { value: "gbp", label: "GBP", icon: FaPoundSign },
  ];

  const languageOptions = [
    { value: "eng", label: "ENG", icon: FaLanguage },
    { value: "aze", label: "AZE", icon: FaLanguage },
  ];

  return (
    <div
      ref={ref}
      id="drawer-navigation"
      className={`fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform duration-300 ease-in-out bg-white p-10 
        ${isOpen ? "translate-x-0" : "translate-x-full"} w-[350px]`}
      tabIndex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <div className="border-b border-gray-300 mt-[20%]">
        <ul className="flex flex-col gap-8 mb-2 text-[19px] ">
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Register</li>
          <li className="cursor-pointer">Wishlist</li>
          <li className="cursor-pointer">Check out</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center mt-10">
          <h1 className="text-lg mr-6">Currency</h1>
          <CustomDropdown
            options={currencyOptions}
            placeholder="Select Currency"
            onSelect={(value) => console.log("Selected Currency:", value)}
          />
        </div>
        <div className="flex items-center">
          <span className="text-lg mr-4">Language</span>
          <CustomDropdown
            options={languageOptions}
            placeholder="Select Language"
            onSelect={(value) => console.log("Selected Language:", value)}
          />
        </div>
      </div>
      <div className="py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium"></ul>
      </div>
    </div>
  );
});

export default Sidebar;
