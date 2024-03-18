import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Category from "./category";
import Author from "./author";
import { getColor } from "../lib/colors";

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
        <div className="w-3/5 max-h-[600px] mx-auto py-48 text-white text-center">
          <div className="my-4">
            <Category category={category} oolor={getColor(category.name)} />
          </div>

          <h1 className="text-lg lg:text-6xl font-semibold leading-snug">
            {title}
          </h1>
          {/* <div className="hidden md:block md:mb-12">
            <Avatar author={author} />
          </div> */}
          <div className="my-4 text-lg">
            <Author author={author} />
            <span className="mx-2"> | </span>
            <Date dateString={date} />
          </div>
        </div>
      </div>
    </>
  );
}
