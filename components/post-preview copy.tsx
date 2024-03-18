import Author from "./author";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}) {
  const categoryColors = {
    "dear tech sis": "green",
    tech: "red",
    vc: "blue",
  }; // move this to lib or somewhere later

  return (
    <div
      className="flex text-white rounded-[30px]"
      style={{
        backgroundImage: `url(${coverImage?.node.sourceUrl})`,
      }}
    >
      {/* <div className="mb-5">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div> */}
      <div className="w-full rounded-b-[30px] bg-gradient-to-t from-black mt-64 px-4 py-8">
        <div
          className={`inline-block text-lg text-black mb-4 rounded-full px-4 py-2 bg-${categoryColors[category]}-500`}
        >
          {category}
        </div>
        <h3 className="h-[120px] text-3xl mb-3 leading-snug">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h3>
        By <Author author={author} />
      </div>
    </div>
  );
}
