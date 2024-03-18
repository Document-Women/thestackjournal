import Link from "next/link";

interface ICategory {
  category: any;
  style?: styleEnums;
  oolor: string;
  size?: string;
}

export enum styleEnums {
  solid = "solid",
  outline = "outline",
  plain = "plain",
}

export default function Categories({
  category,
  style = styleEnums.plain, // solid, outline or plain - default plain // consider enums - DONE!
  oolor,
  size = "", // for big or small card - default big
}: ICategory) {
  const solid = `bg-${oolor} text-white`;
  const outline = `border border-${oolor} text-${oolor}`;

  return style ? (
    <Link href={`/category/${category.slug}`}>
      <span
        className={`capitalize rounded-full ${
          style === styleEnums.solid ? solid : outline
        }  ${size ? "text-xs px-2 py-1" : "text-sm px-6 py-3"}`}
      >
        {" "}
        {category.name}{" "}
      </span>
    </Link>
  ) : (
    <Link href={`/category/${category.slug}`}>
      <span className={`capitalize text-gray-800`}> {category.name} </span>
    </Link>
  );
}
