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

export default function Post({ posts, category }) {
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
    const edges = await (await fetch(`/api/fetcher/${category}`)).json();
    // console.log([...edges, ...postData]);
    setPostData((prev) => [...prev, ...edges]);
  };

  useEffect(() => {
    // console.log({ postData });
  }, [postData]);

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

            <div className="my-8 lg:my-20"></div>

            <ThreeColStories posts={postData} limit="3" layout="layoutTwo" />

            <div className="my-8 text-center">
              <button
                className="rounded-full border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white text-lg px-6 py-3"
                onClick={handleLoadMore}
              >
                Load More Articles
              </button>
            </div>

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
