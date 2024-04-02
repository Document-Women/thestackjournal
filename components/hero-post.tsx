import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import Category, { styleEnums } from "./category";
import { getColor } from "../lib/category-params";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}) {
  const colour = getColor(category.name);
  return (
    <section>
      <div className="border relative mb-8 lg:mb-16 rounded-[16px] lg:rounded-[45px] overflow-hidden z-0">
        {coverImage && true && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div
        className="w-4/5 relative bg-white shadow-xl rounded-[16px] lg:rounded-[30px] mx-auto -mt-40 lg:-mt-48 p-8 z-10 border-b"
        style={{ borderBottomColor: colour }}
      >
        <div className="mb-4">
          <span
            className="capitalize rounded-full px-6 py-3"
            style={{ outline: `solid 1px ${colour}`, color: colour }}
          >
            {/* <Category category={category} style={styleEnums.outline} /> */}
            {category.name}
          </span>
        </div>

        <h3 className="mb-4 text-xl lg:text-6xl leading-tight">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline font-bold"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h3>
        <div className="text-sm">
          By <Author author={author} />
        </div>
      </div>
      {/* <Date dateString={date} /> */}
    </section>
  );
}
