import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Category, { styleEnums } from "./category";

export default function EventCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
  size = "",
  eventType,
}) {
  return (
    //  href={`/posts/${slug}`}
    <div>
      <div
        className="flex text-white rounded-[16px] lg:rounded-[30px] bg-center bg-no-repeat bg-cover mb-2"
        style={{
          backgroundImage: `url(${coverImage?.node.sourceUrl})`,
        }}
      >
        {/* <div className="mb-5">
          {coverImage && (
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          )}
        </div> */}

        <div
          className={`w-full rounded-b-[16px] lg:rounded-b-[30px] bg-gradient-to-t from-black ${
            size ? "mt-12 p-4" : "mt-16 lg:mt-48 p-8"
          }`}
        >
          <div className="flex gap-2 mb-4">
            <Category
              category={category}
              style={styleEnums.outline}
              size={size}
            />

            <Category
              category={category}
              style={styleEnums.solid}
              size={size}
            />
          </div>

          <h3
            className={`leading-tight ${
              size
                ? "mb-8"
                : "h-[5rem] lg:h-[9rem] my-4 lg:my-8 text-xl lg:text-4xl"
            }`}
          >
            <Link
              href={`/posts/${slug}`}
              className="hover:underline line-clamp-3"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>

          <div className="text-lg text-red-500">{eventType}</div>
        </div>
      </div>
    </div>
  );
}
