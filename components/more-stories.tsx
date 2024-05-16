import { uuid } from "../lib/helpers";
import PostCard from "./post-card";

export default function MoreStories({ heading = "", posts }) {
  /* no categories for posts available from api
   * find a way to pass it down from graphql
   * done!
   */
  return (
    <div>
      <section>
        {heading && (
          <h2 className="my-8 text-3xl lg:text-6xl font-bold">{heading}</h2>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-4">
          {posts.map(({ node }: any) => {
            return (
              <PostCard
                key={uuid()}
                title={node.title}
                coverImage={node.featuredImage}
                date={node.date}
                author={node.author}
                slug={node.slug}
                excerpt={node.excerpt}
                category={node.categories?.edges[0]?.node}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
