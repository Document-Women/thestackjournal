import Link from "next/link";

export default function Avatar({ author }) {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;

  return (
    // <Link href={""}>
    // author name should link to author's posts - https://wp.thestackjournal.com/author/miratsj/
    // but slug has fetch, why?
    <span className="font-semi-bold">{name}</span>
    // </Link>
  );
}
