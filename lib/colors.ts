const categoryColors = {
    "dear tech sis": "green-500",
    "tech": "purple-500",
    "venture capital": "orange-500",
    "event": "blue-500",
    "startups": "indigo-500",
    "start-up": "indigo-500",
    "start up": "indigo-500",
    "twitter": "sky-500",
    "founders": "teal",
    "uncategorized": "lime-500",
};
    
export function getColor(category: string): string {
    const key = category || 'uncategorized' // return lime for uncategoried aka general
    return categoryColors[key.toLowerCase()];
};

// export const categories = Object.keys(categoryColors);