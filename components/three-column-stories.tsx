import { getColor } from "../lib/colors";
import { layouts } from "../lib/layouts";
import PostCard from "./post-card";
import Link from "next/link";

export default function Stories({ posts, heading, limit, layout }) {
  const getLayout = (layout: string, column: string) => layouts[layout][column];

  return (
    <div>
      <section>
        <h2 className="my-8 text-4xl md:text-6xl font-bold capitalize">
          {heading}
        </h2>
        <div className="flex gap-12">
          <div
            className="inline-block w-1/2"
            style={{ order: getLayout(layout, "single") }}
          >
            {posts.map(({ node }: any, index: number) => {
              return (
                index === 0 && (
                  <PostCard
                    key={node.slug}
                    title={node.title}
                    coverImage={node.featuredImage}
                    date={node.date}
                    author={node.author}
                    slug={node.slug}
                    excerpt={node.excerpt}
                    category={node.categories.edges[0]?.node}
                  />
                )
              );
            })}
          </div>

          <div
            className="inline-block w-1/4"
            style={{ order: getLayout(layout, "multiple") }}
          >
            {posts.map(({ node }: any, index: number) => {
              return (
                index > 4 &&
                index <= 7 && (
                  <PostCard
                    key={node.slug}
                    title={node.title}
                    coverImage={node.featuredImage}
                    date={node.date}
                    author={node.author}
                    slug={node.slug}
                    excerpt={node.excerpt}
                    category={node.categories.edges[0]?.node}
                    size="small"
                  />
                )
              );
            })}
          </div>

          <div
            className="inline-block w-1/4"
            style={{ order: getLayout(layout, "plain") }}
          >
            {posts.map(({ node }, index) => {
              return (
                index > 0 &&
                index <= 4 && (
                  <div className="mb-4">
                    <Link
                      href={`/category/${node.categories.edges[0]?.node.slug}`}
                    >
                      <h4
                        className={`inline-block text-sm text-slate-800 mb-2 px-2 border border-${getColor(
                          node.categories.edges[0]?.node.name
                        )}-500 text-${getColor(
                          node.categories.edges[0]?.node.name
                        )}-500 rounded-full`}
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
                )
              );
            })}
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
}
