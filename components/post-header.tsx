import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Category from "./category";
import Author from "./author";
import { getColor } from "../lib/category-params";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  category,
}) {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `linear-gradient(0, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url(${coverImage?.node.sourceUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="max-h-96 overflow-hidden mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} coverImage={coverImage} />
        </div> */}

        {/* <PostTitle>{title}</PostTitle> */}
        <div className="lg:w-3/5 lg:max-h-[600px] mx-auto p-12 lg:px-0 lg:py-48 text-white text-center">
          <div className="my-4">
            <Category category={category} />
          </div>

          <h1 className="text-lg lg:text-6xl font-semibold leading-snug">
            {title}
          </h1>
          {/* <div className="hidden md:block md:mb-12">
            <Avatar author={author} />
          </div> */}
          <div className="my-4 text-sm lg:text-lg">
            <Author author={author} />
            <span className="mx-2"> | </span>
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
}
