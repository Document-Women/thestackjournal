import Head from "next/head";
import { GetStaticProps, GetServerSideProps } from "next";
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
import Link from "next/link";

export default function Index({ allPosts: { edges }, preview }) {
  // TODO - get all cover stories and sort by date, render the most recent
  // const heroPost = getPostsByCategory(edges, "Cover Story")[0].node; //edges.slice(1);
  const coverStory = edges.filter(
    ({ node }) => node.extras.isCoverStory === true
  )[0].node;

  const featuredPosts = edges
    .filter(({ node }) => node.extras.isFeatured === true)
    .slice(0, 3);

  const dearTechSis = getPostsByCategory(edges, "Dear Tech Sis", 9); // TODO - use category slug
  // const featuredPosts = getPostsByCategory(edges, "Featured", 9);
  const startupPosts = getPostsByCategory(edges, "Startups", 9);
  const foundersPosts = getPostsByCategory(edges, "Founders", 9);
  const eventPosts = getPostsByCategory(edges, "Events", 9);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <Navigation />
        {coverStory && (
          <HeroPost
            title={coverStory.title}
            coverImage={coverStory.featuredImage}
            date={coverStory.date}
            author={coverStory.author}
            slug={coverStory.slug}
            excerpt={coverStory.excerpt}
            category={coverStory.categories.edges[0].node}
          />
        )}
        {edges.length > 0 && (
          <>
            <div className="mt-20"></div>
            <MoreStories heading={"Featured"} posts={featuredPosts} />

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

            {/* <h3>Ad Space</h3> */}

            <Link href="mailto:hello@thestackjournal.com">
              <Image
                src="https://res.cloudinary.com/do3qitis2/image/upload/v1714121765/ad_lztuum.webp"
                alt="advert"
                width={800}
                height={360}
                className="w-full my-12 lg:my-28 rounded-3xl lg:rounded-[3rem]"
              />
            </Link>

            <ThreeColStories
              posts={foundersPosts}
              heading="Founders"
              limit="3"
              layout="layoutThree"
            />

            <SectionSeparator />

            <Events posts={eventPosts} limit="3" />

            <SectionSeparator />

            <NewsletterBox />
          </>
        )}
      </Container>

      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  // export const getServerSideProps: GetServerSideProps = async ({
  //   preview = false,
  // }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
