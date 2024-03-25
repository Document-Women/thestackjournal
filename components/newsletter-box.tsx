import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Category from "./category";
import { getColor } from "../lib/category-params";
import { randy } from "../lib/helpers";

export default function NewsletterBox() {
  return (
    <div
      className="flex flex-col text-white bg-center bg-no-repeat bg-cover p-4 lg:py-24"
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/do3qitis2/image/upload/q_auto/f_auto/letter-box_kq0gbh)",
      }}
    >
      <div className="lg:w-1/2 mx-auto text-center my-8">
        <h3 className="leading-snug text-2xl mb-2">
          Be the first to hear about it
        </h3>
        <p>
          Subscribe to The Stack Journal, a free daily newsletter that features
          the best tech new and everything in betweeen
        </p>
      </div>

      <div className="lg:w-1/2 lg:mx-auto">
        <form action="" className="flex flex-col">
          <input
            type="text"
            placeholder="Enter your email address here"
            className="bg-transparent text-center border rounded-full py-4 enabled:hover:border-gray-400"
          />
          <button className="w-48 mx-auto text-center bg-purple-800 hover:bg-purple-500 rounded-full my-4 py-4">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
