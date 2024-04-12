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
  getAllPostsByTag,
  getAlltags,
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

export default function Tag({ posts, tag }) {
  type DataType = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };

  const [postData, setPostData] = useState(posts);

  const [data, setData] = useState<DataType[]>([]);

  const handleLoadMore = async (e) => {
    e.preventDefault();
    const edges = await (await fetch(`/api/tag/${tag}`)).json();
    // console.log([...edges, ...postData]);
    setPostData((prev) => [...prev, ...edges]);
  };

  return (
    <Layout preview={false}>
      <Head>
        {/* ${CMS_NAME} */}
        <title>{`The Stack Journal | Promoting women in tech `}</title>
      </Head>
      <Container>
        <Navigation />
        {data &&
          data.map((item, index) => {
            return (
              <ul key={item.id + index}>
                <li>{item.name}</li>
                <li>{item.year}</li>
              </ul>
            );
          })}
        <SectionSeparator />

        {postData.length > 0 && (
          <>
            <div className="my-8 lg:my-20"></div>

            <ThreeColStories posts={postData} limit="3" layout="layoutTwo" />

            {posts.length > 9 && (
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
  const { edges } = await getAllPostsByTag(params?.slug);

  return {
    props: { posts: edges, tag: unslug(params.slug) },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const { tags } = await getAlltags();

  const paths = tags.edges.map(({ node }) => ({
    params: { slug: node.slug },
  }));

  paths.push({ params: { slug: "foobar" } }); // for testing ONLY

  return {
    paths,
    fallback: false,
  };
};
