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
        className="flex text-white rounded-[30px] bg-center bg-no-repeat bg-cover mb-2"
        style={{
          backgroundImage: `url(${coverImage?.node.sourceUrl})`,
        }}
      >
        <div
          className={`w-full rounded-b-[30px] bg-gradient-to-t from-black ${
            size ? "mt-12 p-4" : "mt-64 p-8"
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
              size ? "mb-2" : "h-[125px] text-[1.65rem] mb-3"
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
