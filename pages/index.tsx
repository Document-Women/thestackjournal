import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import ThreeColStories from "../components/three-column-stories";
import HeroPost from "../components/hero-post";
import Navigation from "../components/navigation";
import Layout from "../components/layout";
import { getAllPostsForHome } from "../lib/api";
import { getPostsByCategory } from "../lib/helpers";
import { CMS_NAME } from "../lib/constants";
import SectionSeparator from "../components/section-separator";
import Footer from "../components/footer";
import Image from "next/image";
import Events from "../components/events";
import NewsletterBox from "../components/newsletter-box";

export default function Index({ allPosts: { edges }, preview }) {
  // TODO - get all cover stories and sort by date, render the most recent
  const heroPost = getPostsByCategory(edges, "Cover Story")[0].node;

  // const morePosts = edges.slice(1);

  const dearTechSis = getPostsByCategory(edges, "Dear Tech Sis"); // TODO - use category slug
  const featuredPosts = getPostsByCategory(edges, "Featured");
  const startupPosts = getPostsByCategory(edges, "Startups");
  const foundersPosts = getPostsByCategory(edges, "Founders");
  const eventPosts = getPostsByCategory(edges, "Events");
  // console.log({ startupPosts });

  return (
    <Layout preview={preview}>
      <Head>
        {/* ${CMS_NAME} */}
        <title>{`The Stack Journal | Promoting women in tech `}</title>
      </Head>
      <Container>
        <Navigation />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
            category={"event"}
          />
        )}
        {edges.length > 0 && (
          <>
            <h1 className="text-8xl font-display">Featured</h1>
            <MoreStories heading={"Featured"} posts={featuredPosts} limit="3" />

            <SectionSeparator />

            <ThreeColStories
              posts={dearTechSis}
              heading="Dear Tech Sis"
              limit="3"
              layout="layoutTwo"
            />

            <SectionSeparator />

            <ThreeColStories
              posts={startupPosts}
              heading="Startups"
              limit="3"
              layout="layoutFour"
            />

            {/* ad space */}
            <Image
              src="https://res.cloudinary.com/do3qitis2/image/upload/q_auto/f_auto/www.shopwithme.com_de3lfj"
              alt="ad"
              width={800}
              height={360}
              className="w-full my-28"
            />

            <ThreeColStories
              posts={foundersPosts}
              heading="Founders"
              limit="3"
              layout="layoutThree"
            />

            <SectionSeparator />

            <Events posts={eventPosts} limit="3" />

            <NewsletterBox />
          </>
        )}
      </Container>

      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
