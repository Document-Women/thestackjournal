import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import {
  getAllPostsWithSlug,
  getPostAndMorePosts,
  getAllPostsByCategoryAndTags,
} from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import NewsletterBox from "../../components/newsletter-box";
import NotFound from "../404";
import { PuffLoader } from "react-spinners";

export default function Post({ post, posts, preview, latest, categories }) {
  const latestPosts = latest?.edges;
  const mostUsedCategories = categories?.edges; //.slice(8);
  const router = useRouter();
  const morePosts = posts?.edges; // 3 most recent related posts by at least 2 tags returned

  if (!router.isFallback && !post?.slug) {
    // return <ErrorPage statusCode={404} />;
    return <NotFound />;
  }

  // return (
  //   <div className="flex flex-col h-screen items-center justify-center">
  //     <PuffLoader color="#6b21a8" />
  //   </div>
  // );
  // work on this, spinner maybe
  return (
    <Layout preview={preview} post={post}>
      <Container>
        {/* <Header /> */}
        <Navigation />
      </Container>

      {router.isFallback ? (
        <div className="flex flex-col h-screen items-center justify-center">
          <PuffLoader color="#6b21a8" />
        </div>
      ) : (
        <>
          <article>
            <Head>
              <title>{`${post.title} | ${CMS_NAME}`}</title>
              {/* <meta> tags allowed here */}
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage}
              date={post.date}
              author={post.author}
              category={post.categories.edges[0]?.node}
            />
            <PostBody
              content={post.content}
              title={post.title}
              latest={latestPosts}
              categories={mostUsedCategories}
            />

            <footer>
              {/* {post.tags.edges.length > 0 && <Tags tags={post.tags} />} */}
            </footer>
          </article>

          {/* <SectionSeparator /> */}

          {morePosts.length > 0 && (
            <Container>
              <div className="lg:mx-8">
                <div className="flex grow justify-center items-center my-12">
                  <div className="grow border-t border-black"></div>
                  <h3 className=" text-2xl md:text-3xl mx-8">
                    Related Articles
                  </h3>
                  <div className="grow border-t border-black"></div>
                </div>
                <MoreStories posts={morePosts} />
              </div>
              <SectionSeparator />

              <NewsletterBox />
            </Container>
          )}
        </>
      )}

      <Footer />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  let data,
    postsByCategory = null;

  data = await getPostAndMorePosts(params?.slug, preview, previewData);

  // this if checks if data.post returns truthy or null,
  // when post w/ slug isn't found no need to call getAllPostsByCategoryAndTags(), else fetchAPI error
  // old approach was try/catch, fetchAPI still fails
  if (data.post) {
    const category = data.post?.categories.edges[0].node.categoryId;
    const tags = data.post?.tags.edges.map(({ node }) => node.name);
    postsByCategory = await getAllPostsByCategoryAndTags(
      params?.slug,
      category,
      tags
    );
  }

  return {
    props: {
      preview,
      post: data.post,
      posts: postsByCategory,
      latest: data.posts,
      categories: data.categories,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
