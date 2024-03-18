import Link from "next/link";
import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
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
    <div className="my-8">
      <div className="  p-4 columns-3__">
        <Link href="/" className="w-1/3 inline-block align-middle">
          <Image
            src="/images/the-stack-journal-logo.png"
            alt=""
            width={300}
            height={60}
          />
        </Link>

        <div className="w-1/3 inline-block align-middle">
          <ul className="flex justify-center">
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
                className="flex items-center text-purple-800 hover:text-gray-500"
              >
                More
                <svg
                  className={`ml-1 pt-1 h-6 w-6 ${
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
                      <a href="/" className="hover:text-gray-500">
                        Awards & Events
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="/" className="hover:text-gray-500">
                        News/Announcement
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="/" className="hover:text-gray-500">
                        Opportunities
                      </a>
                    </li>
                    <li className="my-2">
                      <a href="/" className="hover:text-gray-500">
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

        <div className="hidden w-1/3 inline-block align-middle">
          search bar{" "}
        </div>
      </div>
    </div>
  );
}
