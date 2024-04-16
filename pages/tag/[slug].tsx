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
import { getAllPostsByTag, getAlltags } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import NewsletterBox from "../../components/newsletter-box";
import Image from "next/image";
import { getCategoryDesc } from "../../lib/category-params";
import { capitalize, sluggify, unslug } from "../../lib/helpers";
// import { handleLoadMore } from "../../lib/actions";
import { useEffect, useState } from "react";

export default function Tag({ posts, tag, endCursor, hasNextPage }) {
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

  const [data, setData] = useState<DataType[]>([]);

  const handleLoadMore = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/tag/${tag}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ endCursor: postEndCursor }),
    });
    const { edges, pageInfo } = await res.json();
    console.log({ pageInfo });
    setPostData((prev) => [...prev, ...edges]);
    setPostEndCursor(pageInfo.endCursor);
    setpostHasNextPage(pageInfo.hasNextPage);
  };

  return (
    <Layout preview={false}>
      <Head>
        <title>{`${capitalize(tag)} - ${CMS_NAME} `}</title>
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
            <div className="my-8 lg:my-20">
              <h1 className="border-b text-3xl lg:text-6xl mb-2 lg:mb-4 pb-2 lg:pb-4 capitalize font-semibold">
                {tag}
              </h1>
            </div>

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

            <NewsletterBox />
          </>
        )}
      </Container>

      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: {
  params: any;
}) => {
  const {
    edges,
    pageInfo: { endCursor, hasNextPage },
  } = await getAllPostsByTag(params?.slug);

  return {
    props: { posts: edges, endCursor, hasNextPage, tag: unslug(params.slug) },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { tags } = await getAlltags();

  const paths = tags.edges.map(({ node }) => ({
    params: { slug: node.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
