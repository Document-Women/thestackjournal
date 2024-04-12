import Container from "../components/container";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
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
            Privacy Policy
          </h1>
          <h2 className="text-lg lg:text-xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            <strong>Last Updated:</strong> April 12, 2024.
          </h2>

          <p className="mb-4">
            Welcome to The Stack Journal! Your privacy is important to us. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website{" "}
            <a href="https://www.thestackjournal.com">
              www.thestackjournal.com
            </a>{" "}
            including any other media form, media channel, mobile website, or
            mobile application related or connected thereto (collectively, the
            “Site”). Please read this privacy policy carefully. If you do not
            agree with the terms of this privacy policy, please do not access
            the site.
          </p>

          <p className="mb-4">
            We reserve the right to make changes to this Privacy Policy at any
            time and for any reason. We will alert you about any changes by
            updating the “Last Updated” date of this Privacy Policy. Any changes
            or modifications will be effective immediately upon posting the
            updated Privacy Policy on the Site, and you waive the right to
            receive specific notice of each such change or modification.
          </p>

          <h2 className="text-xl lg:text-2xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            1. Collection of Your Information
          </h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, email address, and telephone
              number, that you voluntarily give to us when you register with the
              Site or when you choose to participate in various activities
              related to the Site, such as online chat and message boards. You
              are under no obligation to provide us with personal information of
              any kind, however your refusal to do so may prevent you from using
              certain features of the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Site, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Site.
            </li>
          </ul>

          <h2 className="text-xl lg:text-2xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            2. Use of Your Information
          </h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Site to:
          </p>
          <ul>
            <li>Administer sweepstakes, promotions, and contests.</li>
            <li>
              Compile anonymous statistical data and analysis for use internally
              or with third parties.
            </li>
            <li>
              Deliver targeted advertising, coupons, newsletters, and other
              information regarding promotions and the Site to you.
            </li>
          </ul>

          <h2 className="text-xl lg:text-2xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            3. Disclosure of Your Information
          </h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others, we may share your information as permitted or required by
              any applicable law, rule, or regulation. This includes exchanging
              information with other entities for fraud protection and credit
              risk reduction.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your
              information with third parties that perform services for us or on
              our behalf, including payment processing, data analysis, email
              delivery, hosting services, customer service, and marketing
              assistance.
            </li>
          </ul>
          <h2 className="text-xl lg:text-2xl mt-8 lg:mt-4 mb-4 lg:mb-2">
            4. Contact Us
          </h2>
          <p>
            If you have questions or comments about this Privacy Policy, send us
            a mail at: <span className="italic">hello@thestackjournal.com</span>{" "}
          </p>
        </div>
      </Container>

      <Footer />
    </Layout>
  );
}
