import { getColor } from "../lib/category-params";
import { layouts } from "../lib/layouts";
import PostCard from "./post-card";
import Link from "next/link";

export default function Stories({ posts, heading = "", limit, layout }) {
  const getLayout = (layout: string, column: string) => layouts[layout][column];

  return (
    <section>
      {heading && (
        <h2 className="my-8 text-3xl lg:text-6xl font-bold">{heading}</h2>
      )}
      <div className="lg:flex gap-12">
        <div
          className="inline-block w-full lg:w-1/2"
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
          className="inline-block lg:w-1/4"
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
          className="inline-block lg:w-1/4"
          style={{ order: getLayout(layout, "plain") }}
        >
          {posts.map(({ node }, index) => {
            return (
              index > 0 &&
              index <= 4 && (
                <div className="mb-4" key="index">
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
              )
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
