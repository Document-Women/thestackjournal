export const getPostsByCategory = (posts, category) => {
    return posts.filter((edge) =>
        edge.node.categories.edges.some(({node}) => node.name === category)
    )
}

export const randy = (array: any[]) => array[Math.round(Math.random() * array.length)]

export const sluggify = (i) => i.split(" ").join("-")

export const unslug = (i) => i.split("-").join(" ")