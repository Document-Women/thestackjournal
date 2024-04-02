import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Category from "./category";
import { getColor } from "../lib/category-params";
import { randy } from "../lib/helpers";
import { useEffect, useRef } from "react";

export default function NewsletterBox() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // useEffect(() => {
  //   const iframeWindow =
  //     iframeRef.current?.contentDocument ||
  //     iframeRef.current?.contentWindow?.document;
  //   if (iframeWindow) {
  //     // Access the iframe's content here
  //     const entry = iframeWindow.getElementById("entry"); // CORS error
  //     console.log({ iframeWindow });
  //   }
  // }, []);

  // useEffect(() => {
  //   const substackIframe = document.getElementById(
  //     "substackIframe"
  //   ) as HTMLIFrameElement;
  //   console.log("iframer", substackIframe.contentDocument.body.innerHTML);
  // });

  return (
    // <div
    //   className="flex flex-col text-white lg:w-1/2 mx-auto bg-white border border-purple-500 rounded-3xl bg-center bg-no-repeat bg-cover p-4 lg:py-20"
    //   style={{
    //     backgroundImage:
    //       "url(https://res.cloudinary.com/do3qitis2/image/upload/q_auto/f_auto/letter-box_kq0gbh)",
    //   }}
    // >
    //   <div className="lg:w-1/2 mx-auto text-center my-8">
    //     <h3 className="leading-snug text-2xl mb-2">
    //       Be the first to hear about it
    //     </h3>
    //     <p>
    //       Subscribe to The Stack Journal, a free daily newsletter that features
    //       the best tech new and everything in betweeen
    //     </p>
    //   </div>

    //   <div className="lg:w-1/2 lg:mx-auto">
    //     <form action="" className="flex flex-col">
    //       <input
    //         type="text"
    //         placeholder="Enter your email address here"
    //         className="bg-transparent text-center border rounded-full py-4 enabled:hover:border-gray-400"
    //       />
    //       <button className="w-48 mx-auto text-center bg-purple-800 hover:bg-purple-500 rounded-full my-4 py-4">
    //         Subscribe
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="lg:flex items-center">
      <h2 className="lg:w-1/2 text-black text-center text-3xl lg:text-6xl font-bold mb-4">
        Join our Newsletter
      </h2>

      <div className="lg:w-1/2 border-2 border-purple-500 rounded-3xl lg:py-20">
        <iframe
          ref={iframeRef}
          id="substackIframe"
          src="https://thestackjournal.substack.com/embed"
          width=""
          className="bg-red-5000"
          style={{
            width: "50%",
            margin: "0 auto",
          }}
          frameBorder=""
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
