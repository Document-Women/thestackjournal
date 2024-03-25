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
  return (
    <section>
      <div className="border relative mb-8 lg:mb-16 rounded-[16px] lg:rounded-[45px] overflow-hidden z-0">
        {coverImage && true && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div className="w-4/5 relative bg-white shadow-xl rounded-[16px] lg:rounded-[30px] mx-auto -mt-40 lg:-mt-48 p-8 z-10">
        <div className="mb-4">
          <Category category={category} style={styleEnums.outline} />
        </div>

        <h3 className="mb-4 text-xl lg:text-6xl leading-tight">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h3>
        <div>
          By <Author author={author} />
        </div>
      </div>
      {/* <Date dateString={date} /> */}
    </section>
  );
}
