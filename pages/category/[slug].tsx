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
            {/* <MoreStories heading={"Featured"} posts={featuredPosts} limit="3" /> */}

            <SectionSeparator />

            <ThreeColStories
              posts={posts}
              heading={category}
              limit="3"
              layout="layoutTwo"
            />

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
  console.log("edges:", edges.length);

  return {
    props: { posts: edges, category: params.slug },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const { categories } = await getAllCategories();
  const paths = categories.edges.map(({ node }) => ({
    params: { slug: node.slug, foo: "bar" },
  }));

  return {
    paths,
    fallback: false,
  };
};
