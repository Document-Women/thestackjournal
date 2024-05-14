import Link from "next/link";

export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  // author name should link to author's posts  // but slug has fetch, why?
  return (
    <Link href={`/author/${author.node.slug}`}>
      <span className="font-semi-bold">{name}</span>
    </Link>
  );
}
