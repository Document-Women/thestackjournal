import Head from "next/head";
import Container from "../components/container";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import NewsletterBox from "../components/newsletter-box";
import SectionSeparator from "../components/section-separator";
import preview from "./api/preview";
import { CMS_NAME } from "../lib/constants";

export default function ContactUs() {
  const subject = "New TSJ Newsletter Subscriber!";

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Careers - ${CMS_NAME} `}</title>
      </Head>
      <Container>
        <Navigation />

        <SectionSeparator />

        <div className="w-4/5 mx-auto p-4 lg:pt-12 lg:pb-20">
          <h1 className="border-b text-3xl lg:text-6xl mb-2 lg:mb-4 pb-2 lg:pb-4 capitalize font-semibold">
            Careers
          </h1>
          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            Join our team
          </h2>
          <p className="mb-2">
            At The Stack Journal, we're dedicated to empowering young women to
            excel in their careers and make their mark in the world. Our dynamic
            and inclusive workplace fosters creativity, collaboration, and
            growth, providing the perfect environment for young women to thrive.{" "}
          </p>
          <p className="mb-2">
            Discover exciting career opportunities tailored to ambitious young
            women looking to kickstart their professional journey or take their
            careers to new heights. Whether you're passionate about journalism,
            technology, design, or business development, The Stack Journal
            offers a range of roles and growth pathways to help you achieve your
            goals.
          </p>
          <p className="mb-2">
            Join us in shaping the future of media and empowering the next
            generation of female leaders. Explore our openings and start your
            journey to success with The Stack Journal today.
          </p>
          <p>
            There are no open role at the moment, but send in your resume for
            priority considerations for new roles.
          </p>
          <p className="text-lg font-bold">hello@thestackjournal.com</p>
        </div>

        <SectionSeparator />

        <NewsletterBox />
      </Container>

      <Footer />
    </Layout>
  );
}
