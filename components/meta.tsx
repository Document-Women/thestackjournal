import Head from "next/head";
import { CMS_NAME, CMS_URL, HOME_OG_IMAGE_URL } from "../lib/constants";
import Script from "next/script";

export default function Meta({ ...rest }) {
  // props may not be passed
  let date, excerpt, title, slug, featuredImage;
  if (rest.post) {
    date = rest?.post.date;
    excerpt = rest?.post.excerpt;
    title = rest?.post.title;
    slug = rest?.post.slug;
    featuredImage = rest?.post.featuredImage;
  }

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      {/* <meta name="description" content={`${CMS_NAME}.`} />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}

      {/* Google Adsense */}
      <meta name="google-adsense-account" content="ca-pub-7693964294803532" />

      {/* opengraph tags */}

      {date && <meta property="article:published_time" content={date} />}
      {featuredImage && (
        <>
          <meta property="og:image" content={featuredImage?.node.sourceUrl} />
          <meta
            property="twitter:image"
            content={featuredImage?.node.sourceUrl}
          />
        </>
      )}
      {excerpt && (
        <>
          <meta property="og:description" content={excerpt} />
          <meta property="twitter:description" content={excerpt} />
        </>
      )}
      {title && (
        <>
          <meta property="og:title" content={title} />
          <meta property="twitter:title" content={title} />
        </>
      )}
      {slug && <meta property="og:url" content={`${CMS_URL}/posts/${slug}`} />}

      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@TheStackJournal" />
    </Head>
  );
}
