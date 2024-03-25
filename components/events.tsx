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

        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8 gap-y-4 mb-">
          {posts.map(({ node }: any, index: number) => {
            if (index < limit) {
              return (
                <EventCard
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
