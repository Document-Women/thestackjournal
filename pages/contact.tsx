import { useState } from "react";
import Container from "../components/container";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import SectionSeparator from "../components/section-separator";
import preview from "./api/preview";
import { sendEmail } from "../lib/helpers";
import NewsletterBox from "../components/newsletter-box";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";

export default function ContactUs() {
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    const phone = e.currentTarget.phone.value;
    const message = e.currentTarget.message.value;

    if (!name || !email || !message) return null;

    const subject = `${name} contacted us via Website`;
    const body = `
      Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Message:\n${message}
    `;

    sendEmail(subject, body, setDone);
  };

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Contact - ${CMS_NAME} `}</title>
      </Head>
      <Container>
        <Navigation />

        <SectionSeparator />

        <div className="flex flex-col text-white  bg-center bg-no-repeat bg-cover p-4 lg:pt-12 lg:pb-20">
          <div className="lg:w-1/2 mx-auto ttext-center text-gray-700 my-8">
            <h2 className="leading-snug text-3xl mb-2">
              Want to get in touch?
            </h2>
            <p>Drop us a message here.</p>
          </div>

          <div className="lg:w-1/2 lg:mx-auto">
            <form onSubmit={handleSubmit} action="" className="flex flex-col">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="bg-transparent border border-gray-500 text-gray-800 rounded-xl p-4 enabled:hover:border-gray-400 mb-4"
              />
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                className="bg-transparent border border-gray-500 text-gray-800 rounded-xl p-4 enabled:hover:border-gray-400 mb-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="bg-transparent border border-gray-500 text-gray-800 rounded-xl p-4 enabled:hover:border-gray-400 mb-4"
              />
              <textarea
                className="border border-gray-500 text-gray-800 rounded-xl p-4"
                name="message"
                placeholder="Enter your message"
                id=""
                rows={5}
              ></textarea>
              <button
                className={`${
                  !done
                    ? "bg-purple-800 text-center"
                    : "text-purple-800 border border-purple-800"
                } w-full sw-48 mx-auto hover:bg-purple-500 rounded-xl my-4 py-4`}
              >
                {!done ? "Send Message" : "thank you for contacting us"}
              </button>
            </form>
          </div>
        </div>

        <SectionSeparator />

        <NewsletterBox />
      </Container>

      <Footer />
    </Layout>
  );
}
