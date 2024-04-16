import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";
import { SocialFb, SocialIn, SocialLn, SocialTw } from "./social-icons";
import { useState } from "react";
import { sendEmail } from "../lib/helpers";

export default function Footer() {
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;

    if (!name || !email) return null;

    const subject = `${name} just joined TSJ Community via website`;
    const body = `
      Name: ${name}\n
      Email: ${email}
    `;

    sendEmail(subject, body, setDone);
  };
  return (
    <footer className="bg-amber-100 border-t border-accent-2 mt-16 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-start">
          <div className="lg:w-1/3 mb-8">
            <Link href="/" className="logo inline-block align-middle">
              <Image
                src="/images/the-stack-journal-logo.png"
                alt=""
                width={300}
                height={60}
              />
            </Link>

            <div className="social-icons flex gap-4 lg:gap-8 mt-8">
              <Link
                href="https://x.com/TheStackJournal"
                target="_blank"
                className=""
              >
                <SocialTw color={"#532D97"} className="hover:opacity-75" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/thestackjournal/"
                target="_blank"
                className=""
              >
                <SocialLn color={"#532D97"} className="hover:opacity-75" />
              </Link>

              <Link
                href="https://www.instagram.com/theStackJournal"
                target="_blank"
                className=""
              >
                <SocialIn color={"#532D97"} className="hover:opacity-75" />
              </Link>

              <Link
                href="https://web.facebook.com/profile.php?id=100077432629714"
                target="_blank"
                className=""
              >
                <SocialFb color={"#532D97"} className="hover:opacity-75" />
              </Link>
            </div>
          </div>

          <div className="lg:w-1/3 sm:flex gap-12 xl:gap-20">
            <ul className="mb-8">
              <li className="text-lg font-bold mb-4">Company</li>
              <li className="mb-4">
                <a href="/about" className="hover:text-purple-800">
                  About Us
                </a>
              </li>
              <li className="mb-4">
                <a href="/contact" className="hover:text-purple-800">
                  Contact
                </a>
              </li>
              <li className="mb-4">
                <a href="/category/events" className="hover:text-purple-800">
                  Events
                </a>
              </li>
              <li className="mb-4">
                <a href="/careers" className="hover:text-purple-800">
                  Careers
                </a>
              </li>
            </ul>

            <ul className="mb-8">
              <li className="text-lg font-bold mb-4">Tags</li>
              <li className="mb-4">
                <a href="/tag/ai" className="hover:text-purple-800">
                  AI
                </a>
              </li>
              <li className="mb-4">
                <a href="/tag/fintech" className="hover:text-purple-800">
                  Fintech
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/tag/venture-capital"
                  className="hover:text-purple-800"
                >
                  Venture Capital
                </a>
              </li>
              <li className="mb-4">
                <a href="/tag/startup" className="hover:text-purple-800">
                  Startup
                </a>
              </li>
              <li className="mb-4">
                <a href="/tag/ecommerce" className="hover:text-purple-800">
                  Ecommerce
                </a>
              </li>
            </ul>

            <ul className="mb-8">
              <li className="text-lg font-bold mb-4">Legal</li>
              <li className="mb-4">
                <a href="/privacy" className="hover:text-purple-800">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:ml-auto">
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex__ flex-col item-end__ lg:w-[350px] lg:h-[300px] lg:text-right"
            >
              <h4 className="text-2xl mb-4">Join our community</h4>
              <p className="">
                Get first access to Opportunities, Resources, Industry Reports &
                more.
              </p>

              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full my-1 p-4 bg-transparent border-b border-gray-800"
              />

              <input
                type="email"
                name="email"
                placeholder="Eamil Addres"
                className="w-full my-1 p-4 bg-transparent border-b border-gray-800"
              />

              <button
                className={`${
                  !done
                    ? "bg-purple-800 text-white"
                    : "bg-white text-purple-800"
                } hover:bg-purple-500 rounded-full px-8 py-4 my-8 ml-auto`}
              >
                {!done
                  ? "Join the waiting list"
                  : "You've joined TSJ community"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// tracking-tighter leading-tight
