export default function SectionSeparator({ tall = null }) {
  return (
    <hr
      className={`border-accent-2 ${tall ? "my-12 lg:my-20" : "my-8 lg:my-10"}`}
    />
  );
}
