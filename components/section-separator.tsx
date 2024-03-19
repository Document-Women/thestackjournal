export default function SectionSeparator({ tall = null }) {
  return <hr className={`border-accent-2 ${tall ? "my-20" : "my-10"}`} />;
}
