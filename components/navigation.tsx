import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      {/* Desktop Menu */}
      {/* <nav className="hidden md:flex md:items-center md:justify-between md:px-4"> */}
      <div className="hidden md:block my-8">
        <div className="p-4 columns-3__">
          <Link href="/" className="w-1/5 inline-block align-middle">
            <Image
              src="/images/the-stack-journal-logo.png"
              alt=""
              width={300}
              height={60}
            />
          </Link>

          <div className="w-3/5 inline-block align-middle">
            <ul className="flex justify-center text-sm">
              <li className="mx-3">
                <a
                  href="/category/startups"
                  className="text-purple-800 hover:text-gray-500"
                >
                  Startups
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="/category/dear-tech-sis"
                  className="text-purple-800 hover:text-gray-500"
                >
                  Dear Tech Sis
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="/category/founders"
                  className="text-purple-800 hover:text-gray-500"
                >
                  Founders
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="/category/essays"
                  className="text-purple-800 hover:text-gray-500"
                >
                  Essays
                </a>
              </li>
              <li
                className="relative mx-3"
                onClick={toggleDropdown}
                ref={dropdownRef}
              >
                <a
                  href="#"
                  className="flex items-start text-purple-800 hover:text-gray-500"
                >
                  More
                  <svg
                    className={`ml-1 h-6 w-6 ${
                      dropdownOpen ? "transform rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 0 1 1.414-1.414L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1-.001-1.413z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <div
                  className={`flex absolute z-10 bg-white mt-2 w-[600px]__ border rounded-lg shadow-xl ${
                    dropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="flex justify-between p-8">
                    <ul className="flex flex-col">
                      <li className="my-2">
                        <a
                          href="/category/events"
                          className="hover:text-gray-500"
                        >
                          Awards & Events
                        </a>
                      </li>
                      <li className="my-2">
                        <a
                          href="/category/news"
                          className="hover:text-gray-500"
                        >
                          News/Announcement
                        </a>
                      </li>
                      <li className="my-2">
                        <a
                          href="/category/opportunities"
                          className="hover:text-gray-500"
                        >
                          Opportunities
                        </a>
                      </li>
                      <li className="my-2">
                        <a
                          href="/category/industry-report"
                          className="hover:text-gray-500"
                        >
                          Industry Report
                        </a>
                      </li>
                    </ul>
                    <img
                      src="https://via.placeholder.com/300x75"
                      alt="placeholder"
                      className="hidden ml-4 pl-8 border-l border-gray-300"
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-1/5 hidden align-middle">search bar </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden my-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            <Image
              src={"/images/the-stack-journal-logo.png"}
              alt=""
              width={180}
              height={50}
            />
          </a>
          <button
            onClick={toggleMobileMenu}
            className="flex items-center px-3 py-2 rounded hover:bg-gray-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute inset-x-0 top-0 p-4 bg-white">
            <div className="flex items-center justify-between my-3">
              <a href="#" className="text-2xl font-bold">
                <Image
                  src={"/images/the-stack-journal-logo.png"}
                  alt=""
                  width={180}
                  height={50}
                />
              </a>
              <button
                onClick={toggleMobileMenu}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="">
                <a
                  href="/category/startups"
                  className="text-purple-800 hover:bg-gray-200 block p-3"
                >
                  Startups
                </a>
              </li>
              <li className="">
                <a
                  href="/category/dear-tech-sis"
                  className="text-purple-800 hover:bg-gray-200 block p-3"
                >
                  Dear Tech Sis
                </a>
              </li>
              <li className="">
                <a
                  href="/category/founders"
                  className="text-purple-800 hover:bg-gray-200 block p-3"
                >
                  Founders
                </a>
              </li>
              <li className="">
                <a
                  href="/category/essays"
                  className="text-purple-800 hover:bg-gray-200 block p-3"
                >
                  Essays
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
