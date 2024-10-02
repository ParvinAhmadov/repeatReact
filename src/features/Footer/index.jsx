import React from "react";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/Logo.png?v=1694685223"
            alt=""
            className=" w-[170px] mb-3 "
          />
          <p className="text-gray-600 mb-3">
            <i className="fas fa-map-marker-alt"></i> 2357 Gordon Street, CA
          </p>
          <p className="text-gray-600 mb-3">
            <i className="fas fa-phone-alt"></i> 0123 456 789
          </p>
          <p className="text-gray-600">
            <i className="fas fa-envelope"></i> demo@gmail.com
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">About us</h3>
          <ul className="space-y-3 ">
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors "
              >
                Our story
              </a>
            </li>
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors "
              >
                Our team
              </a>
            </li>
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Designers
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Customer service</h3>
          <ul className="pace-y-3">
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 ">Support</h3>
          <ul className="pace-y-3">
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors "
              >
                FAQ's
              </a>
            </li>
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors "
              >
                Shipping
              </a>
            </li>
            <li>
              <a
                href="/my-app"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Return
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Payments</h3>
          <img
            src="https://vinova-furstore.myshopify.com/cdn/shop/files/img-2-7_250x.png?v=1696490455"
            alt="Payment methods"
            className="mb-4"
          />

          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="/my-app"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="/my-app"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <FaPinterestP />
            </a>
            <a
              href="/my-app"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="/my-app"
              className="text-gray-600 hover:text-black transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 border-t pt-6 text-gray-600">
        Copyright © 2023 Vinovathemes. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;