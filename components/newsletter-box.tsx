import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Category from "./category";
import { getColor } from "../lib/category-params";
import { randy, sendEmail } from "../lib/helpers";
import { useEffect, useRef, useState } from "react";
// import appendRow from "../lib/append";

export const handlerSubmittt = async (e) => {
  const subject = "New TSJ Newsletter Subscriber!";
  e.preventDefault();
  const message = `
    A new user has subscribed via our website\n
    Email: ${e.currentTarget.email.value}
  `;

  try {
    const data = await (
      await fetch("/api/mailer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message }),
      })
    ).json();
    console.log({ data });
  } catch (err) {
    console.error(err);
  }
};

export default function NewsletterBox() {
  // const sheetId = "1F5jZI2dOdlZWufkG1rMoApfDsPNcFlC-ggI-COY8ywc";
  // const range = "Sheet1!A1"; // "Sheet2!C3:F10"

  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "New TSJ Newsletter Subscriber!";
    const message = `
      A new user has subscribed via our website\n
      Email: ${email}
    `;

    sendEmail(subject, message, setDone);
  };

  return (
    <div
      className="flex flex-col lg:w-3/4 text-white rounded-2xl lg:rounded-[42px] bg-center bg-no-repeat bg-cover mt-8 lg:mt-20 p-4 lg:py-20"
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
        <form onSubmit={handleSubmit} action="" className="flex flex-col">
          <input
            type="email"
            name="email"
            value={!done ? email : "thank you for subscribing"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address here"
            className={`${
              !done ? "bg-transparent" : "bg-white text-purple-800"
            } text-center border rounded-full py-4 enabled:hover:border-gray-400`}
          />
          <button
            disabled={!email}
            className="w-48 mx-auto text-center bg-purple-800 hover:bg-purple-500 rounded-full my-4 py-4"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    // substack embed - remove later
    // <div className="lg:flex items-center">
    //   <h2 className="lg:w-1/2 text-black text-center text-2xl lg:text-6xl font-bold mb-4">
    //     Join our Newsletter
    //   </h2>

    //   <div className="lg:w-1/2 border-2 border-purple-500 rounded-3xl lg:py-20">
    //     <iframe
    //       ref={iframeRef}
    //       id="substackIframe"
    //       src="https://thestackjournal.substack.com/embed"
    //       width=""
    //       className="bg-red-5000"
    //       style={{
    //         width: "50%",
    //         margin: "0 auto",
    //       }}
    //       frameBorder=""
    //       scrolling="no"
    //     ></iframe>
    //   </div>
    // </div>
  );
}
