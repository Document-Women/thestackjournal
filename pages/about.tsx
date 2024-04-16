import Container from "../components/container";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import NewsletterBox from "../components/newsletter-box";
import SectionSeparator from "../components/section-separator";
import preview from "./api/preview";

export default function ContactUs() {
  const subject = "New TSJ Newsletter Subscriber!";

  return (
    <Layout preview={preview}>
      <Container>
        <Navigation />

        <SectionSeparator />

        <div className="w-4/5 mx-auto p-4 lg:pt-12 lg:pb-20">
          <h1 className="border-b text-3xl lg:text-6xl mb-2 lg:mb-4 pb-2 lg:pb-4 capitalize font-semibold">
            About Us
          </h1>
          <p className="mb-2">
            The Stack Journal is a tech publication that provides a database of
            up-to-date resources primarily focusing on building a community for
            women in Tech.
          </p>
          <p className="mb-2">
            Despite the Tech industry's growth, there remains a gap in
            information, access, language, and career opportunities that
            disproportionately affect women. This gap refers to a lack of
            accessible and relevant information, limited opportunities for
            career growth, and exclusionary language and practices that hinder
            the career trajectory of women in Tech.
          </p>
          <p className="mb-2">
            Our publication aims to bridge this gap by documenting women's
            journeys, struggles, and successes in Tech and fostering
            conversations within a community of women.
          </p>
          <p className="mb-2">
            Our vision is to expedite the journey towards gender parity in the
            tech industry, while our mission is to create an outlet that
            provides access to women in Tech, inspire a new generation of women,
            document the women already in the industry to avoid erasure and
            encourage an inclusive community.
          </p>
          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            We value:
          </h2>
          <ul>
            <li>Access</li>
            <li>Resourcefulness</li>
            <li>Community</li>
            <li>Simplicity</li>
          </ul>
          <p className="mt-2">
            These guide us in building a publication and a community that can
            solve the gender parity problem in the tech industry
          </p>
        </div>

        <NewsletterBox />
      </Container>

      <Footer />
    </Layout>
  );
}
