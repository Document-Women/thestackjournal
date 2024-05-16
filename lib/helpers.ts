import { v4 } from "uuid";

export const getPostsByCategory = (posts, category, limit = posts.length) => {
    const filteredPosts = posts.filter((edge) =>
        edge.node.categories.edges.some(({node}) => node.name === category)
    )
    return filteredPosts.slice(0, limit)
}

export const randy = (array: any[]) => array[Math.round(Math.random() * array.length)]

export const sluggify = (i) => i.split(" ").join("-")

export const unslug = (i) => i.split("-").join(" ")

export const sendEmail = async (subject, message, setDone) => {
    try {
      const data = await (
        await fetch("/api/mailer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subject, message }),
        })
      ).json();
      console.log({ data });
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 3000);
    } catch (err) {
      console.error(err);
    }
  };
  
export const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1)
export const uuid = v4