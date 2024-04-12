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
            The Stack Journal exists to create a **community** for women in Tech
            and provide them with a **resource database** that fields fresh and
            improved information daily.
          </p>
          <p className="mb-2">
            <span className="font-bold">The problem:</span> The tech community
            is experiencing a boom. However, this boom comes with an
            information, access, language and career advancement gap that
            hinders the career trajectory of women in tech.
          </p>
          <p className="mb-2">
            <span className="font-semibold"></span>We aim to fix this gap as **a
            publication** that documents the journey, struggles, and wins of
            women past and present in Tech, as well as by **creating a
            community** where conversations can be had for women by women.
          </p>
          <p className="mb-2">
            We plan to iteratively tailor the content to the community we are
            building by updating and simplifying existing data and
            creating/curating new resources that help all women get, stay and
            thrive in Tech.
          </p>
          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            What is the dream?
          </h2>
          <h3 className="text-xl lg:text-2xl mt-2">Vision</h3>
          <ul>
            <li>To expedite the tech industry’s journey to gender parity</li>
          </ul>

          <h3 className="text-xl lg:text-2xl mt-2">Mission</h3>
          <ul>
            <li>To expedite the tech industry’s journey to gender parity</li>
            <li>
              To create an outlet that serves as a conduit for access to women
              in Tech
            </li>
            <li>Inspiring a new generation by documenting women in tech </li>
            <li>To battle erasure by documenting already existing women </li>
            <li>To inspire an inclusive community</li>
          </ul>

          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            The link between the service/product offering and the name
          </h2>
          <p className="mb-2">
            “The Stack Journal” is an iteration of the popular phrase “Tech
            bro”, which refers to people who work in tech.
          </p>
          <p className="mb-2">
            While this term has recently morphed into a “genderless” term in
            certain circles, it is still exclusionary and exists mainly as a
            signal to the boys club that the Tech industry mostly is. The Stack
            Journal is a publication that holistically documents and simplifies
            tech for women.
          </p>
          <p className="mb-2">
            The Stack Journal is a means to an end. The end is leveling the
            playing field, creating access for more women in tech, and
            sustaining the career trajectory for women in tech.
          </p>

          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            Our Primary Audience
          </h2>
          <p className="mb-2">Gender: Woman</p>
          <p className="mb-2">Age: 13 - 45</p>
          <p className="mb-2">Location: Africa, Global</p>
          <p className="mb-2">
            Industry: Women in Tech, women aspiring to Tech and curious about
            the Tech space.
          </p>

          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            How we reach them
          </h2>
          <ul>
            <li>Newsletters</li>
            <li>Website</li>
            <li>Social media: *Instagram, Twitter, Facebook, TikTok</li>
            <li>Blog</li>
            <li>Live events and experiences</li>
          </ul>

          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            Our Values
          </h2>
          <p className="mb-2 italic">
            We believe that these words guide us towards building a publication
            and a community that can be a solution to “the problem” described
            above.
          </p>
          <p className="mb-2">Access</p>
          <p className="mb-2">Resourcefulness</p>
          <p className="mb-2">Community</p>
          <p className="mb-2">Simplicity</p>

          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            Who we are
          </h2>
          <p className="mb-2">
            An authority in tech and tech educational materials centered on
            women in the industry.
          </p>
          <p className="mb-2">
            A resource for women in Tech to get information about the things
            they are working on
          </p>
          <p className="mb-2">
            A network for women in Tech to learn from and connect
          </p>
          <p className="mb-2">
            An entry point for women who need to learn and connect in order to
            begin tech careers or enter new tech roles. e.g. Bisi, the
            16-year-old, becomes curious about becoming a developer or designer,
            so her 28-year-old aunt refers her to follow this community that
            keeps explaining tech and putting women in tech.
          </p>
          <p className="mb-2">
            A community for women interested in or passionate about Tech
          </p>

          <h2 className="text-2xl lg:text-4xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            Our Personality
          </h2>
          <p className="mb-2">
            Futuristic, bold, simple, knowledgeable and cheerful.
          </p>
        </div>

        <SectionSeparator />

        <NewsletterBox />
      </Container>

      <Footer />
    </Layout>
  );
}
