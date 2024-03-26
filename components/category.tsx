import Link from "next/link";
import { getColor } from "../lib/category-params";

interface ICategory {
  category: { name: string; slug: string };
  style?: styleEnums;
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
  size = "", // for big or small card - default big
}: ICategory) {
  // const solid = `bg-${oolor} text-white`;
  // const outline = `border border-${oolor} text-${oolor}`;

  const colour = getColor(category.name);

  const solid = { backgroundColor: colour, color: "#FFF" };
  const outline = { outline: `solid 1px ${colour}`, color: colour };

  return (
    <Link href={`/category/${category.slug}`}>
      <span
        style={style === styleEnums.solid ? solid : outline}
        className={`capitalize rounded-full ${
          size ? "text-xs px-2 py-1" : "px-6 py-3"
        }`}
      >
        {" "}
        {category.name}{" "}
      </span>
    </Link>
  );
  // <Link href={`/category/${category.slug}`}>
  //   <span className={`capitalize text-gray-800`}> {category.name} </span>
  // </Link>
}
