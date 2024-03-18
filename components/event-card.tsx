import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Category, { styleEnums } from "./category";
import { getColor } from "../lib/colors";
import { randy } from "../lib/helpers";

export default function EventCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
  size = "",
}) {
  const eventType = randy(["Virtual Event", "In-Person Event"]);

  return (
    <Link href={`/posts/${slug}`}>
      <div
        className="flex text-white rounded-[30px] bg-center bg-no-repeat bg-cover mb-2"
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
          className={`w-full rounded-b-[30px] bg-gradient-to-t from-black px-4 ${
            size ? "mt-12 py-4" : "mt-64 py-8"
          }`}
        >
          <div className="flex gap-2 mb-4">
            <Category
              category={category}
              style={styleEnums.solid}
              oolor={getColor(category?.name)}
              size={size}
            />

            <Category
              category={category}
              style={styleEnums.solid}
              oolor={getColor(category?.name)}
              size={size}
            />
          </div>

          <h3
            className={`leading-snug ${
              size === "small" ? "mb-2" : "h-[120px] text-3xl mb-3"
            }`}
          >
            <Link
              href={`/posts/${slug}`}
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>

          <div className="text-lg text-red-500">{eventType}</div>
        </div>
      </div>
    </Link>
  );
}
