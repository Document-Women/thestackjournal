export const getPostsByCategory = (posts, category, limit = posts.length) => {
    const filteredPosts = posts.filter((edge) =>
        edge.node.categories.edges.some(({node}) => node.name === category)
    )
    return filteredPosts.slice(0, limit)
}

export const randy = (array: any[]) => array[Math.round(Math.random() * array.length)]

export const sluggify = (i) => i.split(" ").join("-")

export const unslug = (i) => i.split("-").join(" ")