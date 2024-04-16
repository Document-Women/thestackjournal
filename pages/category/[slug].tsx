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
// import { handleLoadMore } from "../../lib/actions";
import { useEffect, useState } from "react";

export default function Post({ posts, category, endCursor, hasNextPage }) {
  const categoryDesc = posts[0]?.node.categories.edges[0].node.description;
  type DataType = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };

  const [postData, setPostData] = useState(posts);
  const [postEndCursor, setPostEndCursor] = useState(endCursor);
  const [postHasNextPage, setpostHasNextPage] = useState(hasNextPage);

  const handleLoadMore = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/category/${category}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endCursor: postEndCursor }),
    });
    const { edges, pageInfo } = await res.json();

    setPostEndCursor(pageInfo.endCursor);
    setpostHasNextPage(pageInfo.hasNextPage);
    setPostData((prev) => [...prev, ...edges]);
  };

  return (
    <Layout preview={false}>
      <Head>
        {/* ${CMS_NAME} */}
        <title>{`${category} - The Stack Journal | Promoting women in tech `}</title>
      </Head>
      <Container>
        <Navigation />

        <SectionSeparator />

        {postData.length > 0 && (
          <>
            <div className="lg:flex justify-between">
              <div className="lg:w-1/2 mt-4 lg:mt-12">
                <h2 className="text-3xl lg:text-6xl mb-2 lg:mb-4 capitalize font-semibold">
                  {category}
                </h2>
                <p className="text-lg lg:text-xl leading-normal">
                  {/* {getCategoryDesc(category)} */}
                  {categoryDesc}
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

            <div className="my-8 lg:my-20"></div>

            <ThreeColStories posts={postData} limit="3" layout="layoutTwo" />

            {postHasNextPage && (
              <div className="my-8 text-center">
                <button
                  className="rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-lg px-6 py-3"
                  onClick={handleLoadMore}
                >
                  Load More Articles
                </button>
              </div>
            )}

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
  const {
    edges,
    pageInfo: { endCursor, hasNextPage },
  } = await getAllPostsByCategory(params?.slug);

  return {
    props: {
      posts: edges,
      endCursor,
      hasNextPage,
      category: unslug(params.slug),
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const { categories } = await getAllCategories();

  const paths = categories.edges.map(({ node }) => ({
    params: { slug: node.slug, foo: "bar" },
    // no other props allowed. i need to raise an issue on github
    // i even needed cate desc but i simply can't get it
  }));

  return {
    paths,
    fallback: false,
  };
};
