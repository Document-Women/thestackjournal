import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Category, { styleEnums } from "./category";
import { getColor } from "../lib/category-params";

export default function PostCard({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug, // for article link
  category,
  size = "", // for big or small card - default undefined = big
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <div
        className="flex text-white rounded-[16px] lg:rounded-[30px] bg-top bg-no-repeat bg-cover mb-2"
        style={{
          backgroundImage: `url(${coverImage?.node.sourceUrl})`,
        }}
      >
        <div
          className={`w-full rounded-b-[16px] lg:rounded-b-[30px] bg-gradient-to-t from-black ${
            size ? "mt-12 p-4" : "mt-16 lg:mt-48 p-8"
          }`}
        >
          <div className="mb-4">
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
              className="hover:underline"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          {/* only show for non small postcards */}
          {!size && (
            <>
              By <Author author={author} />{" "}
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
