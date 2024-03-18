import Alert from "./alert";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* Alert is more like a top banner present in all pages - zeelz */}
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
    </>
  );
}
