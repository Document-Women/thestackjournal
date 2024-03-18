import EventCard from "./event-card";
import PostCard from "./post-card";

export default function Events({ posts, limit }) {
  /* no categories for posts available from api
   * find a way to pass it down from graphql
   * done!
   */
  return (
    <div>
      <section>
        <h2 className="mt-8 mb-2 text-4xl md:text-6xl font-bold">
          Meet ups. Conferences. Seminars.
        </h2>
        <p className="text-lg mb-8">
          We help you binge tech events to watch, and also let you in on
          upcoming events to look out for
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
          {posts.map(({ node }: any, index: number) => {
            if (index < limit) {
              // console.log({ posts });
              return (
                <EventCard
                  key={node.slug}
                  title={node.title}
                  coverImage={node.featuredImage}
                  date={node.date}
                  author={node.author}
                  slug={node.slug}
                  excerpt={node.excerpt}
                  category={
                    node.categories?.edges
                      ? node.categories?.edges[0]?.node.name
                      : node.categories?.nodes[0]?.name
                  }
                />
              );
            }
          })}
        </div>
      </section>
    </div>
  );
}
