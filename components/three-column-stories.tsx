import { getColor } from "../lib/category-params";
import { layouts } from "../lib/layouts";
import PostCard from "./post-card";
import Author from "./author";
import Link from "next/link";
import SectionSeparator from "./section-separator";
import { uuid } from "../lib/helpers";

export default function Stories({ posts, heading = "", limit, layout }) {
  const getLayout = (layout: string, column: string) => layouts[layout][column];
  const singlePost = posts.slice(0, 1);
  const plainPosts = posts.slice(1, 6);
  const multiplePosts = posts.slice(6, 9);
  const morePosts = posts.slice(9);

  return (
    <>
      <section>
        {heading && (
          <h2 className="my-8 text-3xl lg:text-6xl font-bold">{heading}</h2>
        )}
        <div className="lg:flex gap-12">
          <div
            className="inline-block w-full lg:w-1/2"
            style={{ order: getLayout(layout, "single") }}
          >
            {singlePost.map(({ node }: any) => {
              return (
                <PostCard
                  key={uuid()}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
                  category={node.categories.edges[0]?.node}
                />
              );
            })}
          </div>

          <div
            className="md:flex md:gap-4 lg:inline-block lg:w-1/4 mt-4 lg:mt-0"
            style={{ order: getLayout(layout, "multiple") }}
          >
            {multiplePosts.map(({ node }: any) => {
              return (
                <PostCard
                  key={uuid()}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
                  category={node.categories.edges[0]?.node}
                  size="small"
                  type="multiple"
                />
              );
            })}
          </div>

          <div
            className="inline-block lg:w-1/4"
            style={{ order: getLayout(layout, "plain") }}
          >
            {plainPosts.map(({ node }, index: number) => {
              return (
                <div className="mb-4" key={uuid()}>
                  <Link
                    href={`/category/${node.categories.edges[0]?.node.slug}`}
                  >
                    <h4
                      style={{
                        borderColor: getColor(
                          node.categories.edges[0]?.node.name
                        ),
                        color: getColor(node.categories.edges[0]?.node.name),
                      }}
                      className={`inline-block text-sm text-slate-800 mb-2 px-2 border rounded-full`}
                    >
                      {node.categories.edges[0]?.node.name}
                    </h4>
                  </Link>

                  <Link
                    href={`/posts/${node.slug}`}
                    className="block text-lg hover:underline"
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  ></Link>

                  {index < limit && <hr className="mt-2" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        {morePosts.length > 0 && (
          <>
            <SectionSeparator />
            <div className="md:flex md:gap-12 flex-wrap">
              {morePosts.map(({ node }, index: number) => {
                if (index % 3 === 0) {
                  return (
                    <div
                      className="md:inline-block md:w-[44%] lg:w-[30%] mb-4 md:mb-0"
                      key={uuid()}
                    >
                      <PostCard
                        title={node.title}
                        coverImage={node.featuredImage}
                        date={node.date}
                        author={node.author}
                        slug={node.slug}
                        excerpt={node.excerpt}
                        category={node.categories.edges[0]?.node}
                        size="small"
                      />
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="md:inline-block md:w-[44%] lg:w-[30%] border-b mb-4 md:mb-0"
                      key="index"
                    >
                      <div className="">
                        <Link
                          href={`/category/${node.categories.edges[0]?.node.slug}`}
                        >
                          <h4
                            style={{
                              borderColor: getColor(
                                node.categories.edges[0]?.node.name
                              ),
                              color: getColor(
                                node.categories.edges[0]?.node.name
                              ),
                            }}
                            className={`inline-block text-sm text-slate-800 mb-2 px-2 border rounded-full`}
                          >
                            {node.categories.edges[0]?.node.name}
                          </h4>
                        </Link>

                        <Link
                          href={`/posts/${node.slug}`}
                          className="lg:min-h-28 block lg:line-clamp-4 text-xl hover:underline"
                          dangerouslySetInnerHTML={{ __html: node.title }}
                        ></Link>
                        <Link
                          href="#"
                          className="text-sm lg:text-base hover:text-purple-500 inline-block mb-2 lg:mb-0"
                        >
                          By <Author author={node.author} />
                        </Link>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}
      </section>
    </>
  );
}
