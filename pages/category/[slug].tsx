import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import ThreeColStories from "../../components/three-column-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getAllPostsByCategory,
  getAllCategories,
} from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import NewsletterBox from "../../components/newsletter-box";
import Image from "next/image";
import { getCategoryDesc } from "../../lib/category-params";
import { sluggify, unslug } from "../../lib/helpers";

export default function Post({ posts, category }) {
  return (
    <Layout preview={false}>
      <Head>
        {/* ${CMS_NAME} */}
        <title>{`The Stack Journal | Promoting women in tech `}</title>
      </Head>
      <Container>
        <Navigation />
        {posts.length > 0 && (
          <>
            <div className="lg:flex justify-between">
              <div className="lg:w-1/2 mt-4 lg:mt-12">
                <h2 className="text-3xl lg:text-6xl mb-2 lg:mb-4 capitalize font-semibold">
                  {category}
                </h2>
                <p className="text-lg lg:text-xl leading-normal">
                  {getCategoryDesc(category)}
                </p>
              </div>

              <Image
                className=""
                src={`/images/${sluggify(category)}.png`}
                alt={""}
                width={400}
                height={300}
              />
            </div>

            {/* <SectionSeparator /> */}

            <div className="my-8 lg:my-20"></div>

            <ThreeColStories posts={posts} limit="3" layout="layoutTwo" />

            <SectionSeparator />

            <NewsletterBox />
          </>
        )}
      </Container>

      <Footer />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { edges } = await getAllPostsByCategory(params?.slug);

  return {
    props: { posts: edges, category: unslug(params.slug) },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const { categories } = await getAllCategories();
  const paths = categories.edges.map(({ node }) => ({
    params: { slug: node.slug, foo: "bar" }, // no other props allowed. i need to raise an issue on github
  }));

  return {
    paths,
    fallback: false,
  };
};
