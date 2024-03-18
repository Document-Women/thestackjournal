import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";
import { SocialFb, SocialIn, SocialLn, SocialTw } from "./social-icons";

export default function Footer() {
  return (
    <footer className="bg-amber-100 border-t border-accent-2 mt-16 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/3">
            <Link href="/" className="logo inline-block align-middle">
              <Image
                src="/images/the-stack-journal-logo.png"
                alt=""
                width={300}
                height={60}
              />
            </Link>

            <div className="social-icons flex lg:gap-8 mt-8">
              <Link href="#" className="">
                <SocialTw color={"#532D97"} className="hover:opacity-75" />
              </Link>

              <Link href="#" className="">
                <SocialLn color={"#532D97"} className="hover:opacity-75" />
              </Link>

              <Link href="#" className="">
                <SocialIn color={"#532D97"} className="hover:opacity-75" />
              </Link>

              <Link href="#" className="">
                <SocialFb color={"#532D97"} className="hover:opacity-75" />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/3 flex gap-20">
            <ul className="">
              <li className="font-bold mb-4">Company</li>
              <li className="mb-4">
                <a href="#" className="hover:text-purple-800">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-purple-800">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="/category/events" className="hover:text-purple-800">
                  Events
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:text-purple-800">
                  Company Info
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/category/opportunities"
                  className="hover:text-purple-800"
                >
                  Opportunities
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="font-bold mb-4">Categories</li>
              <li className="mb-4">
                <a
                  href="/category/artificial-intelligence"
                  className="hover:text-purple-800"
                >
                  Artificial Intelligence
                </a>
              </li>
              <li className="mb-4">
                <a href="/category/fintech" className="hover:text-purple-800">
                  Fintech
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/category/venture-apital"
                  className="hover:text-purple-800"
                >
                  Venture Capital
                </a>
              </li>
              <li className="mb-4">
                <a href="/category/startups" className="hover:text-purple-800">
                  Startups
                </a>
              </li>
              <li className="mb-4">
                <a href="/category/ecommerce" className="hover:text-purple-800">
                  Ecommerce
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="font-bold mb-4">Legal</li>
              <li className="mb-4">
                <a href="/privacy" className="hover:text-purple-800">
                  Privacy
                </a>
              </li>
              <li className="mb-4">
                <a href="/terms" className="hover:text-purple-800">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-auto">
            <form
              action=""
              className="flex__ flex-col item-end w-[350px] h-[300px] text-right"
            >
              <h4 className="text-2xl mb-4 lg:text-right">
                We are building a oommunity
              </h4>
              <p className="lg:text-right">
                Join our waiting list to be part of the first ones to know when
                we launch
              </p>

              <input
                type="text"
                placeholder="Name"
                className="w-full my-1 p-4 bg-transparent border-b border-gray-800"
              />

              <input
                type="text"
                placeholder="Eamil Addres"
                className="w-full my-1 p-4 bg-transparent border-b border-gray-800"
              />

              <button className="bg-purple-800 hover:bg-purple-500 rounded-full px-8 py-4 my-8 ml-auto text-white">
                Join the waiting list
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// tracking-tighter leading-tight
