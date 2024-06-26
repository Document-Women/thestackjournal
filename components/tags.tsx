import { uuid } from "../lib/helpers";

export default function Tags({ tags }) {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        Tags of this article:
        {tags.edges.map((tag) => (
          <span key={uuid()} className="ml-4 font-normal">
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
}
