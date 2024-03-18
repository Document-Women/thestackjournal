import PostCard from "./post-card";

export default function MoreStories({ heading = "", posts, limit }) {
  /* no categories for posts available from api
   * find a way to pass it down from graphql
   * done!
   */
  return (
    <div>
      <section>
        {heading && (
          <h2 className="my-8 text-4xl md:text-6xl font-bold">{heading}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
          {posts.map(({ node }: any, index: number) => {
            if (index < limit) {
              // console.log({ posts });
              return (
                <PostCard
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
                  category={node.categories?.edges[0]?.node}
                />
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}
