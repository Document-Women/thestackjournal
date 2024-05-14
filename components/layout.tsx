import Alert from "./alert";
import Meta from "./meta";

export default function Layout({ preview, children, ...rest }) {
  // console.log(rest);
  return (
    <>
      {/* <Meta post={rest.post} /> */}
      <Meta {...rest} />
      <div className="min-h-screen" {...rest}>
        {/* Alert is more like a top banner present in all pages - zeelz */}
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
    </>
  );
}
