import Link from "next/link";
import Category from "./category";
import styles from "./post-body.module.css";
import { ShareFb, ShareLn, ShareLink, ShareTw } from "./share-icons";
import { useEffect, useState } from "react";
import { TWITTER_HANDLE } from "../lib/constants";
import { uuid } from "../lib/helpers";

export default function PostBody({ content, title, latest, categories }) {
  const [copied, setCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    // Check if window object is defined (to ensure code runs on the client-side)
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);
  const shareLink = {
    url: currentUrl, // encodeURIComponent(currentUrl) encoding not necessary except query params
    title,
    twitterHandle: TWITTER_HANDLE,
  };

  const handleCopy = (link) => {
    const txarea = document.createElement("textarea") as HTMLTextAreaElement;
    txarea.value = link;
    document.body.appendChild(txarea);

    txarea.select();
    document.execCommand("copy");
    document.body.removeChild(txarea);

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };
  return (
    <div className="container lg:w-4/5 mx-auto my-4 lg:my-12">
      <div className="lg:flex items-start gap-16 px-4 lg:px-0">
        <div>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <hr className="my-4" />

          <div className="social-icons flex gap-4 lg:gap-8">
            <a
              className=""
              href={`https://twitter.com/intent/tweet?url=${shareLink.url}&text=${shareLink.title}&via=${shareLink.twitterHandle}`}
              target="_blank"
              title="Twitter share link"
            >
              <ShareTw color={"#B68CFB"} className="hover:opacity-75" />
            </a>

            <a
              className=""
              href={`https://www.facebook.com/dialog/share?display=popup&href=${shareLink.url}`}
              target="_blank"
              title="Facebook share link"
            >
              <ShareFb color={"#B68CFB"} className="hover:opacity-75" />
            </a>

            <a
              className=""
              href={`https://www.linkedin.com/shareArticle?url=${shareLink.url}&mini=true&title=${shareLink.title}`}
              target="_blank"
              title="LinkedIn share link"
            >
              <ShareLn color={"#B68CFB"} className="hover:opacity-75" />
            </a>

            <button className="" onClick={(e) => handleCopy(shareLink.url)}>
              <ShareLink color={"#B68CFB"} className="hover:opacity-75" />
            </button>
            <span className="pt-1 italic">{copied && "link copied"}</span>
          </div>
          <hr className="my-4" />
        </div>

        <div className="lg:w-1/4 flex-none">
          {/* <div className="h-[300px] bg-red-500 mt-4">ad space</div> */}

          <div className="mb-8 ">
            <h4 className="text-2xl font-semibold my-2">Latest News</h4>
            <hr className="mb-4" />

            {latest.map(({ node }) => (
              <Link
                href={`/posts/${node.slug}`}
                key={uuid()}
                className="inline-block text-lg mb-4 hover:underline"
              >
                {node.title}
              </Link>
            ))}
          </div>

          <div className="bg-amber-100 rounded-2xl text-2xl p-6 my-4">
            <h3 className="text-xl leading-tight mb-4">
              Be the first to hear when it drops
            </h3>
            <form>
              <input
                type="text"
                className="w-full my-1 px-4 py-3 text-sm rounded-full border border-purple-500"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full my-1 px-4 py-3 text-sm rounded-full border border-purple-500"
                placeholder="Email Address"
              />

              <button className="w-full text-white text-sm my-4 px-2 py-4 rounded-full bg-purple-800 hover:bg-purple-500">
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-wrap gap-1 my-8">
            {categories.map(({ node }) => (
              <Link
                key={uuid()}
                href={`/category/${node.slug}`}
                className="capitalize rounded-full border border-black text-black text-xs lg:text-sm px-6 py-3 hover:bg-purple-500 hover:border-purple-500 hover:text-white"
              >
                {node.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
